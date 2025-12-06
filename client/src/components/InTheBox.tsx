import type { FC } from "react";

type InTheBoxProps = { includes: Array<{ quantity: number; item: string }> };

const InTheBox: FC<InTheBoxProps> = ({ includes }) => {
  return (
    <div className="@container flex-1 lg:max-w-[350px]">
      <div className="@[549px]:grid grid-cols-2">
        <h1 className="font-bold text-2xl leading-9 tracking-[0.86px] uppercase mb-6">
          in the box
        </h1>
        <div>
          {includes.map((include, index) => (
            <div
              key={index}
              className="text-[15px] leading-[25px] flex items-center gap-x-6"
            >
              <h6 className="font-bold text-primary">
                <span>{include.quantity}</span>x
              </h6>
              <p className="font-medium opacity-50">{include.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InTheBox;
