/**
 * Ohio state outline with Great Lakes Waste coverage circle around Cleveland.
 * Riffs on the state outline in the wasteohio.com logo.
 */
export default function OhioMap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="coverage" cx="0.55" cy="0.18" r="0.35">
          <stop offset="0" stopColor="#7a1e2e" stopOpacity="0.35" />
          <stop offset="0.7" stopColor="#7a1e2e" stopOpacity="0.08" />
          <stop offset="1" stopColor="#7a1e2e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ohio state outline (approximate — good enough for a demo, not surveyor-accurate) */}
      <path
        d="
          M 105 25
          L 148 22
          Q 175 22 195 34
          L 235 38
          L 268 32
          L 295 45
          Q 305 68 302 85
          L 300 130
          L 305 178
          L 315 220
          L 320 260
          L 305 290
          Q 285 320 245 335
          Q 210 348 175 342
          Q 145 335 125 320
          L 105 300
          L 92 265
          L 85 220
          L 82 175
          L 88 130
          L 95 80
          Q 100 45 105 25 Z
        "
        fill="#141414"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Coverage glow — centered on Cleveland (top-center of state) */}
      <ellipse cx="220" cy="70" rx="120" ry="80" fill="url(#coverage)" />

      {/* Coverage ring */}
      <ellipse cx="220" cy="70" rx="95" ry="55" fill="none" stroke="#7a1e2e" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />

      {/* Cleveland pin (bigger, brand color) */}
      <g>
        <circle cx="220" cy="70" r="10" fill="#7a1e2e" />
        <circle cx="220" cy="70" r="4" fill="#ffffff" />
        <circle cx="220" cy="70" r="20" fill="#7a1e2e" opacity="0.3">
          <animate attributeName="r" from="10" to="30" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      <text x="220" y="55" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">CLEVELAND</text>

      {/* Other regional dots */}
      <circle cx="175" cy="85" r="3" fill="#ffffff" opacity="0.5" />
      <text x="175" y="100" textAnchor="middle" fill="#ffffff" opacity="0.6" fontSize="7" fontFamily="Inter, system-ui, sans-serif">Lorain</text>

      <circle cx="270" cy="85" r="3" fill="#ffffff" opacity="0.5" />
      <text x="270" y="100" textAnchor="middle" fill="#ffffff" opacity="0.6" fontSize="7" fontFamily="Inter, system-ui, sans-serif">Mentor</text>

      <circle cx="200" cy="120" r="3" fill="#ffffff" opacity="0.5" />
      <text x="200" y="135" textAnchor="middle" fill="#ffffff" opacity="0.6" fontSize="7" fontFamily="Inter, system-ui, sans-serif">Medina</text>

      <circle cx="245" cy="118" r="3" fill="#ffffff" opacity="0.5" />
      <text x="245" y="133" textAnchor="middle" fill="#ffffff" opacity="0.6" fontSize="7" fontFamily="Inter, system-ui, sans-serif">Akron</text>

      {/* Off-coverage cities (dimmer, no ring) */}
      <circle cx="120" cy="230" r="2.5" fill="#ffffff" opacity="0.25" />
      <text x="120" y="245" textAnchor="middle" fill="#ffffff" opacity="0.3" fontSize="6.5" fontFamily="Inter, system-ui, sans-serif">Dayton</text>

      <circle cx="200" cy="240" r="2.5" fill="#ffffff" opacity="0.25" />
      <text x="200" y="255" textAnchor="middle" fill="#ffffff" opacity="0.3" fontSize="6.5" fontFamily="Inter, system-ui, sans-serif">Columbus</text>

      <circle cx="235" cy="305" r="2.5" fill="#ffffff" opacity="0.25" />
      <text x="235" y="320" textAnchor="middle" fill="#ffffff" opacity="0.3" fontSize="6.5" fontFamily="Inter, system-ui, sans-serif">Cincinnati</text>
    </svg>
  );
}
