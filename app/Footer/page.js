import { images } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-12 sm:py-[4vw] -mb-10 px-6 sm:px-16 -mx-6 sm:-mx-16 flex flex-col justify-center space-y-[3vw]">
      <div className="flex flex-col max-sm:space-y-10 sm:grid sm:grid-cols-3 mb-[2vw]">
        <div>
          <Image src={images.logo} alt="logo" className=" invert" />
        </div>
        <div className=" grid grid-cols-2 max-sm:gap-4 sm:flex sm:justify-between sm:items-center sm:space-x-[2vw] whitespace-nowrap">
          {" "}
          {["home", "about us", "blog", "contact"].map((item, index) => (
            <Link key={index} href={`#${item}`}>
              <p className="text-white uppercase text-lg sm:text-sm xl:text-2xl font-semibold">
                {item}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className=" w-full bg-white h-[.1vw]"></div>
      <p className=" max-sm:pt-2 font-semibold italic text-white xl:text-2xl">
        © 2022 Buildz All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
