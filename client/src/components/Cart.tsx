import { createPortal } from "react-dom";
import imageOne from "/cart/image-xx59-headphones.jpg";
import imageTwo from "/cart/image-yx1-earphones.jpg";
import imageThree from "/cart/image-zx9-speaker.jpg";
import type { FC, MouseEvent, ReactNode } from "react";
import QuantityAction from "./QuantityAction";
import ShowStat from "./ShowStat";
import { Link, useLocation } from "react-router";
import ProductStat from "./ProductStat";
import { useAppSelector } from "../store/hooks";

const CART = [
  { src: imageOne, name: "XX99 MK II", price: 2999, quantity: 1 },
  { src: imageTwo, name: "XX59", price: 899, quantity: 2 },
  { src: imageThree, name: "YX1", price: 599, quantity: 2 },
];

const CartContentWrapper = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: (event: MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <section
      className="cart overflow-auto section-inline-padding py-6 z-99999"
      onClick={onClose}
    >
      <div className="container" onClick={onClose}>
        <div className="rounded-lg bg-white px-7 py-8 max-w-[377px] ml-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

interface CartProps {
  cartShowHandler: () => void;
}
const Cart: FC<CartProps> = ({ cartShowHandler }) => {
  const location = useLocation();
  const { items, total: totalPrice } = useAppSelector((state) => state.cart);

  const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      cartShowHandler();
    }
  };

  if (items.length === 0) {
    return (
      <CartContentWrapper onClose={onOverlayClick}>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg tracking-[1.29px] uppercase">
            cart (<span>0</span>)
          </h3>
        </div>
        <div className="my-8 space-y-6">
          <p className="text-center font-medium">Your cart is empty.</p>
        </div>
      </CartContentWrapper>
    );
  }

  return createPortal(
    <CartContentWrapper onClose={onOverlayClick}>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg tracking-[1.29px] uppercase">
          cart (<span>3</span>)
        </h3>
        <button className="font-medium text-[15px] leading-6 opacity-50 underline cursor-pointer">
          Remove All
        </button>
      </div>
      <div className="my-8 space-y-6">
        {CART.map((item) => (
          <ProductStat key={item.name} {...item}>
            <QuantityAction className="px-3 py-2" />
          </ProductStat>
        ))}
      </div>
      <div>
        <ShowStat statName="Total" statResult={`$${totalPrice}`} />
      </div>
      <Link to={"/checkout"} state={{ from: location.pathname }}>
        <button
          onClick={cartShowHandler}
          className="button primary block mx-auto mt-6"
        >
          checkout
        </button>
      </Link>
    </CartContentWrapper>,
    document.getElementById("modal-div")!,
  );
};

export default Cart;
