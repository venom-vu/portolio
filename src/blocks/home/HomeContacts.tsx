import media from "@/consts/media";

interface HomeContactsProps {
  t: {
    title: string;
    text: string;
    media: string;
    donate: string;
  };
}

const contactList = [
  { name: "linkedin", text: media.linkedinTag },
  { name: "x", text: "@venom_vux" },
];

export default function HomeContacts({ t }: HomeContactsProps) {
  return (
    <section className="contacts" id="contacts">
      <h2 className="h2">{t.title}</h2>
      <div className="contacts__content">
        <p className="contacts__description">{t.text}</p>
        <div className="contacts__media">
          <h3 className="contacts__title">{t.media}</h3>
          <div className="contacts__list">
            {contactList.map((contact) => (
              <a
                key={contact.name}
                className="contact"
                href={media.url(contact.name)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`/images/icons/${contact.name}.svg`}
                  alt={contact.name}
                />
                <div className="contact__name">{contact.text}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
