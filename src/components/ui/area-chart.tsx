// @ts-nocheck
"use client";

import { localPoint } from "@visx/event";
import { curveMonotoneX } from "@visx/curve";
import { GridColumns, GridRows } from "@visx/grid";
import { ParentSize } from "@visx/responsive";
import { scaleLinear, scaleTime, type scaleBand } from "@visx/scale";
import { AreaClosed, LinePath } from "@visx/shape";
import { bisector } from "d3-array";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type ReactElement,
  type ReactNode,
  type RefObject,
  type SetStateAction,
} from "react";
import useMeasure from "react-use-measure";
import { createPortal } from "react-dom";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CurveFactory = any;
type ScaleLinearType<Output, _Input = number> = ReturnType<typeof scaleLinear<Output>>;
type ScaleTimeType<Output, _Input = Date | number> = ReturnType<typeof scaleTime<Output>>;
type ScaleBandType<Domain extends { toString(): string }> = ReturnType<typeof scaleBand<Domain>>;

export const chartCssVars = {
  background: "var(--chart-background)",
  foreground: "var(--chart-foreground)",
  foregroundMuted: "var(--chart-foreground-muted)",
  label: "var(--chart-label)",
  linePrimary: "var(--chart-line-primary)",
  lineSecondary: "var(--chart-line-secondary)",
  crosshair: "var(--chart-crosshair)",
  grid: "var(--chart-grid)",
  indicatorColor: "var(--chart-indicator-color)",
  indicatorSecondaryColor: "var(--chart-indicator-secondary-color)",
  markerBackground: "var(--chart-marker-background)",
  markerBorder: "var(--chart-marker-border)",
  markerForeground: "var(--chart-marker-foreground)",
  badgeBackground: "var(--chart-marker-badge-background)",
  badgeForeground: "var(--chart-marker-badge-foreground)",
  segmentBackground: "var(--chart-segment-background)",
  segmentLine: "var(--chart-segment-line)",
};

export interface Margin { top: number; right: number; bottom: number; left: number; }
export interface TooltipData { point: Record<string, unknown>; index: number; x: number; yPositions: Record<string, number>; xPositions?: Record<string, number>; }
export interface LineConfig { dataKey: string; stroke: string; strokeWidth: number; }
export interface ChartSelection { startX: number; endX: number; startIndex: number; endIndex: number; active: boolean; }

export interface ChartContextValue {
  data: Record<string, unknown>[]; xScale: ScaleTimeType<number, number>; yScale: ScaleLinearType<number, number>;
  width: number; height: number; innerWidth: number; innerHeight: number; margin: Margin; columnWidth: number;
  tooltipData: TooltipData | null; setTooltipData: Dispatch<SetStateAction<TooltipData | null>>;
  containerRef: RefObject<HTMLDivElement | null>; lines: LineConfig[]; isLoaded: boolean; animationDuration: number;
  xAccessor: (d: Record<string, unknown>) => Date; dateLabels: string[];
  selection?: ChartSelection | null; clearSelection?: () => void;
  barScale?: ScaleBandType<string>; bandWidth?: number; hoveredBarIndex?: number | null;
  setHoveredBarIndex?: (index: number | null) => void; barXAccessor?: (d: Record<string, unknown>) => string;
  orientation?: "vertical" | "horizontal"; stacked?: boolean; stackOffsets?: Map<number, Map<string, number>>;
}

const ChartContext = createContext<ChartContextValue | null>(null);
function ChartProvider({ children, value }: { children: ReactNode; value: ChartContextValue }) {
  return <ChartContext.Provider value={value}>{children}</ChartContext.Provider>;
}
function useChart(): ChartContextValue {
  const context = useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a ChartProvider.");
  return context;
}

type ScaleTime = ReturnType<typeof scaleTime<number>>;
type ScaleLinear = ReturnType<typeof scaleLinear<number>>;

interface UseChartInteractionParams {
  xScale: ScaleTime; yScale: ScaleLinear; data: Record<string, unknown>[]; lines: LineConfig[];
  margin: Margin; xAccessor: (d: Record<string, unknown>) => Date;
  bisectDate: (data: Record<string, unknown>[], date: Date, lo: number) => number; canInteract: boolean;
}

function useChartInteraction({ xScale, yScale, data, lines, margin, xAccessor, bisectDate, canInteract }: UseChartInteractionParams) {
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [selection, setSelection] = useState<ChartSelection | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef<number>(0);

  const resolveTooltipFromX = useCallback((pixelX: number): TooltipData | null => {
    const x0 = xScale.invert(pixelX);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1]; const d1 = data[index];
    if (!d0) return null;
    let d = d0; let finalIndex = index - 1;
    if (d1) { if (x0.getTime() - xAccessor(d0).getTime() > xAccessor(d1).getTime() - x0.getTime()) { d = d1; finalIndex = index; } }
    const yPositions: Record<string, number> = {};
    for (const line of lines) { const value = d[line.dataKey]; if (typeof value === "number") yPositions[line.dataKey] = yScale(value) ?? 0; }
    return { point: d, index: finalIndex, x: xScale(xAccessor(d)) ?? 0, yPositions };
  }, [xScale, yScale, data, lines, xAccessor, bisectDate]);

  const resolveIndexFromX = useCallback((pixelX: number): number => {
    const x0 = xScale.invert(pixelX); const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1]; const d1 = data[index];
    if (!d0) return 0;
    if (d1 && x0.getTime() - xAccessor(d0).getTime() > xAccessor(d1).getTime() - x0.getTime()) return index;
    return index - 1;
  }, [xScale, data, xAccessor, bisectDate]);

  const getChartX = useCallback((event: React.MouseEvent<SVGGElement> | React.TouchEvent<SVGGElement>, touchIndex = 0): number | null => {
    let point: { x: number; y: number } | null = null;
    if ("touches" in event) { const touch = event.touches[touchIndex]; if (!touch) return null; const svg = event.currentTarget.ownerSVGElement; if (!svg) return null; point = localPoint(svg, touch as unknown as MouseEvent); } else { point = localPoint(event); }
    if (!point) return null; return point.x - margin.left;
  }, [margin.left]);

  const handleMouseMove = useCallback((event: React.MouseEvent<SVGGElement>) => {
    const chartX = getChartX(event); if (chartX === null) return;
    if (isDraggingRef.current) { const startX = Math.min(dragStartXRef.current, chartX); const endX = Math.max(dragStartXRef.current, chartX); setSelection({ startX, endX, startIndex: resolveIndexFromX(startX), endIndex: resolveIndexFromX(endX), active: true }); return; }
    const tooltip = resolveTooltipFromX(chartX); if (tooltip) setTooltipData(tooltip);
  }, [getChartX, resolveTooltipFromX, resolveIndexFromX]);

  const handleMouseLeave = useCallback(() => { setTooltipData(null); if (isDraggingRef.current) isDraggingRef.current = false; setSelection(null); }, []);
  const handleMouseDown = useCallback((event: React.MouseEvent<SVGGElement>) => { const chartX = getChartX(event); if (chartX === null) return; isDraggingRef.current = true; dragStartXRef.current = chartX; setTooltipData(null); setSelection(null); }, [getChartX]);
  const handleMouseUp = useCallback(() => { if (isDraggingRef.current) isDraggingRef.current = false; setSelection(null); }, []);
  const clearSelection = useCallback(() => setSelection(null), []);

  const interactionHandlers = canInteract ? { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp } : {};
  return { tooltipData, setTooltipData, selection, clearSelection, interactionHandlers, interactionStyle: { cursor: canInteract ? "crosshair" : "default", touchAction: "none" } as React.CSSProperties };
}

// Tooltip components
interface TooltipDotProps { x: number; y: number; visible: boolean; color: string; size?: number; strokeColor?: string; strokeWidth?: number; }
function TooltipDot({ x, y, visible, color, size = 5, strokeColor = chartCssVars.background, strokeWidth = 2 }: TooltipDotProps) {
  const cfg = { stiffness: 300, damping: 30 }; const ax = useSpring(x, cfg); const ay = useSpring(y, cfg);
  useEffect(() => { ax.set(x); ay.set(y); }, [x, y, ax, ay]);
  if (!visible) return null;
  return <motion.circle cx={ax} cy={ay} fill={color} r={size} stroke={strokeColor} strokeWidth={strokeWidth} />;
}

interface TooltipIndicatorProps { x: number; height: number; visible: boolean; width?: number | "line" | "thin" | "medium" | "thick"; span?: number; columnWidth?: number; colorEdge?: string; colorMid?: string; fadeEdges?: boolean; gradientId?: string; }
function TooltipIndicator({ x, height, visible, width = "line", span, columnWidth, colorEdge = chartCssVars.crosshair, colorMid = chartCssVars.crosshair, fadeEdges = true, gradientId = "tooltip-indicator-gradient" }: TooltipIndicatorProps) {
  const resolveW = (w: typeof width) => typeof w === "number" ? w : w === "thin" ? 2 : w === "medium" ? 4 : w === "thick" ? 8 : 1;
  const pw = span !== undefined && columnWidth !== undefined ? span * columnWidth : resolveW(width);
  const cfg = { stiffness: 300, damping: 30 }; const ax = useSpring(x - pw / 2, cfg);
  useEffect(() => { ax.set(x - pw / 2); }, [x, ax, pw]);
  if (!visible) return null;
  return <g><defs><linearGradient id={gradientId} x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" style={{ stopColor: colorEdge, stopOpacity: fadeEdges ? 0 : 1 }} /><stop offset="10%" style={{ stopColor: colorEdge, stopOpacity: 1 }} /><stop offset="50%" style={{ stopColor: colorMid, stopOpacity: 1 }} /><stop offset="90%" style={{ stopColor: colorEdge, stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: colorEdge, stopOpacity: fadeEdges ? 0 : 1 }} /></linearGradient></defs><motion.rect fill={`url(#${gradientId})`} height={height} width={pw} x={ax} y={0} /></g>;
}

export interface TooltipRow { color: string; label: string; value: string | number; }
function TooltipContent({ title, rows, children }: { title?: string; rows: TooltipRow[]; children?: ReactNode }) {
  return <div className="px-3 py-2.5">{title && <div className="mb-2 font-medium text-xs">{title}</div>}<div className="space-y-1.5">{rows.map((row) => <div className="flex items-center justify-between gap-4" key={`${row.label}-${row.color}`}><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: row.color }} /><span className="text-sm">{row.label}</span></div><span className="font-medium text-sm tabular-nums">{typeof row.value === "number" ? row.value.toLocaleString() : row.value}</span></div>)}</div>{children && <div className="mt-2">{children}</div>}</div>;
}

// Grid
export interface GridProps { horizontal?: boolean; vertical?: boolean; numTicksRows?: number; numTicksColumns?: number; rowTickValues?: number[]; stroke?: string; strokeOpacity?: number; strokeWidth?: number; strokeDasharray?: string; fadeHorizontal?: boolean; fadeVertical?: boolean; }
export function Grid({ horizontal = true, vertical = false, numTicksRows = 5, numTicksColumns = 10, rowTickValues, stroke = chartCssVars.grid, strokeOpacity = 1, strokeWidth = 1, strokeDasharray = "4,4", fadeHorizontal = true }: GridProps) {
  const { xScale, yScale, innerWidth, innerHeight } = useChart();
  return <g className="chart-grid">{horizontal && <GridRows numTicks={rowTickValues ? undefined : numTicksRows} scale={yScale} stroke={stroke} strokeDasharray={strokeDasharray} strokeOpacity={strokeOpacity} strokeWidth={strokeWidth} tickValues={rowTickValues} width={innerWidth} />}{vertical && <GridColumns height={innerHeight} numTicks={numTicksColumns} scale={xScale} stroke={stroke} strokeDasharray={strokeDasharray} strokeOpacity={strokeOpacity} strokeWidth={strokeWidth} />}</g>;
}

// Area
export interface AreaProps { dataKey: string; fill?: string; fillOpacity?: number; stroke?: string; strokeWidth?: number; curve?: CurveFactory; animate?: boolean; showLine?: boolean; showHighlight?: boolean; gradientToOpacity?: number; fadeEdges?: boolean; }
export function Area({ dataKey, fill = chartCssVars.linePrimary, fillOpacity = 0.4, stroke, strokeWidth = 2, curve = curveMonotoneX, animate = true, showLine = true }: AreaProps) {
  const { data, xScale, yScale, innerHeight, innerWidth, isLoaded, animationDuration, xAccessor } = useChart();
  const gradientId = useMemo(() => `area-gradient-${dataKey}-${Math.random().toString(36).slice(2, 9)}`, [dataKey]);
  const getY = useCallback((d: Record<string, unknown>) => { const v = d[dataKey]; return typeof v === "number" ? (yScale(v) ?? 0) : 0; }, [dataKey, yScale]);
  const resolvedStroke = stroke || fill;
  return <><defs><linearGradient id={gradientId} x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" style={{ stopColor: fill, stopOpacity: fillOpacity }} /><stop offset="100%" style={{ stopColor: fill, stopOpacity: 0 }} /></linearGradient></defs><g><AreaClosed curve={curve} data={data} fill={`url(#${gradientId})`} x={(d) => xScale(xAccessor(d)) ?? 0} y={getY} yScale={yScale} />{showLine && <LinePath curve={curve} data={data} stroke={resolvedStroke} strokeLinecap="round" strokeWidth={strokeWidth} x={(d) => xScale(xAccessor(d)) ?? 0} y={getY} />}</g></>;
}
Area.displayName = "Area";

// AreaChart
function extractAreaConfigs(children: ReactNode): LineConfig[] {
  const configs: LineConfig[] = [];
  Children.forEach(children, (child) => { if (!isValidElement(child)) return; const props = child.props as AreaProps | undefined; if (props?.dataKey) configs.push({ dataKey: props.dataKey, stroke: props.stroke || props.fill || "var(--chart-line-primary)", strokeWidth: props.strokeWidth || 2 }); });
  return configs;
}

export interface AreaChartProps { data: Record<string, unknown>[]; xDataKey?: string; margin?: Partial<Margin>; animationDuration?: number; aspectRatio?: string; className?: string; children: ReactNode; }
const DEFAULT_MARGIN: Margin = { top: 40, right: 40, bottom: 40, left: 40 };

function ChartInner({ width, height, data, xDataKey, margin, animationDuration, children, containerRef }: { width: number; height: number; data: Record<string, unknown>[]; xDataKey: string; margin: Margin; animationDuration: number; children: ReactNode; containerRef: RefObject<HTMLDivElement | null> }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const lines = useMemo(() => extractAreaConfigs(children), [children]);
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xAccessor = useCallback((d: Record<string, unknown>): Date => { const v = d[xDataKey]; return v instanceof Date ? v : new Date(v as string | number); }, [xDataKey]);
  const bisectDateFn = useMemo(() => bisector<Record<string, unknown>, Date>((d) => xAccessor(d)).left, [xAccessor]);
  const xScale = useMemo(() => { const dates = data.map(d => xAccessor(d)); return scaleTime({ range: [0, innerWidth], domain: [Math.min(...dates.map(d => d.getTime())), Math.max(...dates.map(d => d.getTime()))] }); }, [innerWidth, data, xAccessor]);
  const columnWidth = useMemo(() => data.length < 2 ? 0 : innerWidth / (data.length - 1), [innerWidth, data.length]);
  const yScale = useMemo(() => { let max = 0; for (const line of lines) for (const d of data) { const v = d[line.dataKey]; if (typeof v === "number" && v > max) max = v; } if (max === 0) max = 100; return scaleLinear({ range: [innerHeight, 0], domain: [0, max * 1.1], nice: true }); }, [innerHeight, data, lines]);
  const dateLabels = useMemo(() => data.map(d => xAccessor(d).toLocaleDateString("en-US", { month: "short", day: "numeric" })), [data, xAccessor]);
  useEffect(() => { const t = setTimeout(() => setIsLoaded(true), animationDuration); return () => clearTimeout(t); }, [animationDuration]);
  const { tooltipData, setTooltipData, selection, clearSelection, interactionHandlers, interactionStyle } = useChartInteraction({ xScale, yScale, data, lines, margin, xAccessor, bisectDate: bisectDateFn, canInteract: isLoaded });
  if (width < 10 || height < 10) return null;
  const contextValue = { data, xScale, yScale, width, height, innerWidth, innerHeight, margin, columnWidth, tooltipData, setTooltipData, containerRef, lines, isLoaded, animationDuration, xAccessor, dateLabels, selection, clearSelection };
  return <ChartProvider value={contextValue}><svg aria-hidden="true" height={height} width={width}><rect fill="transparent" height={height} width={width} x={0} y={0} /><g {...interactionHandlers} style={interactionStyle} transform={`translate(${margin.left},${margin.top})`}><rect fill="transparent" height={innerHeight} width={innerWidth} x={0} y={0} />{children}</g></svg></ChartProvider>;
}

export function AreaChart({ data, xDataKey = "date", margin: marginProp, animationDuration = 1100, aspectRatio = "2 / 1", className = "", children }: AreaChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const margin = { ...DEFAULT_MARGIN, ...marginProp };
  return <div className={cn("relative w-full", className)} ref={containerRef} style={{ aspectRatio, touchAction: "none" }}><ParentSize debounceTime={10}>{({ width, height }) => <ChartInner animationDuration={animationDuration} containerRef={containerRef} data={data} height={height} margin={margin} width={width} xDataKey={xDataKey}>{children}</ChartInner>}</ParentSize></div>;
}

export default AreaChart;
