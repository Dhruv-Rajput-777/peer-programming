import React from "react";
import { resetEditorCode } from "../../actions/editor";
import { setEditorTheme } from "../../actions/editorTools";
import { useDispatch, useSelector } from "react-redux";

const EditorTools = () => {
  const EditorTheme = useSelector((state) => state.editorThemeReducer);
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center px-4 justify-between "
      style={{
        minHeight: "9vh",
        backgroundColor: "#eee",
        borderTop: "1px solid #dddddd",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="border border-gray-400 py-1 px-2 bg-white">
          <i
            className="fa-solid fa-arrow-rotate-right text-gray-700 fa-md cursor-pointer"
            onClick={() => {
              dispatch(resetEditorCode());
            }}
          ></i>
        </div>
        <div className="border border-gray-400 py-1 px-2 bg-white">
          {EditorTheme == "light" ? (
            <i
              className="fa-solid fa-moon text-gray-700 fa-md cursor-pointer"
              onClick={() => {
                dispatch(setEditorTheme("dark"));
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-lightbulb text-gray-700 fa-md cursor-pointer"
              onClick={() => {
                dispatch(setEditorTheme("light"));
              }}
            ></i>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <select className="border border-gray-400 text-xs font-semibold py-2 px-4 cursor-pointer">
          <option className="font-semibold font-xs">C++</option>
          <option className="font-semibold font-xs">C++</option>
        </select>
        <button className="py-2 px-6 bg-lime-400 border border-gray-400 text-xs font-semibold cursor-pointer">
          Submit Code
        </button>
      </div>
    </div>
  );
};

export default EditorTools;
