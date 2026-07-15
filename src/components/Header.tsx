import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MediaIcon from "./MediaIcon";
import { useI18n } from "@/context/I18nContext";

const navPaths = [
  { path: "/", labelKey: "home" as const },
  { path: "/about-me", labelKey: "about" as const },
];

export default function Header() {
  const { locale, currentLocale, setLocale, availableLocales } = useI18n();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const otherLocales = availableLocales.filter((l) => l !== currentLocale);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header className="header">
        {/* Side social bar – desktop only */}
        <div className="media-header">
          <span className="media-header__line" />
          <div className="media-header__links">
            {["linkedin", "github", "x"].map((name) => (
              <MediaIcon key={name} name={name} />
            ))}
          </div>
        </div>

        <div className="container">
          <div className="header__inner">
            {/* Logo */}
            <a className="logo" href="/">
              <img className="logo__img" src="/images/logo.svg" alt="logo" />
              <span className="logo__name">Venom</span>
            </a>

            {/* Desktop nav */}
            <nav className="header__links">
              {navPaths.map(({ path, labelKey }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `header__link${isActive ? " header__link_active" : ""}`
                  }
                >
                  {locale?.header[labelKey] ?? labelKey}
                </NavLink>
              ))}
            </nav>

            {/* Desktop locale dropdown */}
            <div className="dropdown">
              <span className="dropdown__label">{currentLocale}</span>
              <div className="dropdown__list">
                {otherLocales.map((l) => (
                  <div
                    key={l}
                    className="dropdown__option"
                    onClick={() => setLocale(l)}
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* Hamburger – mobile only */}
            <button
              className={`hamburger-btn${drawerOpen ? " hamburger-btn--open" : ""}`}
              aria-label="Toggle menu"
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer sheet */}
      <nav className={`drawer${drawerOpen ? " drawer--open" : ""}`}>
        {/* Drawer header row */}
        <div className="drawer__head">
          <a className="logo" href="/">
            <img className="logo__img" src="/images/logo.svg" alt="logo" />
            <span className="logo__name">Venom</span>
          </a>
          <button
            className="drawer__close"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <div className="drawer__links">
          {navPaths.map(({ path, labelKey }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `drawer__link${isActive ? " drawer__link--active" : ""}`
              }
              onClick={() => setDrawerOpen(false)}
            >
              {locale?.header[labelKey] ?? labelKey}
            </NavLink>
          ))}
        </div>

        {/* Locale switcher */}
        <div className="drawer__locale">
          {availableLocales.map((l) => (
            <button
              key={l}
              className={`drawer__locale-btn${l === currentLocale ? " drawer__locale-btn--active" : ""}`}
              onClick={() => setLocale(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Social icons at bottom */}
        <div className="drawer__socials">
          {["linkedin", "github", "x"].map((name) => (
            <MediaIcon key={name} name={name} />
          ))}
        </div>
      </nav>
    </>
  );
}
