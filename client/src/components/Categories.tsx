import { ChevronRight } from "lucide-react";
import type { FC } from "react";
import { CATEGORIES } from "../constants/navigationLinks";

interface CategoryProps {
  name: string;
  url: string;
}
const Category: FC<CategoryProps> = ({ name, url }) => {
  return (
    <div className="h-50 max-w-[350px] w-full sm:max-w-full  bg-secondary grid grid-cols-1 grid-rows-1">
      <div className="col-span-full row-span-full relative bottom-1/3">
        <img src={url} className="h-full w-full object-contain" />
      </div>
      <div className="space-y-4 flex flex-col items-center justify-end pb-7.5 col-span-full row-span-full z-10">
        <h3 className="font-bold text-lg tracking-[1.29px] uppercase">
          {name}
        </h3>
        <button className="link-button">
          shop <ChevronRight size={18} className="text-primary" />
        </button>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="container section-inline-padding py-30   lg:pt-50 lg:pb-42 grid grid-cols-1 sm:grid-cols-3 sm:gap-7.5 gap-18  justify-items-center sm:justify-items-stretch ">
      {CATEGORIES.map((category) => (
        <Category name={category.name} url={category.url} />
      ))}
    </section>
  );
};

export default Categories;
