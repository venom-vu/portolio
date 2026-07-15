import MediaIcon from "./MediaIcon";

import { useI18n } from "@/context/I18nContext";

export default function Footer() {
  const { locale } = useI18n();
  const t = locale?.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info">
            <div className="footer__header">
              <div className="logo">
                <img src="/images/logo.svg" alt="logo" className="logo__img" />
                <div className="logo__name">Venom</div>
              </div>
              {/* <a className="footer__email" href={media.url("email")}>
                {media.emailRaw}
              </a> */}
            </div>
            {t && <p className="footer__description">{t.description}</p>}
          </div>

          <div className="footer__media">
            {t && <div className="footer__title">{t.media}</div>}
            <div className="footer__list">
              {["linkedin", "github", "x"].map((name) => (
                <MediaIcon key={name} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
