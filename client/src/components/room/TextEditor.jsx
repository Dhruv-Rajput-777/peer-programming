import React from "react";
import Files from "./Files";
import EditorTools from "./EditorTools";
import Input from "./Input";
import Output from "./Output";
import { useSelector } from "react-redux";
import CodeEditor from "./CodeEditor";

const TextEditor = () => {
  const activeFile = useSelector((state) => state.activeFileReducer);
  return (
    <div className="flex flex-col" style={{ flexGrow: 1, maxHeight: "93vh" }}>
      <Files />
      {activeFile == "editor" ? <CodeEditor /> : null}
      {activeFile == "input" ? <Input /> : null}
      {activeFile == "output" ? <Output /> : null}
      <EditorTools />
    </div>
  );
};

export default TextEditor;
