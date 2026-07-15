import websites from "./websites";

const mediaData = {
  // discord: { id: "914240860101681163", tag: "elias.dev." },
  linkedin: { id: "huyvu-dev", tag: "huyvu-dev" },
  github: "venom-vu",
  email: "huyvq.developer@gmail.com",
  x: "venom_vux",
};

/** Build the full URL for a given media key */
function getMediaUrl(name: string): string {
  if (name === "emailRaw") return mediaData.email;
  if (name === "linkedinTag") return mediaData.linkedin.tag;
  // if (name === "discord")
  //   return `https://${websites.discord}${mediaData.discord.id}`;
  if (name === "linkedin")
    return `https://${websites.linkedin}${mediaData.linkedin.id}`;
  if (name === "email") return `${websites.email}${mediaData.email}`;

  const base = websites[name] ?? "";
  const raw = (mediaData as Record<string, unknown>)[name];
  const id = typeof raw === "string" ? raw : "";
  return `https://${base}${id}`;
}

const media = {
  get emailRaw() {
    return mediaData.email;
  },

  get linkedinTag() {
    return mediaData.linkedin.tag;
  },
  url: getMediaUrl,
};

export default media;
export { getMediaUrl };
