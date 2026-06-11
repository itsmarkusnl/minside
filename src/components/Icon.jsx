/* Egne SVG-ikoner som erstatter emojis — strektegninger i currentColor,
   samme stil som mappe-ikonet i Projects og nedlastingspilen i Navbar. */

const paths = {
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  graduation: (
    <>
      <path d="M22 9 12 4 2 9l10 5 10-5Z" />
      <path d="M6 11.5V16c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5" />
      <path d="M22 9v5" />
    </>
  ),
  laptop: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M2 19h20" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 3.13-7 7-7 0 4-3.13 7-7 7Z" />
      <path d="M12 15c0-3.31-2.69-6-6-6 0 3.31 2.69 6 6 6Z" />
    </>
  ),
  school: (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M2 21h20" />
      <path d="M9 21v-5a3 3 0 0 1 6 0v5" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 8V4M8 4h8" />
      <circle cx="9" cy="13" r="0.5" fill="currentColor" />
      <circle cx="15" cy="13" r="0.5" fill="currentColor" />
      <path d="M9 17h6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  cursor: <path d="m4 4 7.07 17 2.51-7.39L21 11.07 4 4Z" />,
  'chart-up': (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18Z" />
    </>
  ),
  gamepad: (
    <>
      <rect x="2" y="7" width="20" height="11" rx="5.5" />
      <path d="M6 12.5h4M8 10.5v4" />
      <path d="M15 14h.01M17.5 11h.01" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-2.64-6.36L21 8" />
      <path d="M21 3v5h-5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4h10v7a5 5 0 0 1-10 0Z" />
      <path d="M7 6H4a2 2 0 0 0 0 4h3M17 6h3a2 2 0 0 1 0 4h-3" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1" fill="currentColor" />
      <circle cx="18" cy="20" r="1" fill="currentColor" />
      <path d="M2 3h2.5l2.4 12.5h11.6L21 7H6.1" />
    </>
  ),
  shield: <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />,
  'chart-bar': (
    <>
      <path d="M3 21h18" />
      <path d="M6 21v-7M12 21V8M18 21V4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14.2-1.5 7L12 19l4.5 2.2-1.5-7" />
    </>
  ),
  hexagon: <path d="M21 16.05v-8.1a2 2 0 0 0-1-1.73l-7-4.05a2 2 0 0 0-2 0l-7 4.05a2 2 0 0 0-1 1.73v8.1a2 2 0 0 0 1 1.73l7 4.05a2 2 0 0 0 2 0l7-4.05a2 2 0 0 0 1-1.73Z" />,
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  code: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />,
  dot: <circle cx="12" cy="12" r="6" fill="currentColor" stroke="none" />,
  check: <path d="M20 6 9 17l-5-5" />,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
}

export default function Icon({ name, size = 18, className }) {
  const icon = paths[name]
  if (!icon) return null

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icon}
    </svg>
  )
}
