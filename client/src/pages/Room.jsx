import React, { useEffect } from "react";
import Split from "react-split";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/room/Header";
import QuestionContainer from "../components/room/QuestionContainer";
import TextEditor from "../components/room/TextEditor";
import WhiteBoard from "../components/room/WhiteBoard";
import JoinRoom from "../components/room/JoinRoom";
import { socket } from "../api/socket.js";

import { setInputFile } from "../actions/inputFile";
import { setEditorCode } from "../actions/editor";

const Room = () => {
  const dispatch = useDispatch();

  const boardType = useSelector((state) => state.setBoardTypeReducer);
  const roomDetails = useSelector((state) => state.roomDetailsReducer);
  const roomAvailable = roomDetails.available;

  useEffect(() => {
    if (roomAvailable) {
      socket.emit("joinRoom", roomDetails.roomId);
      setEditorCode(roomDetails.code);
      setInputFile(roomDetails.inputFile);
      socket.on("getUpdatedInput", (updatedInput) => {
        dispatch(setInputFile(updatedInput));
      });
      socket.on("getUpdatedCode", (updatedCode) => {
        dispatch(setEditorCode(updatedCode));
      });
    }
  }, [roomAvailable]);

  return roomAvailable ? (
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
    <JoinRoom />
  );
};

export default Room;
