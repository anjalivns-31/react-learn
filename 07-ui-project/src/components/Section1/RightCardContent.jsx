import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0  left-0 h-full w-full p-6 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-14 w-12 flex items-center justify-center">
        {props.id+1}
      </h2>
      <div>
        <p className="text-sm leading-normal text-white mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
