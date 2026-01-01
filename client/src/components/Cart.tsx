import { createPortal } from "react-dom";
import type { FC, MouseEvent, ReactNode } from "react";
import QuantityAction from "./QuantityAction";
import ShowStat from "./ShowStat";
import { Link, useLocation } from "react-router";
import ProductStat from "./ProductStat";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "../features/cart";

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
  const dispatch = useAppDispatch();

  const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      cartShowHandler();
    }
  };

  return createPortal(
    <CartContentWrapper onClose={onOverlayClick}>
      {items.length === 0 && (
        <>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg tracking-[1.29px] uppercase">
              cart (<span>{items.length}</span>)
            </h3>
          </div>
          <div className="my-8 space-y-6">
            <p className="text-center font-medium">Your cart is empty.</p>
          </div>
        </>
      )}
      {items.length !== 0 && (
        <>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg tracking-[1.29px] uppercase">
              cart (<span>{items.length}</span>)
            </h3>
            <button
              className="font-medium text-[15px] leading-6 opacity-50 underline cursor-pointer"
              onClick={() => dispatch(clearCart())}
            >
              Remove All
            </button>
          </div>
          <div className="my-8 space-y-6">
            {items.map((item) => (
              <ProductStat
                key={item.id}
                src={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              >
                <QuantityAction
                  quantity={item.quantity}
                  className="px-3 py-2"
                  onIncrease={() => dispatch(increaseQuantity(item.id))}
                  onDecrease={() => dispatch(decreaseQuantity(item.id))}
                />
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
        </>
      )}
    </CartContentWrapper>,
    document.getElementById("modal-div")!,
  );
};

export default Cart;
