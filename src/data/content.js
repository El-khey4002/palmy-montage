import instagramIcon from '../assets/instagram.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import emailIcon from '../assets/gmail.svg';

/* ------------------------------------------------------------------ */
/*  Contenu du site — modifie simplement le texte ici.                */
/*  Ces données alimentent tous les composants de src/components/.    */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  email: 'yanislavalmcm@gmail.com',
  phone: '06 99 40 41 39',
  whatsapp: 'https://wa.me/33699404139',
  instagram: 'https://www.instagram.com/yanis_mcm',
  tiktok: 'https://www.tiktok.com/@palmyedit',
};

export const DEVIS_LINK = `mailto:${CONTACT.email}?subject=Demande%20de%20devis`;

/*
 * Formulaire de contact (Web3Forms) — aucun serveur à héberger.
 * IMPORTANT : les messages arrivent dans la boîte de l'email qui a CRÉÉ la clé.
 * La clé doit donc être générée avec l'email du CLIENT (yanislavalmcm@gmail.com) :
 *   1. Va sur https://web3forms.com
 *   2. Entre yanislavalmcm@gmail.com → la clé s'affiche (et est envoyée à cette adresse).
 *   3. Colle-la ci-dessous. Les messages iront alors chez le client.
 *
 * ⚠️ La clé ci-dessous est encore liée à sandel4021@gmail.com — à remplacer.
 */
export const WEB3FORMS_ACCESS_KEY = '9dd587bd-2c04-4854-b39f-2947a1c294c1';

/* Crédit « création de site » affiché dans le footer. */
export const SITE_CREATOR_EMAIL = 'sandel4021@gmail.com';

export const SOCIALS = [
  { label: 'Instagram', href: CONTACT.instagram, icon: instagramIcon },
  { label: 'WhatsApp', href: CONTACT.whatsapp, icon: whatsappIcon },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: emailIcon },
];

export const NAV_LINKS = [
  { label: 'Créations', href: '#creations' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: '3ᵉ', label: "Concours d'editing PepeChicken" },
  { value: '100%', label: 'Contenu sur-mesure' },
  { value: '0€', label: 'Devis sans engagement' },
  { value: '24/7', label: 'Réactif sur vos messages' },
];

export const CREATIONS = [
  {
    // Vidéo intégrée via l'embed officiel TikTok (cf. composant TikTokEmbed).
    tiktok: {
      videoId: '7577845628487765250',
      username: 'palmyedit',
      url: 'https://www.tiktok.com/@palmyedit/video/7577845628487765250',
    },
    badge: '🏆 3ᵉ place',
    title: "Concours d'editing PepeChicken",
    text: "Vidéo d'editing dynamique qui m'a valu la 3ème place du concours PepeChicken.",
  },
  {
    // Vidéo intégrée via l'embed officiel TikTok (cf. composant TikTokEmbed).
    tiktok: {
      videoId: '7644249159918259478',
      username: 'lenny_fit_',
      url: 'https://www.tiktok.com/@lenny_fit_/video/7644249159918259478',
    },
    badge: 'Client',
    title: 'Vidéo de lancement — créateur',
    text: "Montage dynamique pour le lancement d'un créateur sur les réseaux.",
  },
];
