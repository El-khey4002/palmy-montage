import { NAV_LINKS } from '../data/content';
import Container from './ui/Container';
import Button from './ui/Button';

/**
 * Navigation haute claire (cf. DESIGN.md « top-nav-light ») — hauteur 64px.
 * Sur téléphone, le menu est masqué : seuls le wordmark et le CTA restent.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-canvas/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-ink sm:text-lg"
        >
          Yanis <span className="text-primary">Laval</span>
        </a>

        <nav className="hidden items-center gap-6 sm:flex md:gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-body transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          as="a"
          href="#contact"
          variant="primary"
          size="md"
          className="shrink-0"
        >
          Devis gratuit
        </Button>
      </Container>
    </header>
  );
}
