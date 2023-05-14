import Image from "next/image";

import icons from "@/assets/icons";
import { images } from "@/assets/images";

const articles = [
  {
    imgSrc: images.rect26,
    alt: "people",
    title: "Networking In Business Security",
    text: "E-commerce sites have taken retail online and with such its audience. Once represenataives ...",
  },
  {
    imgSrc: images.rect27,
    alt: "people",
    title: "The Uncharted Research In Marketing Research",
    text: "Any enterprise that wants to increase it’s customer base should do so by...",
  },
  {
    imgSrc: images.rect28,
    alt: "people",
    title: "IT Security And Its Shackles",
    text: "IT Security has a big job; keep corperate data safe in the face of motivated hackers...",
  },
];
const Pricing = () => {
  return (
    <div className="flex flex-col my-20 sm:my-[8vw]" id="pricing">
      <p className=" max-sm:text-[35px] text-center  text-3xl xl:text-[45px] leading-tight font-bold">
        Our Pricing
      </p>
      <p className="max-sm:text-xl xl:text-[27px] max-w-[500px] xl:max-w-[1000px] max-sm:mt-5 text-center self-center max-sm:mx-6 ">
        This service includes your business analysis, marketing researches and
        financial planning.
      </p>
      <div className="flex flex-col max-sm:space-y-10 sm:flex-row justify-center my-10">
        <div className="z-10 flex flex-col justify-center items-center shadow-xl p-6 xl:p-14 border border-neutral-200">
          <p className="max-sm:text-xl text-sm xl:text-xl uppercase text-neutral-500 font-semibold">
            1 user
          </p>
          <p className="max-sm:text-3xl text-lg xl:text-[30px] font-semibold">
            Premium
          </p>
          <p className="max-sm:text-2xl text-sm xl:text-2xl leading-4">
            100$/month
          </p>
          <div className="my-10 flex flex-col space-y-5">
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>
          </div>
          <button className="text-white border-white border whitespace-nowrap hover:invert transition-all ease-linear duration-500 w-fit sm:max-xl:text-sm text-xl font-semibold bg-black py-2 px-10 uppercase rounded-[5px]">
            Buy now
          </button>
        </div>
        <div className="sm:z-50 sm:-ml-5 sm:mt-10 sm:-mb-10 bg-white flex flex-col justify-center items-center shadow-xl p-6 xl:p-14 border border-neutral-200">
          <p className="max-sm:text-xl text-sm xl:text-xl uppercase text-neutral-500 font-semibold">
            1 user
          </p>
          <p className="max-sm:text-3xl text-lg xl:text-[30px] font-semibold">
            Premium
          </p>
          <p className="max-sm:text-2xl text-sm xl:text-2xl leading-4">
            100$/month
          </p>{" "}
          <div className="my-10 flex flex-col space-y-5">
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>
          </div>
          <button className="text-black whitespace-nowrap hover:invert transition-all ease-linear duration-500 w-fit sm:max-xl:text-sm text-xl font-semibold bg-white border-black border  py-2 px-10 uppercase rounded-[5px]">
            Buy now
          </button>
        </div>
        <div className="sm:z-10 sm:-ml-5 flex flex-col justify-center items-center shadow-xl p-6 xl:p-14 border border-neutral-200">
          <p className="max-sm:text-xl text-sm xl:text-xl uppercase text-neutral-500 font-semibold">
            1 user
          </p>
          <p className="max-sm:text-3xl text-lg xl:text-[30px] font-semibold">
            Premium
          </p>
          <p className="max-sm:text-2xl text-sm xl:text-2xl leading-4">
            100$/month
          </p>{" "}
          <div className="my-10 flex flex-col space-y-5">
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>{" "}
            <p className="flex max-sm:text-2xl text-xs whitespace-nowrap xl:text-2xl font-extralight">
              <Image
                src={icons.checkIcon}
                alt="checkIcon"
                className="sm:max-xl:mr-0.5 mr-2 sm:max-xl:w-4 sm:max-xl:h-4"
              />{" "}
              Lorem ipsum theorh
            </p>
          </div>
          <button className="text-white border-white border whitespace-nowrap hover:invert transition-all ease-linear duration-500 w-fit sm:max-xl:text-sm text-xl font-semibold bg-black py-2 px-10 uppercase rounded-[5px]">
            Buy now
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-[4vw] mt-[15vw]">
        <div className="self-center flex flex-col sm:flex-row justify-between sm:space-x-5 max-sm:space-y-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-neutral-100 flex-1 sm:max-w-[264px] xl:max-w-[375px] space-y-[2vw]"
            >
              <Image
                src={article.imgSrc}
                alt={article.alt}
                className="pb-5 sm:h-[280px] sm:w-[270px] xl:h-[382px] xl:w-[375px]"
              />
              <p className="text-lg xl:text-2xl font-semibold px-3">
                {article.title}
              </p>
              <p className="text-sm xl:text-lg font-semibold px-3">
                POSTED BY{" "}
                <span className=" text-neutral-400">
                  ADMIN FEBRUARY 19, 2019
                </span>
              </p>
              <p className="text-sm xl:text-xl pb-10 xl:pb-20 px-3">
                {article.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex self-center space-x-3">
          <div className="bg-black w-[58px] h-[13px]"></div>
          <div className="bg-neutral-200 w-[58px] h-[13px]"></div>
          <div className="bg-neutral-200 w-[58px] h-[13px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
