"use client";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaChevronRight, FaThumbsUp } from "react-icons/fa6";
import { Button } from "../ui/button";
import RotatingText from "../ui/RotatingText";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[100vh] w-full"
    >
      <div className="w-[80%] mx-auto h-full items-center grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-10">
          <h1 className="text-7xl font-bold">
            Experience the incredible Aurora Borealis
          </h1>
          <Button variant={"gradient"}>Book Now</Button>
        </div>
        <div className="flex relative items-center justify-center">
          <div className="absolute -left-5 -top-5">
            <RotatingText text={"Visit Norway Today Visit Norway Today"} />
          </div>
          <div className="bg-[#060607]/70 flex flex-col gap-2 h-80 w-60 items-center p-6 rounded-xl backdrop-blur-2xl -rotate-12">
            <p>from</p>
            <div className="h-[2px] bg-gray-400 w-[80px] my-3" />
            <h2 className="text-7xl font-bold">€45</h2>
            <p>Fly to Norway</p>
            <p>today</p>
            <Button size={"icon"} variant={"gradient"} className="h-10 w-10">
              <FaChevronRight />
            </Button>
          </div>
          <div className="bg-[#060607]/70 flex flex-col h-80 w-60 gap-3 items-center p-6 rounded-xl backdrop-blur-2xl mb-[30%] rotate-12 text-center">
            <div className="relative flex justify-center mb-4">
              <Image
                src={"/images/girl2.png"}
                alt="mountain"
                height={1020}
                width={1080}
                className="h-20 w-20"
              />
              <div className="absolute -bottom-3 flex items-center justify-center bg-gradient-to-r from-[#68FFD1] to-[#C1FF6D] rounded-full h-10 w-10">
                <FaThumbsUp className="text-black" size={22} />
              </div>
            </div>
            <p className="text-lg">"Best experience of my life"</p>
            <p className="text-sm text-gray-400">Ana Handerson</p>
          </div>
        </div>
      </div>
      <div className=" w-full absolute bottom-0 bg-[#060607]/70">
        <div className="flex w-[90%] mx-auto items-center gap-4 py-7">
          <div className="bg-[#16181C] w-full py-2.5 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">FROM</span>
            <p className="text-lg">Lisbon</p>
          </div>
          <div className="bg-[#16181C] w-full py-2.5 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">TO</span>
            <p className="text-lg">Tromso</p>
          </div>
          <div className="bg-[#16181C] w-full py-2.5 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">DEPART</span>
            <p className="text-lg">May 13, 2024</p>
          </div>
          <div className="bg-[#16181C] w-full py-2.5 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">RETURN</span>
            <p className="text-lg">May 24, 2024</p>
          </div>
          <div className="bg-[#16181C] w-full py-2.5 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">PASSENGERS</span>
            <p className="text-lg">1 Adult</p>
          </div>
          <div>
            <Button size={"icon"} variant={"gradient"}>
              <CiSearch size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
