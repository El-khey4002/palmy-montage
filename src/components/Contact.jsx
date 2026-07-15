import { Mail, Phone } from 'lucide-react';
import { CONTACT } from '../data/content';
import Container from './ui/Container';
import ContactForm from './ContactForm';
import { SocialLinks } from './SocialMedia';

/**
 * Section contact à deux colonnes : accroche + coordonnées à gauche,
 * formulaire (Web3Forms) à droite. Passe en une colonne sous 1024px.
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-surface-soft py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Colonne infos */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Un projet en tête ?
            </p>
            <h2 className="font-display mt-3 text-[32px] leading-tight text-ink sm:text-[40px]">
              Passons à la vitesse supérieure.
            </h2>
            <p className="mt-4 max-w-md text-body">
              Écris-moi via le formulaire ou en direct — je réponds rapidement,
              et le devis est gratuit et sans engagement.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-strong text-ink transition-colors group-hover:text-primary">
                  <Mail size={18} />
                </span>
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-strong text-ink transition-colors group-hover:text-primary">
                  <Phone size={18} />
                </span>
                {CONTACT.phone}
              </a>
            </div>


            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-body">
              <span>✓ Devis gratuit</span>
              <span>✓ Sans engagement</span>
              <span>✓ Réponse rapide</span>
            </div>
          </div>

          {/* Colonne formulaire */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
