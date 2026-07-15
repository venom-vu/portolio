import Dots from "@/components/Dots";

interface HeroProps {
  t: {
    title: string;
    description: string;
    button: string;
    status: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1
          className="hero__title"
          dangerouslySetInnerHTML={{ __html: t.title }}
        />
        <div className="hero__description">{t.description}</div>
        <a className="button button__primary" href="#contacts">
          {t.button} =&gt;
        </a>
      </div>
      <div className="hero__illustrations">
        <img
          src="/images/logo-outline.svg"
          alt=""
          className="hero__logo"
        />
        <img src="/images/hero.png" alt="Elias" className="hero__image" />
        <div className="hero__status">{t.status}</div>
        <Dots />
      </div>
    </section>
  );
}
