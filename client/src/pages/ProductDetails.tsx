import { useParams } from "react-router";
import data from "../data.json";
import Product from "../components/Product";
import InTheBox from "../components/InTheBox";
import QuantityAction from "../components/QuantityAction";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import MayAlsoLike from "../components/MayAlsoLike";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import GoBack from "../components/GoBack";
import { useCallback, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addItem } from "../features/cart";

const ProductDetails = () => {
  const params = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleIncrease = useCallback(() => {
    if (quantity >= 3) return;
    setQuantity(quantity + 1);
  }, [quantity]);

  const handleDecrease = useCallback(() => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }, [quantity]);

  const product = data.find((product) => product.slug === params.slug);

  if (!product) {
    return (
      <div className="h-screen container section-inline-padding  flex justify-center items-center uppercase font-bold text-4xl leading-12">
        No procut available with this product
      </div>
    );
  }

  const {
    price,
    features,
    includes,
    gallery,
    others,
    image: { mobile },
    name,
    id,
  } = product;

  const onAddItem = () => {
    dispatch(
      addItem({
        id: id,
        image: mobile,
        name: name,
        price: price,
        quantity: quantity,
      }),
    );
  };

  return (
    <section className="container section-inline-padding ">
      <GoBack />
      <div className="pb-16 min-[500px]:pb-22 md:pb-30 lg:pb-40 space-y-15 sm:space-y-22 lg:space-y-30">
        <Product page="product" {...product}>
          <h4 className="font-bold text-lg tracking-[1.29px] ">$ {price}</h4>
          <div className="min-[500px]:mt-12 flex items-center gap-4">
            <QuantityAction
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={quantity}
              className="px-7.5 h-12"
            />
            <button className="primary button" onClick={onAddItem}>
              add to cart
            </button>
          </div>
        </Product>
        <div className="  space-y-15 sm:space-y-22  lg:space-y-0 lg:flex lg:*:nth-[1]:max-w-[635px] lg:justify-between">
          <Features features={features} />
          <InTheBox includes={includes} />
        </div>
        <Gallery gallery={gallery} />
        <MayAlsoLike others={others} />
      </div>
      <Categories />
      <AboutUs />
    </section>
  );
};

export default ProductDetails;
