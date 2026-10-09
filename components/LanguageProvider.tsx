"use client";

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { dictionaries, type Lang } from "@/lib/i18n";

const LangContext = createContext<Lang>("en");

// The layout reads the cookie and passes the language down; client components use useLang().
export function LanguageProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  const lang = useContext(LangContext);
  const router = useRouter();
  const setLang = (next: Lang) => {
    document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;
    router.refresh(); // re-render server components with the new cookie
  };
  return { lang, t: dictionaries[lang], setLang };
}
