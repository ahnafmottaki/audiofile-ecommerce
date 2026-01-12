import CheckoutItemWrapper from "./CheckoutItemWrapper";
import Input from "./Input";
import Radio from "./Radio";

const PaymentDetails = () => {
  return (
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
  );
};

export default PaymentDetails;
