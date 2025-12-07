import type { ReactNode } from "react";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import Radio from "../components/Radio";
import imageOne from "/cart/image-xx59-headphones.jpg";
import imageTwo from "/cart/image-yx1-earphones.jpg";
import imageThree from "/cart/image-zx9-speaker.jpg";
import ProductStat from "../components/ProductStat";
import ShowStat from "../components/ShowStat";

const CheckoutItemWrapper = ({
  label,
  children,
}: {
  label: string;

  children: ReactNode;
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

const CART = [
  { src: imageOne, name: "XX99 MK II", price: 2999, quantity: 1 },
  { src: imageTwo, name: "XX59", price: 899, quantity: 2 },
  { src: imageThree, name: "YX1", price: 599, quantity: 2 },
];

const Checkout = () => {
  return (
    <section className="bg-[#d7d7d7] pb-[97px] ">
      <div className="container section-inline-padding @container">
        <GoBack />
        <div className="@min-[1110px]:flex lg:gap-7.5 lg:items-start">
          <div className="p-6 bg-white rounded-lg lg:w-full">
            <h1 className="uppercase text-3xl tracking-[1px] font-bold">
              checkout
            </h1>
            <form className="mt-8 space-y-8">
              <CheckoutItemWrapper label="Billing details">
                <div className=" space-y-6 sm:space-y-0 sm:grid grid-cols-2 gap-4">
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Alexei Ward"
                  >
                    Name
                  </Input>
                  <Input
                    id="email"
                    type="text"
                    required
                    placeholder="alexei@mail.com"
                  >
                    Email Address
                  </Input>
                  <Input
                    id="phone_number"
                    type="number"
                    required
                    placeholder="+8801329553511"
                  >
                    Phone Number
                  </Input>
                </div>
              </CheckoutItemWrapper>
              <CheckoutItemWrapper label="Shipping Info">
                <div className="sm:grid grid-cols-2 gap-4 space-y-6 sm:space-y-0">
                  <div className="col-span-2">
                    <Input
                      id="address"
                      type="text"
                      required
                      placeholder="1137 Williams Avenue"
                    >
                      Your Address
                    </Input>
                  </div>
                  <Input
                    id="zip_code"
                    type="number"
                    required
                    placeholder="10001"
                  >
                    Zip Code
                  </Input>
                  <Input id="city" type="text" required placeholder="New York">
                    City
                  </Input>
                  <Input
                    id="country"
                    type="text"
                    required
                    placeholder="United States"
                  >
                    Country
                  </Input>
                </div>
              </CheckoutItemWrapper>
              <CheckoutItemWrapper label="payment details">
                <div className="sm:grid grid-cols-2 gap-4">
                  <h3 className="font-bold capitalize text-xs mb-4 sm:mb-0">
                    payment method
                  </h3>
                  <div className="space-y-4">
                    <Radio id="e-money" name="payment_method" value={"e-money"}>
                      e-Money
                    </Radio>
                    <Radio
                      id="cash_on_delivery"
                      name="payment_method"
                      value={"cash_on_delivery"}
                    >
                      Cash On Delivery
                    </Radio>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-4">
                  <Input type="number" required placeholder="23453223">
                    e-Money Number
                  </Input>
                  <Input type="number" required placeholder="234">
                    e-Money Pin
                  </Input>
                </div>
              </CheckoutItemWrapper>
            </form>
          </div>
          <div className="mt-8 py-8 lg:mt-0 px-6 rounded-lg bg-white lg:max-w-[350px] lg:w-full">
            <h1 className="font-bold text-lg tracking-[1.29px] uppercase">
              summary
            </h1>
            <div className="py-8 space-y-6">
              {CART.map((item) => (
                <ProductStat {...item} key={item.name}>
                  <span className="font-bold text-[15px] leading-6 opacity-50">
                    x{item.quantity}
                  </span>
                </ProductStat>
              ))}
            </div>
            <div className="mt-8 mb-6 space-y-2">
              <ShowStat statName="Total" statResult="$5396" />
              <ShowStat statName="shipping" statResult="$50" />
              <ShowStat statName="Vat (included)" statResult="$1079" />
            </div>
            <ShowStat
              statName="grand total"
              statResult="$5446"
              className="text-primary"
            />
            <button className="button primary mt-8 block mx-auto">
              continue & pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
