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
    <div>
      <div className="">
        <div>
          <h1>Question Title</h1>
          <Link to={"/add-question"}>
            <button>Ask question</button>
          </Link>
        </div>
        <div>
          <div>
            <p>timestamp</p>
            <p>
              active <span>today</span>
            </p>
            <p>
              Viewed <span>39 times</span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <p>
                  <BiUpvote />
                </p>
                <p>0</p>
                <p>
                  <BiDownvote />
                </p>
                <BsFillBookmarkFill />
                <BiHistory />
              </div>
            </div>
            <div>
              <p>question body</p>
              <div>
                <small>timestamp asked</small>
                <div>
                  <IoPersonCircleSharp />
                  <p>john doe</p>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Comment it is - <span>jane doe</span>
                    <span>timestamp</span>
                  </p>
                </div>
                <p onClick={() => setShowCommentBox(!showCommentBox)}>
                  Add comment
                </p>
                {showCommentBox && (
                  <div>
                    <textarea
                      placeholder="Add your comment"
                      rows={5}
                      className=""
                    ></textarea>
                    <button>Add</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Answers:</p>
          <div>
            <div>
              <div>
                <p>
                  <BiUpvote />
                </p>
                <p>0</p>
                <p>
                  <BiDownvote />
                </p>
                <BsFillBookmarkFill />
                <BiHistory />
              </div>
            </div>
            <div>
              <p>question body</p>
              <div>
                <small>timestamp asked</small>
                <div>
                  <IoPersonCircleSharp />
                  <p>john doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Your answer: </h3>
        <ReactQuill theme="snow" className="h-48" />
      </div>
      <button>Post your answer</button>
    </div>
  );
};

export default Question;
