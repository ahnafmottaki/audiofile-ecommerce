import type { ReactNode } from "react";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import Radio from "../components/Radio";

const CheckoutItemWrapper = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className=" space-y-6">
      <button className="text-sm leading-6 tracking-[0.93px] font-bold text-primary uppercase">
        {label}
      </button>
      {children}
    </div>
  );
};

const Checkout = () => {
  return (
    <section className=" bg-[#d7d7d7]">
      <div className="container section-inline-padding ">
        <GoBack />
        <div className="p-6 bg-white rounded-lg">
          <h1 className="uppercase text-3xl tracking-[1px] font-bold">
            checkout
          </h1>
          <form className="mt-8 space-y-8">
            <CheckoutItemWrapper label="Billing details">
              <Input id="name" type="text" required placeholder="Alexei Ward">
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
            </CheckoutItemWrapper>
            <CheckoutItemWrapper label="Shipping Info">
              <Input
                id="address"
                type="text"
                required
                placeholder="1137 Williams Avenue"
              >
                Your Address
              </Input>
              <Input id="zip_code" type="number" required placeholder="10001">
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
            </CheckoutItemWrapper>
            <CheckoutItemWrapper label="payment details">
              <h3 className="font-bold capitalize text-xs ">payment method</h3>
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
              <div className="space-y-4">
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
      </div>
    </section>
  );
};

export default Checkout;
