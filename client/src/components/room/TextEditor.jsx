import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import Files from "./Files";
import EditorTools from "./EditorTools";
import Input from "./Input";
import Output from "./Output";

import { useSelector, useDispatch } from "react-redux";

import { setEditorCode } from "../../actions/editor";

const TextEditor = () => {
  const dispath = useDispatch();

  const EditorTheme = useSelector((state) => state.editorThemeReducer);
  const sourceCode = useSelector((state) => state.setEditorCodeReducer);
  const activeFile = useSelector((state) => state.activeFileReducer);

  return (
    <div className="flex flex-col" style={{ flexGrow: 1, maxHeight : "93vh"}}>
      <Files />
      {activeFile == "editor" ? (
        <CodeMirror
          value={sourceCode}
          theme={EditorTheme}
          height="100%"
          className=""
          extensions={[cpp()]}
          style={{ flexGrow: 1 }}
          onChange={(code) => {
            dispath(setEditorCode(code));
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
