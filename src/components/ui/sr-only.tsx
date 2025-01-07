type SROnlyProps = React.HTMLAttributes<HTMLSpanElement>;

export const SROnly = (props: SROnlyProps) => {
  return <span className="sr-only" {...props} />;
};
