import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="bg-transparent w-[90%] z-10 fixed ml-16 mx-auto top-0 flex justify-between items-center py-4">
      {/* <h3 className="text-2xl font-extrabold">Tourflips</h3> */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/icon.png"
          alt="logo"
          className="h-9 w-20"
          height={1020}
          width={1080}
        />
        <Image
          src="/images/name.png"
          alt="logo"
          className="h-6 w-28"
          height={1020}
          width={1080}
        />
      </div>

      <ul className="flex text-lg items-center gap-10">
        <li className="text-[#96FF9E]">Home</li>
        <li>Flights</li>
        <li>My Trips</li>
        <li>Check-In</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
