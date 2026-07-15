interface QuoteProps {
  t: { text: string; author: string };
}

export default function Quote({ t }: QuoteProps) {
  return (
    <figure className="quote">
      <blockquote className="quote__text">{t.text}</blockquote>
      <figcaption className="quote__author">{t.author}</figcaption>
    </figure>
  );
}
