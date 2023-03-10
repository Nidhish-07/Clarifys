import React from "react";
import Logo from "../assets/icons/football_L.png";
import { SlMagnifier } from "react-icons/sl";
import { TbStack3 } from "react-icons/tb";
import { AiOutlineInbox } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="border-2 border-zinc-400 min-h-[48px] flex sticky z-50 top-0">
      <div className="flex w-full items-center justify-around bg-slate-200 shadow-xl">
        <div className="mt-0 ml-2 flex items-center ">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="logo"
              className="h-12 rounded-full object-contain p-0 cursor-pointer bg-white mx-3"
            />
          </Link>
          <h3 className="font-medium text-sm cursor-pointer my-0 mx-2 hover:bg-gray-400  hover:p-2 hover:rounded-lg">
            Products
          </h3>
        </div>
        <div className=" flex items-center ">
          <div className="flex p-2 mr-2 bg-white rounded border-2 border-solid border-gray-300">
            <SlMagnifier color="#ccc" />
            <input
              type="text"
              placeholder="Search Questions"
              className="border-none w-full ml-1 outline-none "
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center px-2 py-1">
            <IoPersonCircleSharp
              color="#ccc"
              className="cursor-pointer hover:bg-black rounded-full p-[0.5px]"
              size={32}
              onClick={() => {
                auth.signOut();
                navigate("/auth");
              }}
              src={user?.photoURL}
            />
            <Link to={"/auth"}>
              <button className="p-2 text-white bg-blue-500 hover:bg-blue-700 rounded h-8 flex items-center">Login / SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
