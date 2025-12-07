import type { FC } from "react";

interface GalleryProps {
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}

type ImageProp = {
  image: GalleryProps["gallery"]["first"];
  className?: string;
};

function RenderImage({ image, className = "" }: ImageProp) {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <picture>
        <source media="(min-width: 500px)" srcSet={image.tablet} />
        <source media="(min-width: 1024)" srcSet={image.desktop} />
        <img
          src={image.mobile}
          alt="image one"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
}

const Gallery: FC<GalleryProps> = ({ gallery }) => {
  return (
    <div className="@container">
      <div className="space-y-5 @min-[700px]:space-y-0 @min-[700px]:grid  grid-cols-2 gap-4.5">
        <div className="gap-4 flex flex-col">
          {[gallery.first, gallery.second].map((g, index) => (
            <RenderImage
              key={index}
              image={g}
              className="@min-[700px]:max-h-[280px]"
            />
          ))}
        </div>
        <RenderImage
          image={gallery.third}
          className="@min-[700px]:max-h-[592px]"
        />
      </div>
    </div>
  );
};

export default Gallery;
