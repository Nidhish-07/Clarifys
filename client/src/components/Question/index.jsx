import React from "react";
import Sidebar from "../Sidebar";
import Question from "./Question";

const index = () => {
  return (
    <div className="min-w-fit flex min-h-[85vh] ">
      <div className="flex w-full justify-center">
        <Sidebar />
        <Question />
      </div>
    </div>
  );
};

export default index;
