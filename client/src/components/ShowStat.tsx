import type { FC } from "react";

interface ShowStatProps {
  statName: string;
  statResult: string;
  className?: string;
}
const ShowStat: FC<ShowStatProps> = ({
  className = "",
  statName,
  statResult,
}) => {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-[15px] leading-6 opacity-50 uppercase">
        {statName}
      </span>
      <span className={`font-bold text-lg ${className}`}>{statResult}</span>
    </div>
  );
};

export default ShowStat;
