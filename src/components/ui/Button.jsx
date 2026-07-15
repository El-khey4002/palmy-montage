/**
 * Bouton pilule (rounded-pill) décliné selon DESIGN.md « Buttons ».
 * `variant` : primary | secondaryLight | secondaryDark | outlineDark
 * `size`    : md (44px, CTA standard) | lg (56px, CTA hero)
 * `as`      : élément rendu (a par défaut, button, …)
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-pill text-center font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const sizes = {
  md: 'h-11 px-5 text-base',
  lg: 'h-14 px-8 text-base',
};

const variants = {
  primary: 'bg-primary text-on-primary hover:bg-primary-active',
  secondaryLight: 'bg-surface-strong text-ink hover:bg-hairline',
  secondaryDark: 'bg-surface-dark-elevated text-on-dark hover:bg-white/15',
  outlineDark: 'border border-white/70 text-on-dark hover:bg-white/10',
};

export default function Button({
  as: Comp = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Comp
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
