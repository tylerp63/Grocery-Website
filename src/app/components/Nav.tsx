import React from "react";

const Nav = () => {
  return (
    <div>
      <ul className="flex flex-row gap-[3rem] justify-center mt-[1rem] items-center">
        <li className="max-w-max"></li>
        <li className="text-black hover:underline">Home</li>
        <li className="text-black hover:underline">Menu</li>
        <li className="text-black hover:underline">Order now</li>
      </ul>
    </div>
  );
};

export default Nav;
