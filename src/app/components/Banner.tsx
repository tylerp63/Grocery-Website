import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-center align-center">
      <Image src="/logo.jpg" width={250} height={146} alt="logo" />
    </div>
  );
};

export default Banner;
