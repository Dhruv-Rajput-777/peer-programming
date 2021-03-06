import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setActiveFile } from "../../actions/activeFile";
import { setRoomDetails } from "../../actions/room";

const setUnderLine = (activeFile) => {
  let fileList = document.getElementById("file-list");
  for (let i = 0; i < fileList.children.length; i++) {
    if (fileList.children[i].classList.contains("border-b-2"))
      fileList.children[i].classList.remove("border-b-2");

    if (fileList.children[i].classList.contains("border-lime-600"))
      fileList.children[i].classList.remove("border-lime-600");
  }
  switch (activeFile) {
    case "editor":
      fileList.children[0].classList.add("border-b-2", "border-lime-600");
      break;
    case "input":
      fileList.children[1].classList.add("border-b-2", "border-lime-600");
      break;
    case "output":
      fileList.children[2].classList.add("border-b-2", "border-lime-600");
      break;
    default:
      break;
  }
};

const Files = () => {
  const dispatch = useDispatch();
  const activeFile = useSelector((state) => state.activeFileReducer);

  useEffect(() => {
    setUnderLine(activeFile);
    dispatch(setRoomDetails());
  }, [activeFile]);

  return (
    <div>
      <div
        id="file-list"
        className="flex items-center justify-evenly cursor-pointer bg-white border border-gray-200"
        style={{ minHeight: "5vh" }}
      >
        <div
          className="text-xs font-bold text-center py-1"
          style={{ flexGrow: 1 }}
          onClick={() => {
            dispatch(setActiveFile("editor"));
            dispatch(setRoomDetails());
          }}
        >
          Source
        </div>

        <div
          className="text-xs font-bold text-center py-1"
          style={{ flexGrow: 1 }}
          onClick={() => {
            dispatch(setActiveFile("input"));
            dispatch(setRoomDetails());
          }}
        >
          Input
        </div>

        <div
          className="text-xs font-bold text-center py-1"
          style={{ flexGrow: 1 }}
          onClick={() => {
            dispatch(setActiveFile("output"));
          }}
        >
          Output
        </div>
      </div>
    </div>
  );
};
export default Files;
