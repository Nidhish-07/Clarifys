import React from "react";
import Mainpage from "./Mainpage";
import Sidebar from "./Sidebar";

const Homepage = () => {
  return (
    <div className="flex h-[100vh] min-h-[85vh] min-w-fit">
      <div className="flex w-full justify-center">
        <Sidebar />
        <Mainpage />
      </div>
    </div>
  );
};

export default Homepage;
