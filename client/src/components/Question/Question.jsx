import React from "react";
import { Link } from "react-router-dom";
import { BiUpvote, BiDownvote, BiHistory } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { selectUser } from "../../store/userSlice";
import { useSelector } from "react-redux";

const Question = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);

  const [questionData, setQuestionData] = useState([]);
  const [comment, setComment] = useState("");
  const [answer, setAnswer] = useState("");

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");
  const user = useSelector(selectUser);

  const getQuestionData = async () => {
    await axios
      .get(`http://localhost:3000/api/question/${id}`)
      .then((res) => {
        // console.log(res.data[0]);
        setQuestionData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getQuestionData();
  }, [id]);

  const answerHandler = async () => {
    await axios
      .get(`http://localhost:3000/api/question/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  };

  const commentHandler = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        comment: comment,
        user: user,
      };

      await axios
        .post(`http://localhost:3000/api/comment/${id}`, body)
        .then((res) => {
          setComment("");
          setShowCommentBox(false);
          answerHandler();
          console.log(res.data);
        });
    }
  };

  const submitHandler = async () => {
    const body = {
      question_id: id,
      answer: answer,
      user: user,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("http://localhost:3000/api/answer", body, config)
      .then(() => {
        alert("Answer added successfully");
        setAnswer("");
        answerHandler();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex py-7 px-2 flex-[0.75] flex-col md:flex-[0.6]">
      <div className="flex flex-col w-full">
        <div className="flex w-full items-center justify-between mb-2">
          <h1 className="font-semibold text-3xl ">{questionData?.title}</h1>
          <Link to={"/add-question"}>
            <button className="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded">
              Ask question
            </button>
          </Link>
        </div>
        <div className="flex items-center text-[1.1rem] text-[rgba(0,0,0,0.8)] justify-between px-0 pt-0 pb-2 border border-solid border-stone-500 mb-2">
          <div className="flex items-center text-sm">
            <p className="text-[rgba(0,0,0,0.4)] my-0 mx-2">
              {new Date(questionData?.createdAt).toLocaleString()}
            </p>
            <p className="text-[rgba(0,0,0,0.4)] my-0 mx-2">
              active
              <span className="text-[rgba(0,0,0,0.8)]  my-0 mx-1">today</span>
            </p>
            <p className="text-[rgba(0,0,0,0.4)] my-0 mx-2">
              Viewed
              <span className="text-[rgba(0,0,0,0.8)]  my-0 mx-1">
                39 times
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-full py-5 px-0 border-b border-b-solid border-b-stone-400 ">
          <div className="flex flex-col justify-between w-full">
            <div className="flex mr-7">
              <div className="flex items-center text-sm text-[rgba(0,0,0,0.7)] ">
                <p>
                  <BiUpvote color="#ccc" size={26} />
                </p>
                <p>0</p>
                <p>
                  <BiDownvote color="#ccc" size={26} />
                </p>
                <BsFillBookmarkFill color="#ccc" size={26} />
                <BiHistory color="#ccc" size={26} />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-[0.9rem] text-[rgba(0,0,0,0.7)] mb-2 font-medium">
                {parse(String(questionData?.body))}
              </p>
              <div className="flex flex-col ml-auto">
                <small className="text-[rgba(0,0,0,0.5)] mb-1">
                  {new Date(questionData?.createdAt).toLocaleString()}
                </small>
                <div className="flex items-center">
                  <IoPersonCircleSharp />
                  <p className="text-sm ml-1 text-stone">
                    {questionData?.user?.displayName
                      ? questionData?.user?.displayName
                      : String(questionData?.user?.email).split("@")[0]}
                  </p>
                </div>
              </div>
              <div className="my-2 mx-0 w-[90%] ml-auto flex-col">
                <div className="flex flex-col text-[0.9rem] py-2 px-0 border-y border-y-solid border-y-gray-200">
                  {questionData?.comments &&
                    questionData?.comments.map((comment, index) => {
                      return (
                        <p className="my-2 mx-0" key={index}>
                          {comment.comment}
                          <span className="p-1 bg-blue-200 text-white rounded-sm">
                            jane doe
                          </span>
                          <span className="p-1 bg-blue-200 text-white rounded-sm">
                            {new Date(questionData?.comment?.createdAt).toLocaleString()}
                          </span>
                        </p>
                      );
                    })}
                </div>
                <p
                  onClick={() => setShowCommentBox(!showCommentBox)}
                  className="-ml-7 mt-5 text-sm cursor-pointer text-[rgba(0,0,0,0.4)] hover:text-blue-700"
                >
                  Add comment
                </p>
                {showCommentBox && (
                  <div className="flex flex-col my-2 mx-0 text-[0.9rem]">
                    <textarea
                      placeholder="Add your comment"
                      rows={5}
                      value={comment}
                      onChange={(e)=>setComment(e.target.value)}
                      className="my-1 mx-0 p-2 border border-[rgba(0,0,0,0.2)] rounded outline-none w-full resize-none"
                    ></textarea>
                    <button
                      className="w-full bg-blue-500 hover:bg-blue-700 p-2 rounded text-white"
                      onClick={commentHandler}
                    >
                      Add Comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-5 px-0 border-b border-b-solid border-b-stone-400 flex-col">
          <p className="mb-5 text-[1.3rem] font-light">
            Answers: {questionData?.answerDetails?.length}
          </p>
          {questionData?.answerDetails?.map((question, index) => {
            return (
              <div
                className="border-b border-b-solid border-b-stone-400 flex flex-col justify-between w-full"
                key={index}
              >
                <div className="flex mr-7 fle">
                  <div className="flex items-center text-[rgba(0,0,0,0.9)] text-sm">
                    <p>
                      <BiUpvote color="#ccc" size={26} />
                    </p>
                    <p>0</p>
                    <p>
                      <BiDownvote color="#ccc" size={26} />
                    </p>
                    <BsFillBookmarkFill color="#ccc" size={26} />
                    <BiHistory color="#ccc" size={26} />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[0.9rem]  mb-2">
                    {parse(String(question?.answer))}
                  </p>
                  <div className="flex flex-col ml-auto">
                    <small className="text-[rgba(0,0,0,0.5)] mb-1">
                      {new Date(question?.createdAt).toLocaleString()}
                    </small>
                    <div className="flex items-center">
                      <IoPersonCircleSharp />
                      <p className="ml-1 text-sm text-zinc-400">
                        {question?.user?.displayName
                          ? question?.user?.displayName
                          : String(question?.user?.email).split("@")[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-2xl my-2 mx-0 font-normal">Your answer: </h3>
        <ReactQuill
          theme="snow"
          className="h-48"
          value={answer}
          onChange={(value) => setAnswer(value)}
        />
      </div>
      <button
        className="p-2 w-full bg-blue-500 hover:bg-blue-700 text-white cursor-pointer mt-11"
        onClick={submitHandler}
      >
        Post
      </button>
    </div>
  );
};

export default Question;
