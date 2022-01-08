import React from "react";
import Image from "next/image";

function SectionOne() {
  return (
    <div className="flex items-center justify-around space-x-24 p-12">
      <div className="flex flex-col space-y-4">
        <p className="font-Heebo text-xl min-w-sm">HI, I'M YASHODHAN.</p>
        <p className="font-Heebo text-5xl min-w-md">Full Stack Developer</p>
        <p className="font-heebo text-sm max-w-md min-w-sm">
          I'm Sophomore{" "}
          <a href="https://nith.ac.in/" className="hover:underline">
            National Institute of technology, Hamirpur
          </a>
          . Working as a Full Stack Developer at{" "}
          <a href="https://lurnweb.com/" className="hover:underline">
            Lurnweb,
          </a>{" "}
          I have managed to learn and experience alot. I'm passionate and love
          to learn about Web, blockchain, finance and music.
        </p>

        <div className="flex space-x-2 items-center pt-12">
          <button className="font-Heebo font-bold bg-white text-xs text-[#1B1F24] p-1 px-6 outline-none shadow-md">
            <a
              href="https://github.com/iYashodhan/"
              className="hover:animate-pulse"
            >
              CHECK MY GIT
            </a>
          </button>

          <button className="font-Heebo font-bold text-xs text-white p-1 px-6 outline-none">
            <a
              href="mailto:iydn.work@outlook.com"
              className="hover:animate-pulse"
            >
              EMAIL ME
            </a>
          </button>
        </div>
      </div>

      <div className="">
        <Image src="/myimg.jpg" height={480} width={270} />
      </div>
    </div>
  );
}

export default SectionOne;
