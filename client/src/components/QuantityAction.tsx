import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const QuantityAction = ({ className }: { className: string }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrease = () => {
    if (quantity >= 3) return;
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  return (
    <div
      className={`flex  justify-center items-center gap-5 bg-secondary ${className}`}
    >
      <button onClick={handleIncrease}>
        <Plus
          size={13}
          className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
        />
      </button>

      <span className="font-bold tracking-[1px]">{quantity}</span>
      <button onClick={handleDecrease}>
        <Minus
          size={13}
          className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
        />
      </button>
    </div>
  );
};

export default QuantityAction;
