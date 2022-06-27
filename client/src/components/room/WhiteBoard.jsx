import React, { useEffect } from "react";
import { joinRoom } from "../../whiteboard";

import { useSelector, useDispatch } from "react-redux";

const WhiteBoard = () => {
  const roomDetails = useSelector((state) => state.roomDetailsReducer);

  useEffect(() => {
    const { roomUUID, userId, roomToken } = roomDetails;
    joinRoom(roomUUID, userId, roomToken);
  }, [roomDetails]);

  return (
    <div
      className="flex flex-col"
      style={{
        flexGrow: 1,
        maxHeight: "93vh",
      }}
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
