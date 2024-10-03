import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { Button } from "../ui/button";

function ListenPodcast() {
  return (
    <div className="w-[90%] py-10 mx-auto grid grid-cols-3 gap-5">
      <div className="grid gap-5">
        <h3 className="text-4xl font-bold">Read the blog</h3>
        <div className="flex gap-2">
          <Image
            src={"/images/mountain.png"}
            alt="mountain"
            height={1020}
            width={1080}
            className="h-40 w-40"
          />
          <div className="grid">
            <h5 className="text-2xl font-semibold">The magical dolomites</h5>
            <p className="text-sm text-gray-400">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text{" "}
            </p>
            <Button size={"sm"} variant={"link"} className="text-base">
              Read more
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/images/mountain.png"}
            alt="mountain"
            height={1020}
            width={1080}
            className="h-40 w-40"
          />
          <div className="grid">
            <h5 className="text-2xl font-semibold">The magical dolomites</h5>
            <p className="text-sm text-gray-400">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text{" "}
            </p>
            <Button size={"sm"} variant={"link"} className="text-base">
              Read more
            </Button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div
          style={{
            backgroundImage: `url('/images/circle.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-full relative flex items-center justify-center w-full"
        >
          <Image
            src={"/images/girl.png"}
            alt="mountain"
            height={1020}
            width={1080}
            className="h-96 w-fit absolute -top-20"
          />
          <div className="bg-[#060607]/70 absolute px-5 py-3 bottom-5 backdrop-blur-2xl rounded-lg w-[90%] mx-auto">
            <div className="flex justify-between items-center">
              <h5 className="text-xl font-semibold">Travel Podcast</h5>
              <MdOutlineSpeaker size={20} />
            </div>
            <span className="text-sm text-gray-400">Episode 13th</span>
            <div className="flex gap-3 items-center">
              <div>
                <Button
                  size={"icon"}
                  variant={"gradient"}
                  className="h-12 w-12"
                >
                  <FaPlay size={20} />
                </Button>
              </div>
              <Image
                src={"/images/audio.png"}
                alt="mountain"
                height={1020}
                width={1080}
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-5">
        <h3 className="text-4xl font-bold">Read the blog</h3>
        <div className="flex gap-2">
          <Image
            src={"/images/mountain.png"}
            alt="mountain"
            height={1020}
            width={1080}
            className="h-40 w-40"
          />
          <div className="grid">
            <h5 className="text-2xl font-semibold">The magical dolomites</h5>
            <p className="text-sm text-gray-400">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text{" "}
            </p>
            <Button size={"sm"} variant={"link"} className="text-base">
              Read more
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/images/mountain.png"}
            alt="mountain"
            height={1020}
            width={1080}
            className="h-40 w-40"
          />
          <div className="grid">
            <h5 className="text-2xl font-semibold">The magical dolomites</h5>
            <p className="text-sm text-gray-400">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text{" "}
            </p>
            <Button size={"sm"} variant={"link"} className="text-base">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListenPodcast;
