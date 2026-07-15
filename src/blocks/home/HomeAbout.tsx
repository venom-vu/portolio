import { Link } from "react-router-dom";

interface HomeAboutProps {
  t: {
    title: string;
    description: string[];
    button: string;
  };
}

export default function HomeAbout({ t }: HomeAboutProps) {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="h2">{t.title}</h2>
        <div className="about__text">
          {t.description.map((text, i) => (
            <p key={i} className="about__description">
              {text}
            </p>
          ))}
        </div>
        <Link to="/about-me" className="button">
          {t.button} -&gt;
        </Link>
      </div>
      <img
        src="/images/about-me.png"
        alt=""
        className="about__image"
      />
    </section>
  );
}
