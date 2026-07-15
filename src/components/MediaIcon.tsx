import { getMediaUrl } from "@/consts/media";

interface MediaIconProps {
  name: string;
}

export default function MediaIcon({ name }: MediaIconProps) {
  return (
    <a href={getMediaUrl(name)} className="media" target="_blank" rel="noreferrer">
      <img
        src={`/images/icons/${name}.svg`}
        alt={name}
        className="media__icon"
      />
    </a>
  );
}
