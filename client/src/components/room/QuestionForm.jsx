import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion, setQuestionSource } from "../../actions/question";
import { getQuestionSource } from "../../api/question";
import Spinner from "../Spinner";

const QuestionForm = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.setQuestionReducer);

  const [showSpinner, setShowSpinner] = useState(false);

  const loadQuestion = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    const data = await getQuestionSource(question);
    dispatch(setQuestionSource(data.questionSource));
    setShowSpinner(false);
  };

  return (
    <form className="flex items-center gap-2">
      <input
        type={"text"}
        value={question}
        className="border border-gray-400 font-semibold text-xs px-4 py-2 outline-none"
        placeholder="Question Link"
        style={{ width: "15rem" }}
        onChange={(e) => {
          dispatch(setQuestion(e.target.value));
        }}
      />
      <button
        className="bg-lime-400 border font-semibold border-gray-400 px-8 py-2 text-xs"
        onClick={(e) => loadQuestion(e)}
      >
        {showSpinner ? <Spinner size="20px" color="black" /> : "Save"}
      </button>
    </form>
  );
};

export default QuestionForm;
