import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputFile } from "../../actions/inputFile";
import { socket } from "../../api/socket.js";

const Input = () => {
  const dispatch = useDispatch();

  const editorTheme = useSelector((state) => state.editorThemeReducer);
  const input = useSelector((state) => state.inputFileReducer);
  const roomDetails = useSelector((state) => state.roomDetailsReducer);

  useEffect(() => {
    dispatch(setInputFile(roomDetails.input));
  }, [roomDetails]);

  let updateInputUtil;

  const updateInput = (newInput) => {
    socket.emit("updateInput", {
      roomId: roomDetails.roomId,
      stdin: newInput,
    });
  };

  socket.on("getUpdatedInput", (updatedInput) => {
    dispatch(setInputFile(updatedInput));
  });

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
            if (updateInputUtil) clearTimeout(updateInputUtil);
            updateInputUtil = setTimeout(() => {
              updateInput(newInput);
            }, 300);
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
            if (updateInputUtil) clearTimeout(updateInputUtil);
            updateInputUtil = setTimeout(() => {
              updateInput(newInput);
            }, 300);
          }}
        ></textarea>
      )}
    </div>
  );
};

export default Input;
