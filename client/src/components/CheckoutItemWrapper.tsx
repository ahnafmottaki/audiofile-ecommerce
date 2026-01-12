import type { FC, ReactNode } from "react";

interface CheckoutItemWrapperProps {
  label: string;
  children: ReactNode;
}
const CheckoutItemWrapper: FC<CheckoutItemWrapperProps> = ({
  label,
  children,
}) => {
  return (
    <div className={"space-y-6 "}>
      <h3 className="text-sm leading-6 tracking-[0.93px] font-bold text-primary uppercase">
        {label}
      </h3>
      {children}
    </div>
  );
};
export default CheckoutItemWrapper;
