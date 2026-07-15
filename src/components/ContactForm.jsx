import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WEB3FORMS_ACCESS_KEY, CONTACT } from '../data/content';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const fieldClass =
  'w-full rounded-md border border-hairline bg-canvas px-4 text-ink placeholder:text-muted-soft transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30';

/**
 * Formulaire de contact envoyé à Web3Forms (aucun backend à héberger).
 * Gère les états : idle → submitting → success | error.
 */
export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    // Garde-fou tant que la clé Web3Forms n'a pas été renseignée.
    if (WEB3FORMS_ACCESS_KEY.startsWith('REMPLACE')) {
      setStatus('error');
      setError(
        "Formulaire pas encore configuré : ajoute ta clé Web3Forms dans src/data/content.js.",
      );
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError(data.message || "L'envoi a échoué. Réessaie ou écris-moi par email.");
      }
    } catch {
      setStatus('error');
      setError('Problème de connexion. Réessaie ou écris-moi par email.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-hairline bg-canvas p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-up/10 text-up">
          <CheckCircle2 size={24} />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-ink">Message envoyé !</h3>
        <p className="mt-2 text-sm text-body">
          Merci — je te réponds au plus vite.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-semibold text-primary"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-hairline bg-canvas p-6 sm:p-8"
    >
      {/* Champs cachés Web3Forms */}
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input
        type="hidden"
        name="subject"
        value="Nouveau message depuis le site — Yanis Laval"
      />
      <input type="hidden" name="from_name" value="Site Yanis Laval" />
      {/* Honeypot anti-spam (invisible pour les humains) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ton nom"
            className={`${fieldClass} h-12`}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ton@email.com"
            className={`${fieldClass} h-12`}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Parle-moi de ton projet…"
            className={`${fieldClass} py-3`}
          />
        </div>

        {status === 'error' && (
          <p className="flex items-start gap-2 text-sm text-down">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-primary px-6 font-semibold text-on-primary transition-colors hover:bg-primary-active disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            'Envoi en cours…'
          ) : (
            <>
              Envoyer le message <Send size={18} />
            </>
          )}
        </button>

        <p className="text-xs text-muted">
          Ou écris-moi directement à{' '}
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-medium text-primary"
          >
            {CONTACT.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
