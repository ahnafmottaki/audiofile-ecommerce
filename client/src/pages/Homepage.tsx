import AboutUs from "../components/AboutUs";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <PopularProducts />
      <AboutUs />
    </>
  );
};

export default Homepage;
