import React from "react";
import Mainpage from "./Mainpage";
import Sidebar from "./Sidebar";
import axios from "axios";

const Homepage = () => {
  const [questions, setQuestions] = React.useState([]);

  const getAllQuestions = async () => {
    await axios
      .get("http://localhost:3000/api/question")
      .then((res) => {
        console.log(res);
        setQuestions(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div className="flex h-[100vh] min-h-[85vh] min-w-fit">
      <div className="flex w-full justify-center">
        <Sidebar />
        <Mainpage questions={questions} />
      </div>
    </div>
  );
};

export default Homepage;
