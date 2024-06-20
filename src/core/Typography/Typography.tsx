export const Typography = ({ variant, children }: any) => (
  <>
    {variant === 'h1' && <h1>{children}</h1>}
    {variant === 'h2' && <h2>{children}</h2>}
    {variant === 'h3' && <h3>{children}</h3>}
    {variant === 'text' && <p>{children}</p>}
  </>
);
