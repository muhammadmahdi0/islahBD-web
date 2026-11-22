/**
 * Channel registry — ported from the `master` branch (`src/lib/channels.ts`),
 * which is the stable channel implementation.
 * IDs verified via the YouTube Data API (`channels.forHandle`); the
 * Islahi Boyan ID was resolved the same way the app lists videos —
 * InnerTube `resolveURL` on its handle.
 */
export interface AppChannel {
  id: string;
  handle: string;
  name: string;
  /** Friendly Bengali label for the Bengali-first UI. */
  nameBn: string;
  /** Urdu label for the Urdu UI. */
  nameUr: string;
}

export const CHANNELS: AppChannel[] = [
  { id: "UC8NjCrYUV5YrpK2j6XTwGSA", handle: "@islahbd", name: "Islah", nameBn: "ইসলাহ", nameUr: "اصلاح" },
  { id: "UCZVVdlwGUDNwLF0Dqr9Klew", handle: "@IslahiGhazal", name: "Islahi Ghazal", nameBn: "ইসলামী গজল", nameUr: "اسلامی غزل" },
  { id: "UCdVTIdko91afOJ2awuVdDDQ", handle: "@islahiboyan", name: "Islahi Boyan", nameBn: "ইসলাহী বয়ান", nameUr: "اصلاحی بیان" },
];

export const DEFAULT_CHANNEL_ID = CHANNELS[0].id;

export function getChannelById(id: string): AppChannel {
  return CHANNELS.find((c) => c.id === id) ?? CHANNELS[0];
}

export function channelLabel(c: AppChannel, lang: "bn" | "ur" | "en"): string {
  return lang === "bn" ? c.nameBn : lang === "ur" ? c.nameUr : c.name;
}
