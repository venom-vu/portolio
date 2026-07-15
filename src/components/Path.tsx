import { useLocation } from "react-router-dom";

interface PathProps {
  description: string;
}

export default function Path({ description }: PathProps) {
  const location = useLocation();
  const name = location.pathname.slice(1);

  return (
    <div className="path">
      <h1 className="path__name">{name}</h1>
      <p className="path__description">{description}</p>
    </div>
  );
}
