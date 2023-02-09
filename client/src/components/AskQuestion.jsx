import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "react-tag-input-component";

const AskQuestion = () => {
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
                <input type="text" placeholder="Add question title" className="my-1 mx-0 p-2 border-2 border-solid outline-none placeholder:text-[#ddd] focus:border-2 focus:border-solid focus:shadow-md" />
              </div>
            </div>
            <div className="flex-col w-full flex">
              <div className="flex flex-col my-2 mx-0 text-[0.9rem]">
                <h2 className="text-[rgba(0,0,0,0.8)] font-medium">Body</h2>
                <small className="text-[rgba(0,0,0,0.8)]">
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </small>
                <ReactQuill className="my-2 mx-0 rounded-lg" theme="snow" />
              </div>
            </div>
            <div className="flex-col w-full flex">
              <div className="flex flex-col my-2 mx-0 text-[0.9rem]">
                <h2 className="text-[rgba(0,0,0,0.8)] font-medium">Tags</h2>
                <small className="text-[rgba(0,0,0,0.8)]">Add tags</small>
                <input type="text" placeholder="Add new tag" />
                {/* <TagsInput name="tags" placeHolder="Add new tag"/> */}
              </div>
            </div>
          </div>
        </div>
        <button className="max-w-fit my-2 mx-0 hover:bg-blue-700 p-2 rounded text-white bg-blue-500">Add Question</button>
      </div>
    </div>
  );
};

export default AskQuestion;
