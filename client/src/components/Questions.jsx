import React from "react";
import { Link } from "react-router-dom";

import { IoPersonCircleSharp } from "react-icons/io5";

const Questions = () => {
  return (
    <div className="flex w-full py-5 px-0 border-b-2 border-b-solid ">
      <div className="flex justify-between w-full ">
        <div className="flex mr-7 ">
          <div className="flex flex-col items-center text-[rgba(0,0,0,0.7)] text-sm ">
            <div className="flex flex-col items-center mb-2">
              <p className="text-lg">0</p>
              <span>votes</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <p className="text-lg">0</p>
              <span>Answers</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <small>Views</small>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <Link className="text-[1.1rem] text-blue-500 mb-2 hover:text-blue-800">
            Bindings not found in Swc
          </Link>
          <div className="w-[90%]">
            <div>
              Delete the node_modules folder and reinstall using npm install
            </div>
          </div>
          <div className="flex ">
            <span className="my-2 mx-1 py-1 px-2 bg-blue-100 rounded">
              ReactJs
            </span>
            <span className="my-2 mx-1 py-1 px-2 bg-blue-100 rounded">Swc</span>
            <span className="my-2 mx-1 py-1 px-2 bg-blue-100 rounded">npm</span>
          </div>
          <div className="flex flex-col ml-auto ">
            <div className="flex items-center">
              <IoPersonCircleSharp size={36} />
              <p className="ml-1 text-sm text-teal-500">John doe</p>
            </div>
            <small className="text-[rgba(0,0,0,0.7)] mb-1">timestamp</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
