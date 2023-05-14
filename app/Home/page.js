import Image from "next/image";
import bro from "../../assets/images/bro.png";
import cashIcon from "../../assets/icons/cash.png";
import ideaIcon from "../../assets/icons/idea.png";
import marketAnalysis from "../../assets/icons/marketAnalysis.png";
import icons from "@/assets/icons";

const cards = [
  {
    icon: ideaIcon,
    alt: icons.ideaIcon,
    title: "Branding",
    text: "Regular Business Law Assistance service includes monitoring the legal sphere of your business.",
  },
  {
    icon: cashIcon,
    alt: icons.cashIcon,
    title: "Finance",
    text: "We provide businesses with all financial services including consultations.",
  },
  {
    icon: marketAnalysis,
    alt: icons.marketAnalysis,
    title: "Marketing",
    text: "Good marketing plan is crucial for businessmen who want to develop their businesses.",
  },
];

const Home = () => {
  return (
    <div id="home" className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:h-[75vh] xl:h-screen items-center justify-between">
        <div className="flex-1 sm:pr-36 mt-[40vw] sm:-mt-20 flex flex-col space-y-8">
          <p className=" text-[35px] sm:text-3xl xl:text-[45px] max-w-[315px] min-[450px]:max-w-none xl:leading-tight font-medium capitalize">
            Making your business ideas{" "}
            <span className=" font-[1000]">come true</span>
          </p>
          <p className=" text-lg xl:text-[27px] xl:leading-tight font-extralight">
            We provide businesses with all financial services including
            financial analysis of the enterprise.
          </p>
          <button className="text-white w-fit text-xl font-semibold bg-black py-2 px-10 uppercase rounded-[5px]">
            Read more
          </button>
        </div>
        <div className="flex-1 sm:-mt-24">
          <Image
            src={bro}
            alt="bro.image"
            className=" m-auto w-[350px] sm:w-full h-[480px] "
          />
        </div>
      </div>
      <div className="max-sm:last:z-50 max-sm:mt-[10vw] max-sm:-mb-[40vw] flex flex-col items-center sm:flex-row sm:justify-between sm:space-x-10 max-[440px]:space-y-10 xl:-mt-[5vw] ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-pro min-w-[350px] min-h-[300px] sm:-mb-36 max-w-[350px] flex-1 flex flex-col justify-center items-center space-y-7 py-10 sm:py-[4vw] px-4 rounded-md text-black border-2 border-black border-opacity-10"
          >
            <Image src={card.icon} alt={card.alt} width={24} height={24} />
            <p className="text-center max-[449px]:text-xl lg:text-xl font-semibold uppercase">
              {card.title}
            </p>
            <p className="text-center max-[449px]:text-lg text-xs lg:text-lg font-extralight">
              {" "}
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
