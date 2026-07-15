import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { CREATIONS } from '../data/content';
import Container from './ui/Container';
import Badge from './ui/Badge';
import TikTokEmbed from './TikTokEmbed';

/**
 * Bande claire de portfolio. Chaque création affiche soit une vidéo TikTok
 * intégrée (si elle a un champ `tiktok`), soit une carte image cliquable.
 */
export default function Creations() {
  return (
    <section id="creations" className="bg-canvas py-16 sm:py-24">
      <Container>
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Portfolio
          </p>
          <h2 className="font-display mt-3 text-[32px] leading-tight text-ink sm:text-[40px]">
            Quelques-unes de mes créations
          </h2>
        </div>

        <div className="grid items-start gap-6 sm:gap-8 md:grid-cols-2">
          {CREATIONS.map((c) =>
            c.tiktok ? (
              <article
                key={c.title}
                className="flex flex-col rounded-xl border border-hairline bg-canvas p-4 sm:p-6"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge>{c.badge}</Badge>
                  <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                </div>
                <div className="mx-auto w-full max-w-[300px] sm:max-w-[320px]">
                  <TikTokEmbed {...c.tiktok} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-body">
                  {c.text}
                </p>
                <a
                  href={c.tiktok.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-active"
                >
                  Voir sur TikTok <ArrowUpRight size={16} />
                </a>
              </article>
            ) : (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-xl border border-hairline bg-canvas transition-shadow duration-200 hover:shadow-soft"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4">
                    <Badge tone="light" className="bg-canvas/90 backdrop-blur">
                      {c.badge}
                    </Badge>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
                      <Play size={22} className="ml-1" />
                    </span>
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {c.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Voir la vidéo{' '}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
