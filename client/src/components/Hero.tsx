const Hero = () => {
  return (
    <div className="bg-[#191919]">
      <section className="bg-black max-w-[1440px] mx-auto relative h-160  max-h-[510px] sm:max-h-[640px]  overflow-hidden">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/home/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 550px)"
            srcSet="/home/tablet/image-header.jpg"
          />
          <img
            src="/home/mobile/image-header.jpg"
            alt="header image"
            className="w-full h-full"
          />
        </picture>

        <div className="container  flex flex-col justify-center items-center lg:items-start gap-y-6 md:max-[1160px]:pl-10  absolute inset-0 z-20">
          <p className="line-over text-white opacity-50">new product</p>
          <h2 className="text-white font-bold text-4xl leading-10 tracking-[1.29px] sm:text-[56px] sm:leading-14.5 sm:tracking-[2px]">
            XX99 Mark II <br /> HeadphoneS
          </h2>
          <div>
            <p className="opacity-75 max-w-[320px] sm:max-w-[350px] text-center lg:text-left text-white ">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="primary-button mt-10 mx-auto lg:mx-0 block">
              see product
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
