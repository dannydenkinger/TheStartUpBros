"use client";

import { useEffect, useRef } from "react";

/* ---------------------------------------------------------------------------
 * SilkFieldB — flow-field / curl-noise silk.
 *
 * Coordinates are advected along a divergence-free curl-noise velocity field
 * (two passes, coarse then fine), so the folds genuinely *flow* like liquid
 * cloth rather than a static warp that merely animates. Height comes from an
 * fBm sampled at the advected point; the pale rim lines along the fold crests
 * come from a normal built off that height plus a shear term read straight out
 * of the flow field, so the light is intrinsic to the motion.
 * ------------------------------------------------------------------------- */

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;   // in centred/aspect space
uniform float uMouseA;  // 0..1 activity

const mat2 M = mat2(0.8, 0.6, -0.6, 0.8);

/* Measured against a pure-ALU integer hash: that one is tuned for float inputs and
   correlates badly on the integer lattice this value noise samples, which
   visibly flattens the folds. sin() is one SFU instruction and looks right. */
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

/* quintic value noise -> C2 continuous, so nothing creases or bands */
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0 - 1.0;
}

/* 2 octaves for the flow potential. It is read through a wide finite
   difference (eps ~0.5), which low-passes it anyway, so further octaves
   cost 6 noise lookups a pixel and cancel out of the curl.               */
float fbmFlow(vec2 p) {
  float s = 0.62 * vnoise(p);
  s += 0.34 * vnoise(M * p * 2.03);
  return s;
}

/* 3 octaves at very low gain -> soft-focus, no fine grain. A 4th octave
   would contribute ~1.6% of the amplitude: invisible, and 3 lookups.     */
float fbmH(vec2 p) {
  float s = 0.0, a = 0.74;
  s += a * vnoise(p); p = M * p * 2.02; a = 0.215;
  s += a * vnoise(p); p = M * p * 2.03; a = 0.065;
  s += a * vnoise(p);
  return s;
}

/* curl of an fbm potential: divergence-free => pure swirl, no sources/sinks.
   returns velocity in .xy and the raw potential in .z                      */
vec3 curl(vec2 p, float e) {
  float n0 = fbmFlow(p);
  float nx = fbmFlow(p + vec2(e, 0.0));
  float ny = fbmFlow(p + vec2(0.0, e));
  return vec3((ny - n0) / e, -(nx - n0) / e, n0);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = frag / uRes;
  vec2 p = (frag - 0.5 * uRes) / uRes.y;

  float t = uTime;

  /* --- lissajous churn: the field evolves in place, it never pans ------- */
  vec2 d1 = vec2(cos(t * 0.0122), sin(t * 0.0094)) * 0.52;
  vec2 d2 = vec2(sin(t * 0.0108 + 2.1), cos(t * 0.0086 + 0.7)) * 0.42;
  vec2 d3 = vec2(cos(t * 0.0065 + 1.3), sin(t * 0.0079 + 3.4)) * 0.62;

  /* --- pass 1: coarse advection. Big epsilon = wide, smooth folds ------- */
  vec3 c1 = curl(p * 0.60 + d1, 0.48);
  vec2 q = p + c1.xy * 1.15;

  /* --- pointer disruption: swirl + gentle push, injected between the two
         advection passes so it deforms the cloth instead of sitting on it. */
  /* The displacement is built from md itself, never from normalize(md): a
     normalised direction is discontinuous at r=0 and pinches the cloth into
     a hard vortex point. Weighting the raw offset by a gaussian gives
     r*exp(-r^2), which vanishes smoothly at the cursor and at infinity.   */
  vec2 md = p - uMouse;
  float mr2 = dot(md, md);
  float mg = exp(-mr2 * 6.5) * uMouseA;
  float ripple = sin(mr2 * 12.0 - t * 1.1);
  q += vec2(-md.y, md.x) * mg * 0.92;            // swirl
  q += md * mg * (0.30 + 0.16 * ripple);         // breathe

  /* --- pass 2: finer advection, riding on top of pass 1 ----------------- */
  vec3 c2 = curl(q * 0.70 + d2, 0.46);
  q += c2.xy * 0.52;

  /* --- height field at the advected point ------------------------------ */
  vec2 hp = q * 0.56 + d3;
  float h  = fbmH(hp);
  /* wide epsilon = the normal is read over a broad area, i.e. soft focus  */
  float e  = 0.16;
  float hx = fbmH(hp + vec2(e, 0.0));
  float hy = fbmH(hp + vec2(0.0, e));

  /* normal from the height field; z scales the apparent softness */
  vec3 nrm = normalize(vec3((h - hx) * 0.80, (h - hy) * 0.80, e * 0.55));

  vec3 L = normalize(vec3(-0.46, 0.52, 0.72));
  float lam = clamp(dot(nrm, L), 0.0, 1.0);

  /* Rim lines are LEVEL SETS of lam, not a power lobe. A gaussian band on a
     smooth scalar is a curve, so this draws a thin luminous line that traces
     the crest of every fold instead of flooding the whole lit side.        */
  float dA = (lam - 0.885) / 0.052;
  float dB = (lam - 0.800) / 0.105;
  float rimA = exp(-dA * dA);   // pale core of the rim
  float rimB = exp(-dB * dB);   // its soft halo
  /* broad diffuse shading that gives the cloth its body */
  float body = smoothstep(0.30, 0.95, lam);
  /* shear of the flow field adds a second highlight family that moves with
     the liquid rather than with the height                                */
  float shear = clamp(length(c2.xy) * 0.5, 0.0, 1.0);

  /* --- tone: 0..1 mass value ------------------------------------------ */
  float m = h * 0.60 + 0.46 + c1.z * 0.16 + body * 0.13;
  m = clamp(m, 0.0, 1.0);

  /* --- composition: violet mass fills the left ~70%, then a fast, organic
         drop through the rim into true black on the right ---------------- */
  float edge = uv.x + h * 0.17 + c1.x * 0.06;
  float fall = smoothstep(1.02, 0.62, edge);
  float corner = smoothstep(1.30, 0.30, length((uv - vec2(0.30, 0.54)) * vec2(1.10, 0.92)));

  float mass = clamp(m * (0.14 + 0.96 * fall) * (0.22 + 0.84 * corner), 0.0, 1.4);

  /* --- palette --------------------------------------------------------- */
  vec3 cVoid = vec3(0.020, 0.018, 0.035);
  vec3 cDeep = vec3(0.075, 0.035, 0.360);  // #130959 — deep indigo shadow
  vec3 cCore = vec3(0.239, 0.122, 0.780);  // #3d1fc7 — saturated core
  vec3 cMid  = vec3(0.290, 0.145, 0.870);  // #4a25de — bright mid-tone
  vec3 cHot  = vec3(0.357, 0.231, 0.937);  // #5b3bef — top of the mass
  vec3 cRim  = vec3(0.545, 0.482, 1.000);  // #8b7bff — rim halo
  vec3 cPale = vec3(0.760, 0.720, 1.000);  // #c2b8ff — rim core

  vec3 col = cVoid;
  col = mix(col, cDeep, smoothstep(0.00, 0.32, mass));
  col = mix(col, cCore, smoothstep(0.26, 0.70, mass));
  col = mix(col, cMid,  smoothstep(0.64, 1.00, mass));
  col = mix(col, cHot,  smoothstep(0.94, 1.24, mass));

  float lit = fall * (0.14 + 0.86 * corner);
  float onMass = smoothstep(0.12, 0.52, mass);

  col += cPale * rimA * 0.60 * lit * onMass;
  col += cRim  * rimB * 0.26 * lit * onMass;
  col += cRim  * shear * 0.09 * lit;

  /* keep the far right genuinely black */
  col *= smoothstep(1.16, 0.55, uv.x + h * 0.12);
  col += cVoid * 0.5;

  /* Reinhard on LUMINANCE, not per-channel — a per-channel knee desaturates
     the highlights to grey, which is exactly what silk must not do.       */
  float lw = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= 1.0 / (1.0 + lw * 0.40);

  /* push saturation back up; the violet has to stay a violet */
  float grey = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(grey), col, 1.12);
  col = max(col, vec3(0.0));
  col = pow(col, vec3(0.94));

  /* ordered-ish dither kills 8-bit banding across these long ramps */
  float dth = hash(frag + fract(t) * 71.3) - 0.5;
  col += dth * (2.2 / 255.0);

  gl_FragColor = vec4(col, 1.0);
}
`;

const CSS_FALLBACK =
  "radial-gradient(120% 100% at 22% 46%, #5b3bef 0%, #3d1fc7 34%, #1b0e66 58%, #07070c 82%, #050505 100%)";

/* Time the single reduced-motion frame is frozen at — chosen because the
 * field has drifted into a well-composed drape by then. */
const STATIC_T = 31.5;

/* preserveDrawingBuffer is OFF for the animated path (it forces an extra
 * buffer copy every composite). It must be ON for the reduced-motion path:
 * that draws exactly one frame, and without it the browser clears the
 * drawing buffer after the first composite and the canvas goes empty. */
const glAttrs = (preserveDrawingBuffer: boolean): WebGLContextAttributes => ({
  alpha: false,
  antialias: false,
  depth: false,
  stencil: false,
  powerPreference: "high-performance",
  preserveDrawingBuffer,
});

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    if (log && process.env.NODE_ENV !== "production") {
      console.error("[SilkFieldB]", log);
    }
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export function SilkFieldB({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") return;

    const parent = canvas.parentElement;
    const showFallback = () => {
      if (parent) parent.style.background = CSS_FALLBACK;
      canvas.style.display = "none";
    };

    const mq = (q: string) =>
      typeof window.matchMedia === "function" && window.matchMedia(q).matches;
    const reduced = mq("(prefers-reduced-motion: reduce)");
    const finePointer = mq("(pointer: fine)");

    const attrs = glAttrs(reduced);
    const gl = (canvas.getContext("webgl2", attrs) ||
      canvas.getContext("webgl", attrs)) as WebGLRenderingContext | null;

    if (!gl) {
      showFallback();
      return;
    }

    const loseExt = gl.getExtension("WEBGL_lose_context");

    /* ---------------- GL objects (rebuilt if the context is lost) -------- */
    let prog: WebGLProgram | null = null;
    let buf: WebGLBuffer | null = null;
    let uRes: WebGLUniformLocation | null = null;
    let uTime: WebGLUniformLocation | null = null;
    let uMouse: WebGLUniformLocation | null = null;
    let uMouseA: WebGLUniformLocation | null = null;
    let ready = false;
    let w = 0;
    let h = 0;

    const buildGL = () => {
      const vs = compile(gl, gl.VERTEX_SHADER, VERT);
      const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
      const p = vs && fs ? gl.createProgram() : null;
      if (!vs || !fs || !p) {
        if (vs) gl.deleteShader(vs);
        if (fs) gl.deleteShader(fs);
        return false;
      }
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        gl.deleteProgram(p);
        return false;
      }

      prog = p;
      gl.useProgram(prog);

      buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      // one oversized triangle covers the viewport with no wasted vertices
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        gl.STATIC_DRAW,
      );
      const loc = gl.getAttribLocation(prog, "aPos");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      uRes = gl.getUniformLocation(prog, "uRes");
      uTime = gl.getUniformLocation(prog, "uTime");
      uMouse = gl.getUniformLocation(prog, "uMouse");
      uMouseA = gl.getUniformLocation(prog, "uMouseA");

      w = 0; // force the next resize() to re-upload uRes
      h = 0;
      ready = true;
      return true;
    };

    const destroyGL = () => {
      ready = false;
      if (prog) gl.deleteProgram(prog);
      if (buf) gl.deleteBuffer(buf);
      prog = null;
      buf = null;
    };

    /* ---------------- sizing ---------------- */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      const nw = Math.max(1, Math.round(rect.width * dpr));
      const nh = Math.max(1, Math.round(rect.height * dpr));
      if (nw === w && nh === h) return false;
      w = nw;
      h = nh;
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
      return true;
    };

    /* ---------------- pointer state ---------------- */
    // centred/aspect space: x in +/-aspect/2, y in +/-0.5, y-up
    const target = { x: 0.34, y: 0.06 };
    const cur = { x: 0.34, y: 0.06 };
    let aimA = 0;
    let curA = 0;

    const draw = (t: number) => {
      if (!ready) return;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, cur.x, cur.y);
      gl.uniform1f(uMouseA, curA);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    /* ---------------- animation loop ---------------- */
    let raf = 0;
    let visible = true;
    let shown = document.visibilityState !== "hidden";
    let last = 0;
    let clock = 0;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
      last = now;
      clock += dt;

      resize();

      // inertial follow, then relaxation back to rest ~1.2s after leaving
      const k = 1 - Math.exp(-dt * 3.4);
      cur.x += (target.x - cur.x) * k;
      cur.y += (target.y - cur.y) * k;
      curA += (aimA - curA) * (1 - Math.exp(-dt * (aimA > curA ? 4.5 : 2.6)));

      draw(clock);
    };

    const start = () => {
      if (raf || reduced || !ready || !visible || !shown) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    /* One still frame for reduced motion, or a repaint while the loop is
       parked (off-screen / hidden tab) so a resize never leaves it blank. */
    const paint = () => {
      if (!ready) return;
      resize();
      draw(reduced ? STATIC_T : clock);
    };

    /* ---------------- context loss ---------------- */
    let disposed = false;

    const onLost = (ev: Event) => {
      ev.preventDefault(); // opt in to a later restore
      stop();
      ready = false;
      prog = null;
      buf = null;
    };
    const onRestored = () => {
      if (disposed) return;
      if (buildGL()) {
        paint();
        start();
      } else {
        showFallback();
      }
    };
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);

    /* A driver reset can hand us an already-lost context. Ask for it back
       rather than compiling into a dead one (which silently renders nothing). */
    if (gl.isContextLost()) {
      loseExt?.restoreContext();
    } else if (buildGL()) {
      paint();
    } else {
      showFallback();
    }

    /* ---------------- pointer ---------------- */
    const onMove = (ev: PointerEvent) => {
      if (ev.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.height) return;
      target.x = (ev.clientX - rect.left - rect.width * 0.5) / rect.height;
      target.y = -(ev.clientY - rect.top - rect.height * 0.5) / rect.height;
      aimA = 1;
    };
    const onLeave = () => {
      aimA = 0;
    };

    const pointerLive = finePointer && !reduced;
    if (pointerLive) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      window.addEventListener("blur", onLeave);
    }

    /* ---------------- lifecycle gates ---------------- */
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVis = () => {
      shown = document.visibilityState !== "hidden";
      if (shown) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVis);

    const ro = new ResizeObserver(() => {
      if (!raf) paint();
    });
    ro.observe(canvas);

    start();

    return () => {
      disposed = true;
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      if (pointerLive) {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerdown", onMove);
        document.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("blur", onLeave);
      }
      /* Deliberately NOT calling loseContext() here. It permanently kills the
       * context for this <canvas>, and React reuses the same element on a
       * remount (StrictMode double-invokes effects), where restoreContext()
       * does not reliably bring it back — the canvas then renders nothing.
       * Deleting the program and buffer already releases the GPU resources. */
      destroyGL();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
