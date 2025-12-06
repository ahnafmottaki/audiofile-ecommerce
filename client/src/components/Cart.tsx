import { createPortal } from "react-dom";
import imageOne from "/cart/image-xx59-headphones.jpg";
import imageTwo from "/cart/image-yx1-earphones.jpg";
import imageThree from "/cart/image-zx9-speaker.jpg";
import type { FC } from "react";
import QuantityAction from "./QuantityAction";
import ShowStat from "./ShowStat";
interface CartItemProps {
  src: string;
  name: string;
  price: number;
  quantity: number;
}
const CartItem: FC<CartItemProps> = ({ src, name, price, quantity }) => {
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
      <QuantityAction className="px-3 py-2" />
    </div>
  );
};

const CART = [
  { src: imageOne, name: "XX99 MK II", price: 2999, quantity: 1 },
  { src: imageTwo, name: "XX59", price: 899, quantity: 2 },
  { src: imageThree, name: "YX1", price: 599, quantity: 2 },
];

const Cart = () => {
  const totalPrice = CART.reduce((acc, item) => acc + item.price, 0);
  return createPortal(
    <section className="cart overflow-auto section-inline-padding py-6 z-99999">
      <div className="container">
        <div className="rounded-lg bg-white px-7 py-8 max-w-[377px] ml-auto">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg tracking-[1.29px] uppercase">
              cart (<span>3</span>)
            </h3>
            <button className="font-medium text-[15px] leading-6 opacity-50 underline">
              Remove All
            </button>
          </div>
          <div className="my-8 space-y-6">
            {CART.map((item) => (
              <CartItem key={item.name} {...item} />
            ))}
          </div>
          <div>
            <ShowStat statName="Total" statResult={`$${totalPrice}`} />
          </div>
          <button className="button primary block mx-auto mt-6">
            checkout
          </button>
        </div>
      </div>
    </section>,
    document.getElementById("modal-div")!
  );
};

export default Cart;
