import { Minus, Plus } from "lucide-react";

const QuantityAction = () => {
  return (
    <button className="flex justify-center items-center gap-5 bg-secondary">
      <Plus
        size={13}
        className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
      />
      <span className="font-bold tracking-[1px]">1</span>
      <Minus
        size={13}
        className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
      />
    </button>
  );
};

export default QuantityAction;
