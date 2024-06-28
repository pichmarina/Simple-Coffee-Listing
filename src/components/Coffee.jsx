import React from "react";
import cafe from "../assets/bg-cafe.jpg";
import Collection from "./Collection";

const Coffee = () => {
  return (
    <div className="w-full lg:h-[1300px] md:h-[1800px] h-[2800px] bg-black relative flex items-center justify-center">
      <img
        src={cafe}
        alt="cafe-img"
        className="absolute top-0 w-full h-[350px] lg:h-[500px] md:h-[400px] sm:h-[300px] object-cover"
      />
      <Collection />
    </div>
  );
};

export default Coffee;
