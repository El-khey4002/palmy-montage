import { SOCIALS } from '../data/content';

/**
 * Rail vertical fixe de réseaux sociaux (affiché à droite sur grand écran).
 * Pastilles rondes avec une icône bien remplie pour rester lisibles.
 */
export function SocialSidebar() {
  return (
    <aside className="fixed right-2 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2.5 sm:right-4 sm:gap-3">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-canvas shadow-soft transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:h-12 sm:w-12"
        >
          <img
            src={s.icon}
            alt=""
            aria-hidden="true"
            className="h-6 w-6 transition-transform group-hover:scale-110 sm:h-7 sm:w-7"
          />
        </a>
      ))}
    </aside>
  );
}

/**
 * Liste horizontale de réseaux sociaux (réutilisée dans le footer).
 */
export function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-canvas transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <img
            src={s.icon}
            alt=""
            aria-hidden="true"
            className="h-6 w-6 transition-transform group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}
