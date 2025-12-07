import type { FC, ReactNode } from "react";

interface CartItemProps {
  src: string;
  name: string;
  price: number;
  quantity: number;
  children: ReactNode;
}
const ProductStat: FC<CartItemProps> = ({
  children,
  src,
  name,
  price,
  quantity,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="h-16 aspect-square rounded-lg overflow-hidden">
          <img src={src} alt={name} />
        </div>
        <div>
          <h4 className="font-bold text-[15px] leading-6 uppercase">{name}</h4>
          <h5 className="font-bold text-sm leading-6 opacity-50">
            ${price * quantity}
          </h5>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProductStat;
