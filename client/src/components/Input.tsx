import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  children: ReactNode;
};

const Input: FC<InputProps> = ({ children, id, ...props }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="font-bold text-xs">
        {children}
      </label>
      <input
        {...props}
        className="h-14.5 rounded-lg outline-1 outline-[#CFCFCF] pl-6 font-bold text-sm text-black placeholder:opacity-40 focus:outline-primary"
      />
      <p className="text-red-600 font-medium text-sm">Incorrect</p>
    </div>
  );
};

export default Input;
