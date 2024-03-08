import Image from "next/image";
import React from "react";
import { BadgeCheck } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProfileInfo = () => {
  return (
    <div className="bg-[#21242D] w-1/2 rounded-xl">
      <img
        src="https://img.freepik.com/free-vector/colorful-geometric-shape-mosaic-background_52683-16983.jpg?t=st=1709909150~exp=1709912750~hmac=ed4d1d13f145c5040da41aec860e0bda64b0a30dddbe40cae715ef27a4b10ba6&w=996"
        alt="banner-profile"
        className="w-full h-[200px] object-cover rounded-t-xl"
      />
      <div className="relative w-full h-fit flex flex-col items-center">
        <img
          src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1709909228~exp=1709912828~hmac=f4fe6fbb7985104e78cee8c7b72c72be30a8f8b9b0384d5aeb5a09ca8e903ce0&w=996"
          alt="profile-picture"
          className="w-[150px] h-[150px] rounded-full absolute top-[-100px] border-8 border-[#21242D] object-cover"
        />
        <div className="w-full mt-14 text-center h-fit">
          <p className="text-[20px] font-semibold flex gap-2 items-center justify-center">
            Jovan Panji Pratama (tamacode){" "}
            <BadgeCheck className="text-blue-500" />
          </p>
          <p className="text-[14px]">Indonesia</p>
          <div className="flex justify-center items-center gap-2 my-2">
            <FaFacebook className="text-[25px] cursor-pointer" />
            <RiInstagramFill className="text-[28px] cursor-pointer" />
            <FaLinkedin className="text-[25px] cursor-pointer" />
            <FaGithub className="text-[25px] cursor-pointer" />
          </div>
          <div className="border-t border-gray-300 my-5"></div>
        </div>
      </div>
      <blockquote className="text-[14px] text-center">
        <p>
          Musuh terbesar dari pengetahuan bukanlah ketidakpedulian, tetapi ilusi
          mengenai pengetahuan.
        </p>
        <cite className="text-semibold">~ tamacode ~</cite>
      </blockquote>
    </div>
  );
};

export default ProfileInfo;
