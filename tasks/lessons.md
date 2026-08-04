# Lessons Learned

_Track corrections and patterns here to avoid repeating mistakes._

## Screenshot verification (2026-07-29)
- Full-page captures (Chrome `captureBeyondViewport` / Playwright `fullPage`) break pages
  using `vh` units: the viewport expands to the full page height, so `h-[calc(100vh-80px)]`
  sections balloon and content appears "duplicated". Verify mobile with viewport-sized
  segment screenshots (scroll + capture 844px windows), never tall stitched captures.
- Raw headless Chrome `--window-size=390,...` lays out at Chrome's ~500px minimum window
  width — mobile layouts must be verified with real device metrics (Playwright viewport).
- Sections animated with `whileInView` render blank in no-scroll captures; scroll through
  the page before capturing.
- SSR HTML checks: React inserts `<!-- -->` between JSX expressions — grep with that in
  the pattern (e.g. `01<!-- --> / <!-- -->LABEL`), or greps silently miss real content.
