import speakerImage from "/home/desktop/image-speaker-zx9.png";

const SpeakerOnePopularProduct = () => {
  return (
    <div className="bg-primary pt-20 pb-13.5 md:pb-16  last-point:grid last-point:grid-cols-2 items-center last-point:py-0 overflow-hidden rounded-lg ">
      <div className="h-[206px] w-[172.25px]  md:w-[197.25px] md:h-[237px] last-point:h-[493px] last-point:w-[410px]  mx-auto pb-8 box-content relative  last-point:top-10 ">
        <div className="absolute w-[279px] md:w-[472px] aspect-square rounded-full border border-[#d8d8d8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] last-point:-translate-x-[43%] last-point:-translate-y-[45%] "></div>
        <div className="absolute w-[320px] md:w-[542px] aspect-square rounded-full border border-[#d8d8d8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] last-point:-translate-x-[43%] last-point:-translate-y-[45%] "></div>
        <div className="absolute w-[600px] md:w-[1050px] last-point:w-[944px] aspect-square rounded-full border border-[#d8d8d8] top-1/2 left-1/2 -translate-x-1/2 last-point:-translate-x-[47%] -translate-y-[58%] last-point:-translate-y-[40%]"></div>
        <img
          src={speakerImage}
          alt=""
          className="relative  z-10 last-point:left-10"
        />
      </div>
      <div className="flex flex-col items-center last-point:items-start relative z-10 justify-self-center">
        <h1 className="font-bold text-4xl md:text-[56px] md:leading-14.5 md:tracking-[2px] text-center last-point:text-left  leading-10 tracking-[1.29px] text-white mb-6">
          ZX9 <br /> SPEAKER
        </h1>
        <p className="font-medium leading-[25px]  text-white text-center   text-[15px] last-point:text-left max-w-[280px] md:max-w-[349px] opacity-75 mb-6 md:mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="bg-black text-white hover:bg-[rgba(0,0,0,0.6)]">
          see product
        </button>
      </div>
    </div>
  );
};

const SpeakerTwoPopularProduct = () => {
  return (
    <div className="h-80 max-h-80 grid grid-cols-1 grid-rows-1 ">
      <picture className="col-span-full row-span-full h-full w-full">
        <source
          media="(min-width: 1024px)"
          srcSet={"/home/desktop/image-speaker-zx7.jpg"}
        />
        <source
          media="(min-width: 640px)"
          srcSet={"/home/tablet/image-speaker-zx7.jpg"}
        />
        <img
          src="/home/mobile/image-speaker-zx7.jpg"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className=" col-span-full row-span-full flex flex-col justify-center items-start gap-8 pl-6 sm:pl-15.5 z-10">
        <h1 className="font-bold text-3xl">ZX7 SPEAKER</h1>
        <button className="secondary-button">see product</button>
      </div>
    </div>
  );
};
const PopularProducts = () => {
  return (
    <section className="container section-inline-padding space-y-8">
      <SpeakerOnePopularProduct />
      <SpeakerTwoPopularProduct />
    </section>
  );
};

export default PopularProducts;
