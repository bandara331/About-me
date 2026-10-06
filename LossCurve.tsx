// A training-loss curve that draws itself once. Pure SVG, no libraries.
const W = 560, H = 240, N = 60;

function points() {
  const out: [number, number][] = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const noise = Math.sin(i * 12.9898) * 0.5 * (1 - t) * 0.12; // deterministic wobble
    const loss = 0.08 + 0.92 * Math.exp(-4.2 * t) + noise;
    out.push([t * W, 12 + (1 - Math.min(Math.max(loss, 0), 1)) * 0 + loss * (H - 36)]);
  }
  return out;
}

export default function LossCurve() {
  const pts = points();
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const last = pts[pts.length - 1];
  return (
    <figure className="curve">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Training loss falling across epochs">
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="grid" />
        ))}
        <path d={d} pathLength={1} className="line" />
        <circle cx={last[0]} cy={last[1]} r="5" className="dot" />
      </svg>
      <figcaption>
        <span>epoch 0</span>
        <span>loss converging</span>
        <span>epoch 60</span>
      </figcaption>
    </figure>
  );
}
