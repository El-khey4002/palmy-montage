import {
  Clapperboard,
  Megaphone,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Phone,
  Trophy,
  Play,
} from 'lucide-react';

import instagramIcon from './assets/instagram.svg';
import whatsappIcon from './assets/whatsapp.svg';
import emailIcon from './assets/email.svg';
import inspirationImg from './assets/inspiration.webp';
import monteurImg from './assets/monteur.jpg';

/* ------------------------------------------------------------------ */
/*  Données du site — modifie simplement le texte ici                 */
/* ------------------------------------------------------------------ */

const CONTACT = {
  email: 'yanislavalmcm@gmail.com',
  phone: '06 99 40 41 39',
  whatsapp: 'https://wa.me/33699404139',
  instagram: 'https://www.instagram.com/yanis_mcm',
  tiktok: 'https://www.tiktok.com/@yanis_mcm',
};

const DEVIS_LINK = `mailto:${CONTACT.email}?subject=Demande%20de%20devis`;

const SOCIALS = [
  { label: 'Instagram', href: CONTACT.instagram, icon: instagramIcon },
  { label: 'WhatsApp', href: CONTACT.whatsapp, icon: whatsappIcon },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: emailIcon },
];

const SERVICES = [
  {
    icon: Clapperboard,
    title: 'Montage vidéo',
    text: "Montage dynamique et rythmé pour Reels, TikTok et YouTube : cuts, sound design, sous-titres et effets qui gardent votre audience jusqu'au bout.",
  },
  {
    icon: Megaphone,
    title: 'Community management',
    text: 'Animation et gestion de vos réseaux sociaux : ligne éditoriale, publications régulières et interaction avec votre communauté.',
  },
  {
    icon: Sparkles,
    title: 'Stratégie de contenu',
    text: 'Idées de contenus, formats qui performent et calendrier de publication adaptés à votre cible et à vos objectifs.',
  },
  {
    icon: TrendingUp,
    title: 'Croissance & visibilité',
    text: "Hooks accrocheurs, optimisation pour l'algorithme et analyse des performances pour gagner en vues, en abonnés et en clients.",
  },
];

const STATS = [
  { value: '3ᵉ', label: "Concours d'editing PepeChicken" },
  { value: '100%', label: 'Contenu sur-mesure' },
  { value: '0€', label: 'Devis sans engagement' },
  { value: '24/7', label: 'Réactif sur vos messages' },
];

const CREATIONS = [
  {
    image: inspirationImg,
    badge: '🏆 3ᵉ place',
    title: "Concours d'editing PepeChicken",
    text: "Vidéo d'editing dynamique qui m'a valu la 3ème place du concours PepeChicken. Rythme, effets et timing au service de l'impact.",
    href: CONTACT.tiktok,
  },
  {
    image: monteurImg,
    badge: 'Client',
    title: 'Vidéo dynamique & humoristique',
    text: "Réalisation d'une vidéo rythmée et pleine d'humour pour un client, pensée pour maximiser l'engagement et les partages.",
    href: CONTACT.tiktok,
  },
];

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Créations', href: '#creations' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/*  Petits composants                                                 */
/* ------------------------------------------------------------------ */

function SocialSidebar() {
  return (
    <aside className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface shadow-lg transition-all duration-300 hover:scale-110 hover:border-accent"
        >
          <img
            src={s.icon}
            alt={s.label}
            className="h-6 w-6 transition-transform group-hover:rotate-6"
          />
        </a>
      ))}
    </aside>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          YANIS<span className="text-accent"> LAVAL</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={DEVIS_LINK}
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-soft"
        >
          Devis gratuit
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-24 pt-20 sm:pt-28"
    >
      {/* halo violet en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] max-w-none -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 inline-block rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-soft">
          Monteur vidéo · Community manager
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Développez votre activité grâce à des vidéos qui{' '}
          <span className="text-accent">captent l'attention</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Vous souhaitez développer votre présence sur les réseaux sociaux,
          bâtir une communauté engagée et attirer plus de clients ? Je conçois
          et monte des contenus dynamiques qui transforment vos vues en
          résultats.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={DEVIS_LINK}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-soft sm:w-auto"
          >
            Devis gratuit & sans engagement <ArrowRight size={18} />
          </a>
          <a
            href="#creations"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 font-semibold text-white transition-all hover:border-accent sm:w-auto"
          >
            <Play size={18} /> Voir mes créations
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
            Ce que je fais pour vous
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Des services pensés pour votre croissance
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-3xl border border-line bg-surface px-6 py-10 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-accent sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Creations() {
  return (
    <section id="creations" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Quelques-unes de mes créations
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {CREATIONS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {c.badge}
                </span>
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/40">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                    <Play size={24} className="ml-1" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
                  <Trophy size={18} className="text-accent" /> {c.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {c.text}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft">
                  Voir la vidéo <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaContact() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-surface-2 px-6 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
          Un projet en tête ?
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Passons à la vitesse supérieure.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Contactez-moi pour un devis gratuit et sans engagement — je vous
          réponds rapidement.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={DEVIS_LINK}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-soft sm:w-auto"
          >
            Demander un devis gratuit
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 font-semibold text-white transition-all hover:border-accent sm:w-auto"
          >
            <Phone size={18} /> {CONTACT.phone}
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span>✓ Devis gratuit</span>
          <span>✓ Sans engagement</span>
          <span>✓ Réponse rapide</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-extrabold">
            YANIS<span className="text-accent"> LAVAL</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Monteur vidéo & community manager
          </p>
        </div>
        <div className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-accent"
            >
              <img src={s.icon} alt={s.label} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted">
        © 2026 Yanis Laval. Tous droits réservés.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <SocialSidebar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Creations />
        <CtaContact />
      </main>
      <Footer />
    </>
  );
}
