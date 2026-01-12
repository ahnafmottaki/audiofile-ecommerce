import CheckoutItemWrapper from "./CheckoutItemWrapper";
import Input from "./Input";

import type { CheckoutForm } from "../pages/Checkout";
import type { FC } from "react";

type BillingDetailsProps = Pick<
  CheckoutForm,
  "name" | "emailAddress" | "phoneNumber"
> & {
  onFormChange: (value: string, prop: keyof CheckoutForm) => void;
};

const BillingDetails: FC<BillingDetailsProps> = ({
  name,
  emailAddress,
  phoneNumber,
  onFormChange,
}) => {
  return (
    <CheckoutItemWrapper label="Billing details">
      <div className=" space-y-6 sm:space-y-0 sm:grid grid-cols-2 gap-4">
        <Input
          id="name"
          type="text"
          required
          placeholder="Alexei Ward"
          value={name}
          onChange={(event) => onFormChange(event.target.value, "name")}
        >
          Name
        </Input>
        <Input
          id="email"
          type="text"
          required
          placeholder="alexei@mail.com"
          value={emailAddress}
          onChange={(event) => onFormChange(event.target.value, "emailAddress")}
        >
          Email Address
        </Input>
        <Input
          id="phone_number"
          type="number"
          required
          placeholder="+8801329553511"
          value={phoneNumber}
          onChange={(event) => onFormChange(event.target.value, "phoneNumber")}
        >
          Phone Number
        </Input>
      </div>
    </CheckoutItemWrapper>
  );
};

export default BillingDetails;
