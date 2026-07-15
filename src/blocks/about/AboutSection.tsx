interface AboutSectionProps {
  t: { description: string[] };
}

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="about-page">
      <div className="about-page__illustrations">
        <img
          src="/images/about-me.png"
          alt=""
          className="about-page__image"
        />
      </div>
      <div className="about-page__text">
        {t.description.map((text, i) => (
          <p key={i} className="about-page__description">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
