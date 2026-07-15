/**
 * Conteneur éditorial centré — largeur max 1200px (cf. DESIGN.md « Grid & Container »).
 */
export default function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>
      {children}
    </div>
  );
}
