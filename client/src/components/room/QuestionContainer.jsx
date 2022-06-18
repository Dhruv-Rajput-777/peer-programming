import React from "react";

const QuestionContainer = () => {
  return (
    <div>
      <div
        className="p-4"
        style={{
          maxHeight: "93vh",
          minHeight: "93vh",
          overflowY: "auto",
        }}
      >
        <img
          src="http://localhost:8000/api/getQuestion/0ff61c00-6397-4cb4-b297-51f2420d2b77.png"
          alt="Please add your question."
          style={{}}
        ></img>
      </div>
    </div>
  );
};

export default QuestionContainer;
