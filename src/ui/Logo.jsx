export function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        className="h-12 w-12 shrink-0 drop-shadow-lg"
        viewBox="0 0 96 96"
        role="img"
        aria-label="Logo MňamPlan"
      >
        <defs>
          <linearGradient
            id="bowl"
            x1="18"
            x2="78"
            y1="42"
            y2="84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9735B" />
            <stop offset="1" stopColor="#FDBA74" />
          </linearGradient>
        </defs>
        <circle cx="48" cy="48" r="43" fill="#FFF2D7" />
        <path
          d="M31 36c0-7 6-12 13-9 4 2 4 7 4 7s1-5 5-7c7-3 13 2 13 9 0 11-18 21-18 21S31 47 31 36Z"
          fill="#F9735B"
        />
        <path d="M23 50h50c0 16-10 28-25 28S23 66 23 50Z" fill="url(#bowl)" />
        <path
          d="M21 49c0-4 5-7 27-7s27 3 27 7-5 7-27 7-27-3-27-7Z"
          fill="#FFE6B8"
          stroke="#3B2418"
          strokeWidth="3"
        />
        <path
          d="M34 60c7 5 21 5 28 0"
          fill="none"
          stroke="#3B2418"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <circle cx="39" cy="51" r="3" fill="#3B2418" />
        <circle cx="57" cy="51" r="3" fill="#3B2418" />
        <path
          d="M69 30c4-8 10-11 15-11"
          stroke="#4ADE80"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path d="M75 23c0-8 7-13 15-11-1 9-7 14-15 11Z" fill="#4ADE80" />
      </svg>
      {!compact ? (
        <div>
          <p className="text-2xl font-black leading-none tracking-tight text-[#3b2418]">
            MňamPlán
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f9735b]">
            Recepty & jídelníček
          </p>
        </div>
      ) : null}
    </div>
  );
}
