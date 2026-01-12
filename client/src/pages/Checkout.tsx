import BillingDetails from "../components/BillingDetails";
import ShippingInfo from "../components/ShippingInfo";
import PaymentDetails from "../components/PaymentDetails";
import CheckoutSummary from "../components/CheckoutSummary";
import GoBack from "../components/GoBack";
import { useCallback, useState } from "react";

export interface CheckoutForm {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: "e-money" | "cash-on-delivery";
  eMoneyNumber: "";
  eMoneyPin: "";
}

const initialValue: CheckoutForm = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  paymentMethod: "e-money",
  eMoneyNumber: "",
  eMoneyPin: "",
};
const Checkout = () => {
  const [checkoutForm, setCheckoutForm] = useState<CheckoutForm>(initialValue);
  const [error, setError] = useState("");

  const onFormChange = useCallback(
    (value: string, prop: keyof CheckoutForm) => {
      setCheckoutForm({ ...checkoutForm, [prop]: value });
    },
    []
  );

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
              <BillingDetails
                onFormChange={onFormChange}
                name={checkoutForm.name}
                emailAddress={checkoutForm.emailAddress}
                phoneNumber={checkoutForm.phoneNumber}
              />
              <ShippingInfo />
              <PaymentDetails />
            </form>
          </div>
          <CheckoutSummary />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
