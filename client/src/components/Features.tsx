import type { FC } from "react";

interface FeaturesProps {
  features: string;
}
const Features: FC<FeaturesProps> = ({ features }) => {
  const paraArray = features.split(".");
  return (
    <div>
      <h1 className="font-bold text-2xl leading-9 tracking-[0.86px] uppercase mb-6">
        Features
      </h1>
      <div>
        <p className="font-medium text-[15px] leading-[25px] opacity-50">
          {paraArray.slice(0, 3)}
        </p>
        <br />
        <p className="font-medium text-[15px] leading-[25px] opacity-50">
          {paraArray.slice(3)}
        </p>
      </div>
    </div>
  );
};
export default Features;
