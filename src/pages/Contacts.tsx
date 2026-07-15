import { useEffect } from "react";
import Path from "@/components/Path";
import { useI18n } from "@/context/I18nContext";
import { startTitleAnimation } from "@/helpers/startTitleAnimation";

export default function Contacts() {
  const { locale } = useI18n();

  useEffect(() => {
    startTitleAnimation("contacts");
  }, []);

  if (!locale) return null;

  return <Path description={locale.pages.contacts.description} />;
}
