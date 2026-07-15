import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { LocaleData, LocaleKey } from "@/types/Locale";

const DEFAULT_LOCALE: LocaleKey = "en";
const AVAILABLE_LOCALES: LocaleKey[] = ["en", "vi"];

interface I18nContextValue {
  locale: LocaleData | null;
  currentLocale: LocaleKey;
  setLocale: (key: LocaleKey) => void;
  availableLocales: LocaleKey[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<LocaleKey>(() => {
    const saved = localStorage.getItem("locale") as LocaleKey | null;
    return saved && AVAILABLE_LOCALES.includes(saved) ? saved : DEFAULT_LOCALE;
  });
  const [locale, setLocaleData] = useState<LocaleData | null>(null);

  useEffect(() => {
    fetch(`/locales/${currentLocale}.json`)
      .then((r) => r.json())
      .then((data: LocaleData) => setLocaleData(data));
  }, [currentLocale]);

  function setLocale(key: LocaleKey) {
    localStorage.setItem("locale", key);
    setCurrentLocale(key);
  }

  return (
    <I18nContext.Provider
      value={{ locale, currentLocale, setLocale, availableLocales: AVAILABLE_LOCALES }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
