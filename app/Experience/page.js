import React from "react";

const Experience = () => {
  return (
    <div className=" bg-black text-white flex flex-col py-16 sm:py-[8vw] justify-center items-center space-y-10 px-6 sm:px-16 -mx-6 sm:-mx-16">
      <p className=" max-sm:text-[35px] text-3xl xl:text-[45px] font-bold text-center">
        Worried About Experience?
      </p>
      <p className="max-sm:text-xl xl:text-[27px] text-center">
        We have over fifteen years of successful experience in financial sphere
        in the US.
      </p>
      <button className="text-black hover:invert transition-all ease-linear duration-500 w-fit max-sm:text-xl text-sm xl:text-xl font-semibold bg-white max-sm:py-4 py-2 px-10 uppercase rounded-[5px]">
        get started
      </button>
    </div>
  );
};

export default Experience;
