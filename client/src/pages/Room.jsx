import React, { useEffect } from "react";
import Split from "react-split";
import { useSelector } from "react-redux";

import Header from "../components/room/Header";
import QuestionContainer from "../components/room/QuestionContainer";
import TextEditor from "../components/room/TextEditor";
import WhiteBoard from "../components/room/WhiteBoard";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const navigate = useNavigate();
  const boardType = useSelector((state) => state.setBoardTypeReducer);
  const isRoomVerified = useSelector((state) => state.verifyRoomReducer);

  useEffect(() => {
    if (
      localStorage.getItem("userId") === null ||
      localStorage.getItem("roomUUID") === null ||
      localStorage.getItem("roomToken") === null ||
      localStorage.getItem("roomId") === null
    )
      return navigate("/");
  }, [navigate]);

  return isRoomVerified ? (
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
  ) : (
    <Spinner />
  );
};

export default Room;
