/**
 * Pilule d'étiquette de section (cf. DESIGN.md « badge-pill »).
 * `tone` : light (sur canvas clair) | dark (sur hero sombre)
 */
const tones = {
  light: 'bg-surface-strong text-ink',
  dark: 'bg-white/10 text-on-dark-soft',
};

export default function Badge({ children, tone = 'light', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
