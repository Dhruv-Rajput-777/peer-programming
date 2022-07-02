import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputFile } from "../../actions/inputFile";
import { setRoomDetails } from "../../actions/room";
import { socket } from "../../api/socket.js";

const Input = () => {
  const dispatch = useDispatch();

  const editorTheme = useSelector((state) => state.editorThemeReducer);
  const input = useSelector((state) => state.inputFileReducer);
  const roomDetails = useSelector((state) => state.roomDetailsReducer);

  let updateInputUtil;

  const updateInput = (newInput) => {
    socket.emit("updateInput", {
      roomId: roomDetails.roomId,
      stdin: newInput,
    });
  };

  return (
    <div className="" style={{ flexGrow: 1 }}>
      {editorTheme == "dark" ? (
        <textarea
          className="text-xs p-2 text-white"
          style={{
            flexGrow: 1,
            minWidth: "100%",
            minHeight: "100%",
            resize: "none",
            outline: "none",
            backgroundColor: "#282c34",
          }}
          placeholder="INPUT"
          value={input}
          onChange={(e) => {
            const newInput = e.target.value;
            dispatch(setInputFile(newInput));
          }}
          onKeyUp={(e) => {
            if (updateInputUtil) clearTimeout(updateInputUtil);
            updateInputUtil = setTimeout(() => {
              updateInput(input);
            }, 1000);
          }}
        ></textarea>
      ) : (
        <textarea
          className="text-xs p-2"
          style={{
            flexGrow: 1,
            minWidth: "100%",
            minHeight: "100%",
            resize: "none",
            outline: "none",
          }}
          placeholder="INPUT"
          value={input}
          onChange={(e) => {
            const newInput = e.target.value;
            dispatch(setInputFile(newInput));
          }}
          onKeyUp={(e) => {
            if (updateInputUtil) clearTimeout(updateInputUtil);
            updateInputUtil = setTimeout(() => {
              updateInput(input);
            }, 1000);
          }}
        ></textarea>
      )}
    </div>
  );
};

export default Input;
