import { Link, useLocation, useParams } from "react-router";
import data from "../data.json";
import Product from "../components/Product";
import InTheBox from "../components/InTheBox";
import QuantityAction from "../components/QuantityAction";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import MayAlsoLike from "../components/MayAlsoLike";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";

const ProductDetails = () => {
  const params = useParams<{ slug: string }>();
  const location = useLocation();
  const product = data.find((product) => product.slug === params.slug);
  if (!product) {
    return (
      <div className="h-screen container section-inline-padding  flex justify-center items-center uppercase font-bold text-4xl leading-12">
        No procut available with this product
      </div>
    );
  }
  return (
    <section className="container section-inline-padding ">
      <Link
        to={location.state.from || ".."}
        relative="route"
        className="capitalize opacity-50 block pt-8 pb-6 hover:text-primary font-medium text-sm leading-6"
      >
        go back
      </Link>
      <div className="pb-16 min-[500px]:pb-22 md:pb-30 lg:pb-40 space-y-15 sm:space-y-22 lg:space-y-30">
        <Product page="product" {...product}>
          <h4 className="font-bold text-lg tracking-[1.29px] ">
            $ {product.price}
          </h4>
          <div className="min-[500px]:mt-12 flex items-center gap-4">
            <QuantityAction className="px-7.5 h-12" />
            <button className="primary button">add to cart</button>
          </div>
        </Product>
        <div className="  space-y-15 sm:space-y-22  lg:space-y-0 lg:flex lg:*:nth-[1]:max-w-[635px] lg:justify-between">
          <Features features={product.features} />
          <InTheBox includes={product.includes} />
        </div>
        <Gallery gallery={product.gallery} />
        <MayAlsoLike others={product.others} />
      </div>
      <Categories />
      <AboutUs />
    </section>
  );
};

export default ProductDetails;
