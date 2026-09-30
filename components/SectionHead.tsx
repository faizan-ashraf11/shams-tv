// Shared section header: mono index + label, serif title, optional dek and action.
export default function SectionHead({ index, label, title, dek, children, id }: {
  index?: string;
  label: string;
  title: React.ReactNode;
  dek?: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <header className="sec-head">
      <div className="sec-head__text">
        <span className="kicker">{index && <span className="kicker__index">{index}</span>}{label}</span>
        <h2 id={id}>{title}</h2>
        {dek && <p>{dek}</p>}
      </div>
      {children && <div className="sec-head__tools">{children}</div>}
    </header>
  );
}
