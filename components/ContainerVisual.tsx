import type { ContainerSize } from "@/lib/container-sizes";

/**
 * Renders a stylized rear-load commercial dumpster (or toter) as SVG,
 * scaled proportionally to real dimensions so a 2-yd looks smaller than an 8-yd.
 */
export default function ContainerVisual({
  size,
  className,
}: {
  size: ContainerSize;
  className?: string;
}) {
  if (size.isToter) return <ToterSVG className={className} />;

  const REF_LEN = 6.5;
  const REF_HEIGHT = 7;

  const lengthFt = parseFloat(size.dimensions.length);
  const heightFt = parseFloat(size.dimensions.height);

  const wPct = (lengthFt / REF_LEN) * 100;
  const hPct = (heightFt / REF_HEIGHT) * 100;

  const boxW = wPct * 1.4;
  const boxH = hPct * 0.85;

  const x = (200 - boxW) / 2;
  const y = 105 - boxH;

  const lidH = 4;

  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="100" cy="112" rx="60" ry="3" fill="rgba(0,0,0,0.08)" />
      <rect x={x} y={y} width={boxW} height={boxH} rx="2" fill="#0a0a0a" />
      <rect x={x - 3} y={y - lidH} width={boxW + 6} height={lidH} rx="1.5" fill="#7a1e2e" />
      <rect x={x + 2} y={y + 2} width={boxW - 4} height="1" fill="rgba(255,255,255,0.15)" />
      <text
        x={x + boxW / 2}
        y={y + boxH / 2 + 2.5}
        textAnchor="middle"
        fill="#7a1e2e"
        fontSize="7"
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
      >
        {size.yards} YD
      </text>
      <circle cx={x + 6} cy={y + boxH - 2} r="2" fill="#1f1f1f" />
      <circle cx={x + boxW - 6} cy={y + boxH - 2} r="2" fill="#1f1f1f" />
    </svg>
  );
}

function ToterSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="100" cy="112" rx="30" ry="2.5" fill="rgba(0,0,0,0.08)" />
      <rect x="82" y="35" width="36" height="65" rx="3" fill="#0a0a0a" />
      <rect x="79" y="30" width="42" height="6" rx="2" fill="#7a1e2e" />
      <text
        x="100"
        y="70"
        textAnchor="middle"
        fill="#7a1e2e"
        fontSize="6"
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
      >
        96 GAL
      </text>
      <circle cx="88" cy="102" r="3" fill="#1f1f1f" />
      <circle cx="112" cy="102" r="3" fill="#1f1f1f" />
    </svg>
  );
}
