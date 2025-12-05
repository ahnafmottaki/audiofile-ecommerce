import { useParams } from "react-router";
import data from "../data.json";
import type { FC } from "react";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
interface Product {
  slug: string;
  name: string;
  description: string;
  new: boolean;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
}
interface ProductProps extends Product {
  index: number;
}
const Product: FC<ProductProps> = ({ index, ...product }) => {
  const productName = product.name
    .toLowerCase()
    .trim()
    .split(product.category)[0];

  return (
    <div className="grid gap-8  min-[500px]:gap-13 lg:grid-cols-2  lg:gap-31">
      <div
        className={`h-[327px] min-[500px]:h-[clamp(352px,80vw,500px)] rounded-xl  overflow-hidden ${
          index % 2 !== 0 ? " lg:order-2 " : ""
        }`}
      >
        <picture className="w-full h-full">
          <source media="(min-width: 500px)" srcSet={product.image.tablet} />
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <img
            className=" w-full h-full object-cover min-[500px]:object-none"
            src={product.image.mobile}
            alt={product.name}
          />
        </picture>
      </div>
      <div
        className={`flex flex-col items-center lg:items-start gap-6 min-[500px]:gap-0 lg:self-center `}
      >
        <p className="line-over text-primary min-[500px]:pb-4">new product</p>
        <h1 className="font-bold text-3xl lg:text-left min-[500px]:text-[40px] min-[500px]:leading-11 min-[500px]:tracking-[1.43px] tracking-[1px] text-center uppercase">
          {productName}
          <br />
          {product.category}
        </h1>
        <p className="font-medium leading-6 opacity-50 text-center lg:text-left mt-8 mb-6 min-[500px]:max-w-[572px] lg:max-w-[445px]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="primary-button">see product</button>
      </div>
    </div>
  );
};

const CategoryPage = () => {
  const params = useParams<{ category: string }>();
  const products = data.filter(
    (product) => product.category === params.category
  );
  if (products.length === 0) {
    return (
      <div className="h-screen container section-inline-padding  flex justify-center items-center uppercase font-bold text-4xl leading-12">
        No Items in this category
      </div>
    );
  }
  console.log(products);
  return (
    <section>
      <div className="font-bold text-3xl tracking-[2px] text-center uppercase py-8 bg-black text-white">
        {params.category}
      </div>
      <div className="container section-inline-padding py-16 min-[500px]:py-30 lg:py-40 space-y-30">
        {products.map((product, index) => (
          <Product {...product} key={product.slug} index={index} />
        ))}
      </div>
      <Categories />
      <AboutUs />
    </section>
  );
};

export default CategoryPage;
