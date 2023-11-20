import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex justify-center gap-2 mt-[3rem]">
      <div>
        <Image src="/poboy1.jpg" width={300} height={400} alt="poboy1" />
      </div>
      <div>
        <Image src="/fries.jpg" width={300} height={400} alt="fries" />
      </div>
      <div>
        <Image src="/fries2.jpg" width={300} height={200} alt="fries2" />
      </div>
      <div>
        <Image src="/shrimp.jpg" width={300} height={200} alt="shrimp" />
      </div>
    </div>
  );
};

export default Images;
