const AboutUs = () => {
  return (
    <div className="container section-inline-padding py-30 space-y-10 lg:grid grid-cols-2 items-center gap-30 last-point:gap-40">
      <div className="lg:order-1  rounded-lg overflow-hidden">
        <picture className="h-75 ">
          <source
            media="(min-width: 1024px)"
            srcSet="/shared/desktop/image-best-gear.jpg"
          />
          <source
            media="(min-width: 500px)"
            srcSet="/shared/tablet/image-best-gear.jpg"
          />
          <img
            src={"/shared/mobile/image-best-gear.jpg"}
            alt="best gear image"
            className=" object-contain"
          />
        </picture>
      </div>
      <div className="">
        <h1 className="font-bold text-3xl sm:text-[40px] sm:leading-11 sm:tracking-[1.43px] tracking-[1px] uppercase pb-8 text-center lg:text-left  max-w-[470px] mx-auto lg:mx-0">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h1>
        <p className="font-medium leading-6 text-[15px] opacity-50 text-center lg:text-left  max-w-[573px]  mx-auto">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
