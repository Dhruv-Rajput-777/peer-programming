import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputFile } from "../../actions/inputFile";

const Input = () => {
  const dispatch = useDispatch();

  const EditorTheme = useSelector((state) => state.editorThemeReducer);
  const input = useSelector((state) => state.inputFileReducer);

  return (
    <div className="" style={{ flexGrow: 1 }}>
      {EditorTheme == "dark" ? (
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
            dispatch(setInputFile(e.target.value));
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
            dispatch(setInputFile(e.target.value));
          }}
        ></textarea>
      )}
    </div>
  );
};

export default Input;
