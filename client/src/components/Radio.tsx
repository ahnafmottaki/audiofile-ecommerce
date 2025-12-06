import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type RadioProps = ComponentPropsWithoutRef<"input"> & {
  children: ReactNode;
};

const Radio: FC<RadioProps> = ({ children, id, ...props }) => {
  return (
    <div>
      <label
        className="flex  items-center gap-4 font-bold text-sm tracking-[-0.25px] h-14 rounded-lg  border border-[#cfcfcf] pl-4"
        htmlFor={id}
      >
        <input type="radio" id={id} {...props} />
        <span>{children}</span>
      </label>
    </div>
  );
};

export default Radio;
