import { Facebook, Instagram, Twitter } from "lucide-react";
import Links from "./Links";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="bg-black-two ">
      <div className="relative container section-inline-padding grid justify-items-center sm:justify-items-stretch pt-13 sm:pt-15 sm:pb-11.5 pb-6">
        <div className="w-[101px] h-1 bg-primary absolute sm:left-10 last-point:left-0 -top-px  left-1/2 max-sm:-translate-1/2"></div>
        <div className="space-y-12 sm:space-y-8 pb-12 sm:pb-8 lg:pb-9 lg:flex lg:justify-between lg:items-center lg:space-y-0 ">
          <div>
            <Logo />
          </div>
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8.5">
            <Links />
          </ul>
        </div>

        <div className="space-y-12 sm:space-y-20 lg:space-y-14">
          <p className="font-medium text-[15px] text-center sm:text-left leading-6 text-white opacity-50 max-w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className="space-y-12 sm:space-y-0 sm:flex sm:justify-between">
            <p className="font-medium text-[15px] leading-6 text-white opacity-50 text-center">
              Copyright 2025. All Rights Reserved
            </p>
            <div className="flex gap-4 items-center justify-center lg:relative bottom-16">
              <Facebook className="text-white hover:text-primary cursor-pointer" />
              <Instagram className="text-white hover:text-primary cursor-pointer" />
              <Twitter className="text-white hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
