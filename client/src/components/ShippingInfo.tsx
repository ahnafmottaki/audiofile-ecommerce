import CheckoutItemWrapper from "./CheckoutItemWrapper";
import Input from "./Input";

const ShippingInfo = () => {
  return (
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
        <Input id="zip_code" type="number" required placeholder="10001">
          Zip Code
        </Input>
        <Input id="city" type="text" required placeholder="New York">
          City
        </Input>
        <Input id="country" type="text" required placeholder="United States">
          Country
        </Input>
      </div>
    </CheckoutItemWrapper>
  );
};

export default ShippingInfo;
