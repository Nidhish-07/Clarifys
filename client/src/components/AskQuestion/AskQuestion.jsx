import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "react-tag-input-component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, logout } from "../../store/userSlice.js";
import axios from "axios";

const AskQuestion = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [tag, setTag] = React.useState([]);
  const user = useSelector(selectUser);

  const [loading, setLoading] = React.useState([]);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      setLoading(true);
      const jsonQuestionBody = {
        title,
        body,
        user,
        tag: JSON.stringify(tag),
      };
      await axios
        .post("http://localhost:3000/api/question", jsonQuestionBody)
        .then((res) => {
          alert("Question added successfully");
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className="flex w-full bg-[rgba(238,238,238,0.5)] h-[100vh] justify-center">
      <div className="py-7 px-4 flex flex-col w-[95%] max-w-3xl">
        <div className="flex w-full">
          <h1 className="mb-5 font-normal text-2xl ">Ask a question</h1>
        </div>
        <div className="flex p-4 bg-white border-2 border-solid border-gray-200 shadow-md">
          <div className="flex flex-col w-full">
            <div className="flex-col w-full flex">
              <div className="flex flex-col my-2 mx-0 text-[0.9rem]">
                <h2 className="text-[rgba(0,0,0,0.8)] font-medium">Title</h2>
                <small className="text-[rgba(0,0,0,0.8)]">Be specific</small>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add question title"
                  className="my-1 mx-0 p-2 border-2 border-solid outline-none placeholder:text-[#ddd] focus:border-2 focus:border-solid focus:shadow-md"
                />
              </div>
            </div>
            <div className="flex-col w-full flex">
              <div className="flex flex-col my-2 mx-0 text-[0.9rem]">
                <h2 className="text-[rgba(0,0,0,0.8)] font-medium">Body</h2>
                <small className="text-[rgba(0,0,0,0.8)]">
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </small>
                <ReactQuill
                  className="my-2 mx-0 rounded-lg"
                  theme="snow"
                  value={body}
                  onChange={(value) => setBody(value)}
                />
              </div>
            </div>
            <div className="flex-col w-full flex">
              <div className="flex flex-col my-2 mx-0 text-[0.9rem]">
                <h2 className="text-[rgba(0,0,0,0.8)] font-medium mt-8">
                  Tags
                </h2>
                <small className="text-[rgba(0,0,0,0.8)]">Add tags</small>
                <input
                  type="text"
                  placeholder="Add new tag"
                  value={tag}
                  onChange={setTag}
                />
                {/* <TagsInput name="tags" placeHolder="Add new tag"/> */}
              </div>
            </div>
          </div>
        </div>
        <button
          className="max-w-fit my-2 mx-0 hover:bg-blue-700 p-2 rounded text-white bg-blue-500"
          type="submit"
          onClick={submitHandler}
          disabled={!loading}
        >
          {loading ? "Adding your question" : "Add Question"}
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
