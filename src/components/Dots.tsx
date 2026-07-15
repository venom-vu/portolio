interface DotsProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Dots({ width = 5, height = 5, className = "" }: DotsProps) {
  const dots: React.ReactElement[] = [];
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={c * 10 + 5} cy={r * 10 + 5} r={2} />);
    }
  }

  return (
    <svg
      className={`dots ${className}`}
      viewBox={`0 0 ${width * 10} ${height * 10}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots}
    </svg>
  );
}
