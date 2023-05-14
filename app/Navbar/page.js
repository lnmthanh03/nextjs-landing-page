"use client";
import Image from "next/image";
import { Open_Sans, Montserrat } from "next/font/google";

import Logo from "../../assets/images/logo.png";
import Link from "next/link";
import icons from "@/assets/icons";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [activeClassname, setActiveClassname] = useState(
    "uppercase whitespace-nowrap xl:text-xl"
  );

  console.log(activeMenu);
  return (
    <div className={montserrat}>
      <div className="w-full flex items-center justify-between">
        <div className="flex-1">
          <Image className="" src={Logo} alt="Buildz logo" />
        </div>
        <div className="hidden sm:flex justify-evenly ml-10 space-x-2 flex-[2] w-full">
          {["home", "pricing", "about us", "services", "blog", "contact"].map(
            (item, index) => (
              <Link key={index} href={`#${item}`}>
                <button
                  className={
                    activeMenu === item
                      ? `${activeClassname} + text-neutral-400`
                      : activeClassname
                  }
                  onClick={() => setActiveMenu(item)}
                >
                  {item}
                </button>
              </Link>
            )
          )}
        </div>
        <div className="sm:hidden">
          <Image src={icons.menuIcon} alt="menu icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
