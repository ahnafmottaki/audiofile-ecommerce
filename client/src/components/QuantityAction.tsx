import { Minus, Plus } from "lucide-react";
import type { FC } from "react";
interface QuantityActionProps {
  onIncrease: () => void;
  onDecrease: () => void;
  className: string;
  quantity: number;
}
const QuantityAction: FC<QuantityActionProps> = ({
  className,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div
      className={`flex  justify-center items-center gap-5 bg-secondary ${className}`}
    >
      <button onClick={onIncrease}>
        <Plus
          size={13}
          className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
        />
      </button>

      <span className="font-bold tracking-[1px]">{quantity}</span>
      <button onClick={onDecrease}>
        <Minus
          size={13}
          className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
        />
      </button>
    </div>
  );
};

export default QuantityAction;
