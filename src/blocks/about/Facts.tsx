interface FactsProps {
  t: { title: string; list: string[] };
}

export default function Facts({ t }: FactsProps) {
  return (
    <section className="facts">
      <h2 className="h2">{t.title}</h2>
      <div className="facts__content">
        <ul className="facts__list">
          {t.list.map((fact, i) => (
            <li key={i} className="fact">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
