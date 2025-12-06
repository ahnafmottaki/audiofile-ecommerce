import { useParams } from "react-router";
import data from "../data.json";
import Product from "../components/Product";
import { Minus, Plus } from "lucide-react";
import type { FC } from "react";

type InTheBoxProps = { includes: Array<{ quantity: number; item: string }> };

const InTheBox: FC<InTheBoxProps> = ({ includes }) => {
  return (
    <div className="@container flex-1 lg:max-w-[350px]">
      <div className="@[549px]:grid grid-cols-2">
        <h1 className="font-bold text-2xl leading-9 tracking-[0.86px] uppercase mb-6">
          in the box
        </h1>
        <div>
          {includes.map((include, index) => (
            <div
              key={index}
              className="text-[15px] leading-[25px] flex items-center gap-x-6"
            >
              <h6 className="font-bold text-primary">
                <span>{include.quantity}</span>x
              </h6>
              <p className="font-medium opacity-50">{include.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
interface FeaturesProps {
  features: string;
}
const Features: FC<FeaturesProps> = ({ features }) => {
  const paraArray = features.split(".");
  return (
    <div>
      <h1 className="font-bold text-2xl leading-9 tracking-[0.86px] uppercase mb-6">
        Features
      </h1>
      <div>
        <p className="font-medium text-[15px] leading-[25px] opacity-50">
          {paraArray.slice(0, 3)}
        </p>
        <br />
        <p className="font-medium text-[15px] leading-[25px] opacity-50">
          {paraArray.slice(3)}
        </p>
      </div>
    </div>
  );
};

const QuantityAction = () => {
  return (
    <button className="flex justify-center items-center gap-5 bg-secondary">
      <Plus
        size={13}
        className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
      />
      <span className="font-bold tracking-[1px]">1</span>
      <Minus
        size={13}
        className="cursor-pointer opacity-25 hover:text-primary hover:opacity-100 hover:font-bold transition-all duration-100"
      />
    </button>
  );
};

const ProductDetails = () => {
  const params = useParams<{ slug: string }>();
  const product = data.find((product) => product.slug === params.slug);
  if (!product) {
    return (
      <div className="h-screen container section-inline-padding  flex justify-center items-center uppercase font-bold text-4xl leading-12">
        No procut available with this product
      </div>
    );
  }
  return (
    <section className="container section-inline-padding  py-16 min-[500px]:py-22 md:py-30 lg:py-40 space-y-15 sm:space-y-22 lg:space-y-30">
      <Product page="product" {...product}>
        <h4 className="font-bold text-lg tracking-[1.29px] ">
          $ {product.price}
        </h4>
        <div className="min-[500px]:mt-12 flex items-center gap-4">
          <QuantityAction />
          <button className="primary-button">add to cart</button>
        </div>
      </Product>
      <div className="  space-y-15 sm:space-y-22  lg:space-y-0 lg:flex lg:*:nth-[1]:max-w-[635px] lg:justify-between">
        <Features features={product.features} />
        <InTheBox includes={product.includes} />
      </div>
    </section>
  );
};

export default ProductDetails;
