import { ArrowRight, Play, Trophy } from 'lucide-react';
import { DEVIS_LINK } from '../data/content';
import heroImg from '../assets/inspiration.webp';
import Container from './ui/Container';
import Button from './ui/Button';
import Badge from './ui/Badge';

/**
 * Hero éditorial plein cadre : l'image de fond couvre toute la section,
 * recouverte d'un voile dégradé sombre pour garder le texte lisible
 * (cf. DESIGN.md « hero-band-dark »). Contenu sur une colonne, aligné à gauche.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh_-_4rem)] items-center overflow-hidden bg-surface-dark text-on-dark"
    >
      {/* Image de fond */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Voile dégradé pour la lisibilité (sombre à gauche, image visible à droite) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-surface-dark/30 sm:bg-transparent"
      />

      <Container className="py-16 sm:py-20">
        <div className="max-w-xl">
          <Badge tone="dark">Monteur vidéo · Community manager</Badge>
          <h1 className="font-display mt-6 text-[34px] leading-[1.08] sm:text-[52px] sm:leading-[1.04] lg:text-[70px] lg:leading-[1.02]">
            Des vidéos qui{' '}
            <span className="text-primary">captent l’attention</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-on-dark-soft sm:text-lg">
            Je conçois et monte des contenus dynamiques pour développer votre
            présence sur les réseaux, bâtir une communauté engagée et attirer
            plus de clients.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={DEVIS_LINK} variant="primary" size="lg">
              Devis gratuit &amp; sans engagement <ArrowRight size={18} />
            </Button>
            <Button as="a" href="#creations" variant="outlineDark" size="lg">
              <Play size={18} /> Voir mes créations
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-on-dark-soft">
            <Trophy size={16} className="shrink-0 text-primary" />
            3ᵉ place — Concours d'editing PepeChicken
          </div>
        </div>
      </Container>
    </section>
  );
}
