/**
 * Lecteur TikTok via l'iframe player officiel (player/v1).
 * Entièrement responsive : le conteneur impose le ratio 9:16 et l'iframe le
 * remplit → se met à l'échelle proprement de 320px jusqu'au desktop, sans
 * script externe ni largeur minimale imposée (contrairement au blockquote).
 * Doc : https://developers.tiktok.com/doc/embed-player
 */
export default function TikTokEmbed({ videoId, username }) {
  const src = `https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1&rel=0`;

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-surface-dark">
      <iframe
        src={src}
        title={`Vidéo TikTok de @${username}`}
        loading="lazy"
        allow="fullscreen; encrypted-media; picture-in-picture"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
