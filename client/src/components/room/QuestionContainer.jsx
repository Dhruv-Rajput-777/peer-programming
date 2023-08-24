import React from "react";
import { useSelector } from "react-redux";
import UtilityTools from "./UtilityTools";
import { serverURL } from "../../constants.js";

const QuestionContainer = () => {
  const questionName = useSelector((state) => state.setQuestionSourceReducer);

  let questionSourcePrefix = `${serverURL}api/getQuestion/`;
  let questionSource = questionSourcePrefix + questionName;

  return (
    <div
      className="flex flex-col"
      style={{ maxHeight: "93vh", minHeight: "93vh" }}
    >
      {/* <div
        className="bg-gray-100 border border-gray-200"
        style={{ minHeight: "5vh" }}
      ></div> */}

      <div
        className="p-4 bg-white text-center"
        style={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <img
          src={questionSource}
          alt="Please add your question."
          style={{}}
        ></img>
      </div>

      <UtilityTools />
    </div>
  );
};

export default QuestionContainer;
