import Image from "next/image";

import icons from "@/assets/icons";
import { images } from "@/assets/images";

const chart = [
  { src: images.jan, alt: "jan" },
  { src: images.feb, alt: "feb" },
  { src: images.march, alt: "march" },
  { src: images.april, alt: "april" },
  { src: images.may, alt: "may" },
  { src: images.june, alt: "june" },
  { src: images.jul, alt: "july" },
];
const Results = () => {
  return (
    <div id="services" className="flex flex-col my-[15vw] overflow-x-hidden">
      <div className="flex-1 flex max-sm:flex-col items-center max-sm:justify-center max-sm:space-y-10 ">
        <div className="flex-[2] flex flex-col space-y-10 content-center">
          <p className=" capitalize text-3xl xl:text-[45px] font-bold">
            Our Results
          </p>
          <p className=" text-lg xl:text-2xl font-light max-w-[450px] pb-5">
            We are a team of like-minded people who do business, generate ideas
            and realize them. Finance, Marketing, Jurisprudence and Business
            Economy are our directions and we know how to deal with many
            financial issues.
          </p>
          <button className="text-white w-fit xl:text-xl font-semibold bg-black py-2 px-10 uppercase rounded-[5px]">
            Read more
          </button>
        </div>
        <div className="flex-[3] max-sm:flex-wrap sm:pl-20 sm:max-w-[60%] flex justify-between">
          {chart.map((bar, index) => (
            <Image
              key={index}
              src={bar.src}
              alt={bar.alt}
              className="sm:max-h-[80vh]"
            />
          ))}
        </div>
      </div>
      <div className="flex-1 max-sm:flex-col-reverse mt-[15vw] flex items-center justify-evenly w-full">
        <div className="flex-1 max-sm:mt-10">
          <Image src={images.rafiki} alt="" className="sm:w-[80%]" />
        </div>
        <div className="flex-1 max-w-[590px] max-h-[450px] space-y-10">
          <div className="flex-1">
            <p className="font-bold xl:text-[27px] uppercase">01. Startups</p>
            <p className=" text-sm xl:text-2xl font-light">
              Startuppers receive assistance in financial, legal, economical and
              human resources
            </p>
          </div>
          <div>
            <p className="font-bold xl:text-[27px] uppercase">
              02. Anti-crisis
            </p>
            <p className=" text-sm xl:text-2xl font-light">
              Marketing research, analysis and creating marketing plan
            </p>
          </div>
          <div>
            <p className="font-bold xl:text-[27px] uppercase">03. finances</p>
            <p className=" text-sm xl:text-2xl font-light">
              We provide businesses with all financial services including
              consultations, financial analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
