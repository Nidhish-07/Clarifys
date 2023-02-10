import React from "react";
import { FaFilter } from "react-icons/fa";
import Questions from "./Questions";
import { Link } from "react-router-dom";

const Mainpage = (props) => {
  return (
    <div className="flex py-7 px-2 flex-[0.75] flex-col md:flex-[0.6]">
      <div className="flex flex-col w-full ">
        <div className="flex w-full justify-between items-center mb-2">
          <h2 className="font-normal text-2xl text-[rgba(0,0,0,0.8)]">
            All questions
          </h2>
          <Link to={"/ask-question"}>
            <button className="p-2 bg-blue-600 text-white rounded cursor-pointer">
              Ask Question
            </button>
          </Link>
        </div>
        <div className="flex items-center text-[1.1rem] text-[rgba(0,0,0,0.8)] justify-between pt-0 px-0 pb-2 mt-2">
          <p> Questions: {props.questions && props.questions.length}</p>
          <div className="flex items-center">
            <div className="flex border border-solid border-stone-400 mr-5 rounded items-center gap-1 p-1">
              <div className="p-1">
                <Link>Newest</Link>
              </div>
              <div>
                <Link>Active</Link>
              </div>
              <div>
                <Link>More</Link>
              </div>
            </div>
            <div className="flex p-1 border border-solid rounded text-sm items-center cursor-pointer bg-yellow-200 border-yellow-400">
              <FaFilter />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          {props.questions.map((question, index) => (
            <div className="flex flex-col  py-4 px-0 border-b border-b-gray-400">
              <Questions key={index} question={question} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
