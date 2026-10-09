import { cookies } from "next/headers";
import { dictionaries, type Lang } from "./i18n";

// Server components: read the visitor's language from the `lang` cookie.
export function getLang(): Lang {
  return cookies().get("lang")?.value === "bn" ? "bn" : "en";
}

export function getDict() {
  return dictionaries[getLang()];
}
