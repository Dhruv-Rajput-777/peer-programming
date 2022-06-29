import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import Files from "./Files";
import EditorTools from "./EditorTools";
import Input from "./Input";
import Output from "./Output";
import { socket } from "../../api/socket.js";
import { useSelector, useDispatch } from "react-redux";
import { setEditorCode } from "../../actions/editor";

const TextEditor = () => {
  const dispatch = useDispatch();

  const EditorTheme = useSelector((state) => state.editorThemeReducer);
  const sourceCode = useSelector((state) => state.setEditorCodeReducer);
  const activeFile = useSelector((state) => state.activeFileReducer);
  const roomDetails = useSelector((state) => state.roomDetailsReducer);

  useEffect(() => {
    socket.emit("joinRoom", roomDetails.roomId);
    dispatch(setEditorCode(roomDetails.code));
  }, [roomDetails]);

  let updateCodeUtil;

  const updateCode = (code) => {
    dispatch(setEditorCode(code));
    socket.emit("updateCode", {
      roomId: roomDetails.roomId,
      code,
    });
  };

  socket.on("getUpdatedCode", (code) => {
    dispatch(setEditorCode(code));
  });

  return (
    <div className="flex flex-col" style={{ flexGrow: 1, maxHeight: "93vh" }}>
      <Files />
      {activeFile == "editor" ? (
        <CodeMirror
          value={sourceCode}
          theme={EditorTheme}
          height="100%"
          className="pr-1"
          extensions={[cpp()]}
          style={{ flexGrow: 1, overflow: "auto" }}
          onChange={(code) => {
            if (updateCodeUtil) clearTimeout(updateCodeUtil);
            updateCodeUtil = setTimeout(() => {
              updateCode(code);
            }, 500);
          }}
        />
      ) : null}
      {activeFile == "input" ? <Input /> : null}
      {activeFile == "output" ? <Output /> : null}
      <EditorTools />
    </div>
  );
};

export default TextEditor;
