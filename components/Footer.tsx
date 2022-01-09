import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-around items-center space-y-6 p-4 lg:px-36 footer_background">
      <p className="font-heebo font-bold hover:animate-pulse hover:underline text-3xl">
        LET'S WORK TOGETHER
      </p>

      <div className="flex space-x-8">
        <div className="flex flex-col bg-white p-2 px-8 shadow-lg">
          <p className="font-Heebo font-bold text-lg text-[#1B1F24] pb-1">
            Contact
          </p>
          <p className="font-heebo text-xs text-[#1B1F24]">
            <a href="mailto:iydn.work@outlook.com">IYDN.WORK@OUTLOOK.COM</a>
          </p>
          <p className="font-heebo text-xs text-[#1B1F24]">+91-9015404864</p>
        </div>

        <div className="flex flex-col p-2">
          <p className="font-Heebo font-bold text-lg pb-1">Follow</p>
          <p className="font-heebo text-xs hover:underline">
            <a href="https://linkedin.com/Yashodhan-Sharma/" className="">
              LinkedIn
            </a>
          </p>
          <p className="font-heebo text-xs hover:underline">
            <a href="https://github.com/iYashodhan/" className="">
              Github
            </a>
          </p>
          <p className="font-heebo text-xs hover:underline">
            <a href="https://www.reddit.com/user/iYashodhan" className="">
              Reddit
            </a>
          </p>
        </div>
      </div>

      <p className="font-Heebo text-sm">❤️ with ©️iYashodhan</p>
    </div>
  );
}

export default Footer;
