import type { FC, ReactNode } from "react";

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
  index?: number;
  children: ReactNode;
  page: "product" | "category";
}

const classNames = {
  category: {
    parentDiv: "lg:grid-cols-2",
    contentDiv: "items-center",
    contentHeading: "text-center",
    contentPara: "text-center",
  },
  product: {
    parentDiv: "md:grid-cols-2",
    contentDiv: "",
    contentHeading: "",
    contentPara: "",
  },
};
const Product: FC<ProductProps> = ({ page, index, children, ...product }) => {
  const productName = product.name
    .toLowerCase()
    .trim()
    .split(product.category)[0];

  return (
    <div
      className={`grid gap-8  min-[500px]:gap-13 ${classNames[page].parentDiv}  lg:gap-31`}
    >
      <div
        className={`h-[327px] min-[500px]:h-[clamp(352px,80vw,500px)] rounded-xl  overflow-hidden ${
          index && index % 2 !== 0 ? " lg:order-2 " : ""
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
        className={`flex flex-col ${classNames[page].contentDiv} lg:items-start gap-6 min-[500px]:gap-0 lg:self-center `}
      >
        <p className="line-over text-primary min-[500px]:pb-4">new product</p>
        <h1
          className={`font-bold text-3xl lg:text-left min-[500px]:text-[40px] min-[500px]:leading-11 min-[500px]:tracking-[1.43px] ${classNames[page].contentHeading} tracking-[1px]  uppercase`}
        >
          {productName}
          <br />
          {product.category}
        </h1>
        <p className="font-medium leading-6 opacity-50  lg:text-left min-[500px]:mt-8 min-[500px]:mb-6 min-[500px]:max-w-[572px] lg:max-w-[445px]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        {children}
      </div>
    </div>
  );
};

export default Product;
