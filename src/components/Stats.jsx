import { STATS } from '../data/content';
import Container from './ui/Container';

/**
 * Bande d'élévation gris doux avec chiffres clés.
 * Chaque valeur est rendue en police mono (cf. DESIGN.md « CoinbaseMono sur chaque chiffre »).
 */
export default function Stats() {
  return (
    <section className="bg-surface-soft py-14 sm:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-y-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-body sm:mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
