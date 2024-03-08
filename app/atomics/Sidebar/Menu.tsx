"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Capitalize } from "@/lib/utils";
import { FiHome } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { RiAwardLine } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsGear } from "react-icons/bs";


type MenuProps = {
  menu: string;
  PathnameRoute: string;
};

const Menu = ({ menu, PathnameRoute }: MenuProps) => {
  const Pathname = usePathname();

  let iconComponent;

  switch (menu) {
    case "home":
      iconComponent = (
        <FiHome
          className={`${
            Pathname === "/" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    case "discover":
      iconComponent = (
        <FaRegCompass
          className={`${
            Pathname === "/discover" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    case "awards":
      iconComponent = (
        <RiAwardLine
          className={`${
            Pathname === "/awards" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    case "celebrities":
      iconComponent = (
        <MdOutlineVerified
          className={`${
            Pathname === "/celebrities" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    case "top rated":
      iconComponent = (
        <FaRegStar
          className={`${
            Pathname === "/top-rated" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    case "downloaded":
      iconComponent = (
        <RiDownloadCloud2Line
          className={`${
            Pathname === "/downloaded" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    case "playlist":
      iconComponent = (
        <IoMdHeartEmpty
          className={`${
            Pathname === "/playlist" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    case "setting":
      iconComponent = (
        <BsGear
          className={`${
            Pathname === "/setting" ? "text-PrimaryYellow" : "text-white"
          } text-[18px]`}
        />
      );
      break;
    default:
      iconComponent = null;
  }

  return (
    <div
      className={`${
        Pathname === PathnameRoute ? "border-PrimaryYellow border-r-2" : ""
      } flex items-center gap-5  cursor-pointer`}
    >
      {iconComponent}
      <Link
        href={`${PathnameRoute}`}
        className={`${
          Pathname === PathnameRoute ? "text-PrimaryYellow" : "text-white"
        } text-[15px]`}
        key={PathnameRoute}
      >
        {Capitalize(menu)}
      </Link>
    </div>
  );
};

export default Menu;
