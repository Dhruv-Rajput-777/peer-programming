import React from "react";
import Split from "react-split";
import { useSelector } from "react-redux";

import Header from "../components/room/Header";
import QuestionContainer from "../components/room/QuestionContainer";
import TextEditor from "../components/room/TextEditor";
import WhiteBoard from "../components/room/WhiteBoard";

const Room = () => {
  const boardType = useSelector((state) => state.setBoardTypeReducer);

  return (
    <div>
      <Header />

      <Split
        className="flex"
        sizes={[56, 44]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <QuestionContainer />
        {boardType == "editor" ? <TextEditor /> : <WhiteBoard />}
      </Split>
    </div>
  );
};

export default Room;
