import { useAppSelector } from "../store/hooks";
import ProductStat from "./ProductStat";
import ShowStat from "./ShowStat";

const CheckoutSummary = () => {
  const { items, total, vat, shippingCost } = useAppSelector(
    (state) => state.cart
  );

  const totalVat = vat * total;
  const grandTotal = (total * 100 + totalVat + shippingCost * 100) / 100;

  return (
    <div className="mt-8 py-8 lg:mt-0 px-6 rounded-lg bg-white lg:max-w-[350px] lg:w-full">
      <h1 className="font-bold text-lg tracking-[1.29px] uppercase">
        {items.length === 0 ? "Empty Cart" : "Summary"}
      </h1>
      {items.length === 0 && (
        <p className="text-sm mt-10 leading-6 tracking-[0.93px] font-bold text-primary uppercase">
          Your cart is empty.
        </p>
      )}
      {items.length !== 0 && (
        <>
          <div className="py-8 space-y-6">
            {items.map((item) => (
              <ProductStat
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                src={item.image}
              >
                <span className="font-bold text-[15px] leading-6 opacity-50">
                  x{item.quantity}
                </span>
              </ProductStat>
            ))}
          </div>
          <div className="mt-8 mb-6 space-y-2">
            <ShowStat statName="Total" statResult={"$" + total.toString()} />
            <ShowStat
              statName="shipping"
              statResult={"$" + shippingCost.toString()}
            />
            <ShowStat
              statName="Vat (included)"
              statResult={"$" + String(totalVat / 100)}
            />
          </div>
          <ShowStat
            statName="grand total"
            statResult={"$" + String(grandTotal)}
            className="text-primary"
          />
          <button className="button primary mt-8 block mx-auto">
            continue & pay
          </button>
        </>
      )}
    </div>
  );
};
export default CheckoutSummary;
