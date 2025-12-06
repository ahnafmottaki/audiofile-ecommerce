import type { FC } from "react";

interface MayAlsoLikeProps {
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}
const MayAlsoLike: FC<MayAlsoLikeProps> = ({ others }) => {
  return (
    <div className="@container">
      <h1 className="font-bold text-3xl leading-9 tracking-[1.14px] text-center uppercase lg:mb-14 mb-10">
        you may also like
      </h1>
      <div className=" gap-14 grid @[680px]:grid-cols-3 ">
        {others.map((p) => (
          <div key={p.slug}>
            <div>
              <picture>
                <source media="(min-width: 1110px)" srcSet={p.image.desktop} />
                <source media="(min-width: 770px)" srcSet={p.image.tablet} />
                <img
                  src={p.image.mobile}
                  alt={p.name}
                  className="w-full h-full min-[770px]:max-h-[318px] object-cover max-h-[350px]"
                />
              </picture>
            </div>
            <h2 className="my-8 font-bold text-2xl tracking-[1.71px] text-center">
              {p.name}
            </h2>
            <button className="button primary block mx-auto">
              see product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MayAlsoLike;
