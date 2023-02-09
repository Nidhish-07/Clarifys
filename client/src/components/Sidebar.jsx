import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";
import { MdPublic, MdOutlineStarPurple500 } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex pt-5 pr-0 pl-2 pb-2 h-full flex-[0.5] max-w-[200px] border-r-2 border-r-stone-400">
      <div className="my-2 mx-0 flex w-full ">
        <div className="flex flex-col w-full">
          <div className=" flex flex-col my-2 mx-0 text-sm">
            <Link>Home</Link>
          </div>
          <div className=" flex flex-col my-2 mx-0 text-sm">
            <Link> Public</Link>
            <div>
              <div>
                <MdPublic />
                <Link>Question</Link>
              </div>
              <div className="flex flex-col text-[rgba(0,0,0,0.5)]">
                <p className="text-[rgba(0,0,0,0.5)] my-1 mx-0 hover:text-black">Tags</p>
                <p className="text-[rgba(0,0,0,0.5)] my-1 mx-0 hover:text-black">Users</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col my-2 mx-0 text-sm">
            <p className="text-[rgba(0,0,0,0.5)]">Collectives</p>
            <div>
              <div>
                <MdOutlineStarPurple500 />
                <Link>Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
