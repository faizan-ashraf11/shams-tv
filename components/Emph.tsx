// Renders a headline with one phrase set in the serif italic — the brand's editorial accent.
export default function Emph({ text, em }: { text: string; em?: string }) {
  if (!em || !text.includes(em)) return <>{text}</>;
  const [before, after] = text.split(em);
  return <>{before}<em>{em}</em>{after}</>;
}
