import React, { useEffect } from "react";
import { joinRoom } from "../../whiteboard";

const WhiteBoard = () => {
  useEffect(() => {
    joinRoom();
  }, []);

  return (
    <div
      className="flex flex-col"
      style={{ minHeight: "93vh", maxHeight: "93vh", width: "100%" }}
    >
      <div className="p-4 bg-white" style={{ flexGrow: 1 }}>
        <div
          id="white-board"
          className="bg-white rounded-xl shadow-lg border border-gray-300"
          style={{ flexGrow: 1, height: "100%" }}
        ></div>
      </div>
      <div
        id="toolbar"
        className="flex items-center justify-center gap-1 px-3 pb-3 bg-white"
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

export default WhiteBoard;
