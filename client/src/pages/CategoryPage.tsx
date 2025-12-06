import { Link, useLocation, useParams } from "react-router";
import data from "../data.json";

import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Product from "../components/Product";

const CategoryPage = () => {
  const params = useParams<{ category: string }>();
  const location = useLocation();
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
  return (
    <section>
      <div className="font-bold text-3xl tracking-[2px] text-center uppercase py-8 bg-black text-white">
        {params.category}
      </div>
      <div className="container section-inline-padding py-16 min-[500px]:py-30 lg:py-40 space-y-30">
        {products.map((product, index) => (
          <Product
            page={"category"}
            {...product}
            key={product.slug}
            index={index}
          >
            <Link
              to={`/product/${product.slug}`}
              state={{ from: location.pathname }}
            >
              <button className="primary button">see product</button>
            </Link>
          </Product>
        ))}
      </div>
      <Categories />
      <AboutUs />
    </section>
  );
};

export default CategoryPage;
