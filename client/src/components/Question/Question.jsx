import React from "react";
import { Link } from "react-router-dom";
import { BiUpvote, BiDownvote, BiHistory } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Question = () => {
  const [showCommentBox, setShowCommentBox] = React.useState(false);
  return (
    <div className="flex py-7 px-2 flex-[0.75] flex-col md:flex-[0.6]">
      <div className="flex flex-col w-full">
        <div className="flex w-full items-center justify-between mb-2">
          <h1>Question Title</h1>
          <Link to={"/add-question"}>
            <button className="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded">
              Ask question
            </button>
          </Link>
        </div>
        <div className="flex items-center text-[1.1rem] text-[rgba(0,0,0,0.8)] justify-between px-0 pt-0 pb-2 border border-solid border-stone-500 mb-2">
          <div className="flex items-center text-sm">
            <p className="text-[rgba(0,0,0,0.4)] my-0 mx-2">timestamp</p>
            <p className="text-[rgba(0,0,0,0.4)] my-0 mx-2">
              active{" "}
              <span className="text-[rgba(0,0,0,0.8)]  my-0 mx-1">today</span>
            </p>
            <p className="text-[rgba(0,0,0,0.4)] my-0 mx-2">
              Viewed{" "}
              <span className="text-[rgba(0,0,0,0.8)]  my-0 mx-1">
                39 times
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-full py-5 px-0 border-b border-b-solid border-b-stone-400 ">
          <div className="flex flex-col justify-between w-full">
            <div className="flex mr-7">
              <div className="flex flex-col items-center text-sm text-[rgba(0,0,0,0.7)] ">
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
              <p className="text-[0.9rem] text-[rgba(0,0,0,0.7)] mb-2">
                question body
              </p>
              <div className="flex flex-col ml-auto">
                <small className="text-[rgba(0,0,0,0.5)] mb-1">
                  asked timestamp{" "}
                </small>
                <div className="flex items-center">
                  <IoPersonCircleSharp />
                  <p className="text-sm ml-1 text-stone">john doe</p>
                </div>
              </div>
              <div className="my-2 mx-0 w-[90%] ml-auto flex-col">
                <div className="flex flex-col text-[0.9rem] py-2 px-0 border-y border-y-solid border-y-gray-200">
                  <p className="my-2 mx-0">
                    This is comment -{" "}
                    <span className="p-1 bg-blue-200 text-white rounded-sm">
                      jane doe
                    </span>
                    <span className="p-1 bg-blue-200 text-white rounded-sm">
                      timestamp
                    </span>
                  </p>
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
                      className="my-1 mx-0 p-2 border border-[rgba(0,0,0,0.2)] rounded outline-none w-full resize-none"
                    ></textarea>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 p-2 rounded text-white">
                      Add Comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-5 px-0 border-b border-b-solid border-b-stone-400 flex-col">
          <p className="mb-5 text-[1.3rem] font-light">No of answers:</p>
          <div className="border-b border-b-solid border-b-stone-400 flex flex-col justify-between w-full">
            <div className="flex mr-7">
              <div className="flex flex-col items-center text-[rgba(0,0,0,0.7)] text-sm">
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
              <p className="text-[0.9rem] text-[rgba(0,0,0,0.7)] mb-2">
                question body
              </p>
              <div className="flex flex-col ml-auto">
                <small className="text-[rgba(0,0,0,0.5)] mb-1">
                  timestamp asked
                </small>
                <div className="flex items-center">
                  <IoPersonCircleSharp />
                  <p className="ml-1 text-sm text-zinc-400">john doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl my-2 mx-0 font-normal">Your answer: </h3>
        <ReactQuill theme="snow" className="h-48" />
      </div>
      <button className="p-2 w-full bg-blue-500 hover:bg-blue-700 text-white cursor-pointer mt-11">
        Post
      </button>
    </div>
  );
};

export default Question;
