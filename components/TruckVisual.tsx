/**
 * Rear-load garbage truck approaching a dumpster.
 * Distinct hero visual — signals recurring pickup service (vs. a static container).
 */
export default function TruckVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1a1a" />
          <stop offset="1" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* Road */}
      <rect x="0" y="165" width="340" height="35" fill="url(#road)" />
      <path d="M 20 182 L 60 182 M 90 182 L 130 182 M 160 182 L 200 182 M 230 182 L 270 182 M 300 182 L 340 182" stroke="#7a1e2e" strokeWidth="2" strokeLinecap="round" />

      {/* Motion lines behind truck */}
      <path d="M 25 90 L 55 90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 15 110 L 50 110" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 25 130 L 55 130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Container (destination on right) */}
      <g>
        <ellipse cx="285" cy="170" rx="35" ry="3" fill="rgba(0,0,0,0.3)" />
        <rect x="252" y="120" width="65" height="45" rx="2" fill="#1a1a1a" stroke="#333" />
        <rect x="248" y="115" width="73" height="8" rx="2" fill="#7a1e2e" />
        <text x="285" y="147" textAnchor="middle" fill="#7a1e2e" fontSize="10" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">GLW</text>
        <circle cx="263" cy="165" r="4" fill="#0a0a0a" stroke="#444" />
        <circle cx="307" cy="165" r="4" fill="#0a0a0a" stroke="#444" />
      </g>

      {/* Truck */}
      <g>
        {/* Truck bed (rear-load body) */}
        <rect x="70" y="70" width="130" height="90" rx="4" fill="#7a1e2e" />
        <rect x="70" y="70" width="130" height="12" fill="#5c1622" />
        <rect x="80" y="90" width="110" height="60" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />

        {/* Text on truck side */}
        <text x="135" y="118" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.5">GREAT LAKES</text>
        <text x="135" y="132" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1">WASTE</text>
        <text x="135" y="144" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="5" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1">(800) 368-0836</text>

        {/* Cab */}
        <rect x="200" y="100" width="35" height="60" rx="4" fill="#0a0a0a" />
        <rect x="205" y="108" width="26" height="20" rx="2" fill="#7a1e2e" opacity="0.6" />
        {/* Hood */}
        <rect x="230" y="115" width="12" height="45" rx="2" fill="#0a0a0a" />
        {/* Headlight */}
        <circle cx="240" cy="140" r="2.5" fill="#f4a300" />
        {/* Bumper */}
        <rect x="235" y="150" width="10" height="6" rx="1" fill="#333" />

        {/* Rear-load lift arm (over container) */}
        <path d="M 70 90 Q 40 60 30 100" stroke="#5c1622" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Wheels */}
        <circle cx="90" cy="162" r="12" fill="#0a0a0a" stroke="#333" strokeWidth="2" />
        <circle cx="90" cy="162" r="5" fill="#333" />
        <circle cx="140" cy="162" r="12" fill="#0a0a0a" stroke="#333" strokeWidth="2" />
        <circle cx="140" cy="162" r="5" fill="#333" />
        <circle cx="215" cy="162" r="12" fill="#0a0a0a" stroke="#333" strokeWidth="2" />
        <circle cx="215" cy="162" r="5" fill="#333" />
      </g>
    </svg>
  );
}
