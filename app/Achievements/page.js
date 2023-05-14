import Image from "next/image";

const Achievements = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-16 -mx-6 sm:-mx-16 flex flex-col justify-center">
      <div className="mt-[40vw] sm:mt-36">
        <div className=" text-center my-[10vh]">
          <p className=" text-3xl xl:text-[45px] font-bold">Our Achievements</p>
          <p className=" mt-3 xl:text-xl max-w-[586px] justify-center m-auto">
            Buildz is a base for future business project which includes all
            aspects and makes a forecast about your project’s payback.
          </p>
        </div>
        <div className="flex max-[449px]:flex-col max-sm:space-y-10  sm:justify-evenly mb-[10vw]">
          {[
            { amount: "600", title: "Awards won" },
            { amount: "567", title: "satisfied clients" },
            { amount: "670", title: "startup growth" },
            { amount: "500", title: "average prices" },
          ].map((item, index) => (
            <div key={index} className="">
              <p className=" text-3xl xl:text-[40px] font-bold text-center xl:leading-tight">
                {item.amount}
              </p>
              <p className=" uppercase text-center font-semibold whitespace-nowrap xl:text-xl xl:leading-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Achievements;
