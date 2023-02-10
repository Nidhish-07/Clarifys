import React from "react";
import Sidebar from "../Sidebar";
import Question from "./Question";
import Questions from "./Questions";

const index = () => {
  return (
    <div className="min-w-fit flex min-h-[85vh] ">
      <div className="flex w-full justify-center">
        <Sidebar />
        <Questions />
      </div>
    </div>
  );
};

export default index;
