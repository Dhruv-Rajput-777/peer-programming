import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { socket } from "../../api/socket.js";
import { useSelector, useDispatch } from "react-redux";
import { setEditorCode } from "../../actions/editor";

const CodeEditor = () => {
  const dispatch = useDispatch();
  const EditorTheme = useSelector((state) => state.editorThemeReducer);
  const sourceCode = useSelector((state) => state.setEditorCodeReducer);
  const roomDetails = useSelector((state) => state.roomDetailsReducer);

  let updateCodeUtil;

  const updateCode = (newCode) => {
    socket.emit("updateCode", {
      roomId: roomDetails.roomId,
      code: newCode,
    });
  };

  return (
    <CodeMirror
      value={sourceCode}
      theme={EditorTheme}
      height="100%"
      className="pr-1"
      extensions={[cpp()]}
      style={{ flexGrow: 1, overflow: "auto" }}
      onChange={(code) => {
        dispatch(setEditorCode(code));
      }}
      onKeyUp={(e) => {
        if (updateCodeUtil) clearTimeout(updateCodeUtil);
        updateCodeUtil = setTimeout(() => {
          updateCode(sourceCode);
        }, 1000);
      }}
    />
  );
};

export default CodeEditor;
