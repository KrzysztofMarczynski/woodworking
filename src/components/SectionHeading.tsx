type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, light = false }: Props) {
  return (
    <header className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </header>
  );
}

