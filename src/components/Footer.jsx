import { NAV_LINKS, CONTACT, SITE_CREATOR_EMAIL } from '../data/content';
import Container from './ui/Container';

/**
 * Footer clair multi-colonnes + bande légale (cf. DESIGN.md « footer-light » / « legal-band »).
 */
export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-semibold tracking-tight text-ink">
              Yanis <span className="text-primary">Laval</span>
            </p>
            <p className="mt-2 text-sm text-body">
              Monteur vidéo &amp; community manager freelance.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Navigation
            </span>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-body transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Contact
            </span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-body transition-colors hover:text-ink"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="text-sm text-body transition-colors hover:text-ink"
            >
              {CONTACT.phone}
            </a>
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Création de site web
            </span>
            <a
              href={`mailto:${SITE_CREATOR_EMAIL}`}
              className="text-sm font-medium text-primary transition-colors hover:text-primary-active"
            >
              {SITE_CREATOR_EMAIL}
            </a>
          </nav>
        </div>
      </Container>

      <div className="border-t border-hairline">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">
            © 2026 Yanis Laval. Tous droits réservés.
          </p>
          <p className="text-xs text-muted">Fait avec soin · France</p>
        </Container>
      </div>
    </footer>
  );
}
