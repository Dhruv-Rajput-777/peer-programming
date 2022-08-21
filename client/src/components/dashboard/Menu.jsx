import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showError } from "../../actions/error";
import { showRoomModal } from "../../actions/roomModal";
import { createRoom } from "../../api/room";
import Spinner from "../Spinner";

const Menu = () => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(false);

  const createRoomUtil = async () => {
    setSpinner(true);
    const data = await createRoom();
    if (data.success) {
      dispatch(showRoomModal(data.roomId));
    } else {
      dispatch(showError("Unable to create room! Please try again later."));
    }
    setSpinner(false);
  };

  return (
    <div className="pl-8 pr-3 py-2" style={{ width: "25%", height: "auto" }}>
      <div
        className="bg-white rounded-lg shadow-xl border border-gray-200"
        style={{ height: "100%" }}
      >
        <div className="text-xs font-semibold cursor-pointer">
          <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-200 opacity-50">
            <i className="fa-solid fa-code"></i>
            <p>Resources</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-200 bg-lime-400 hover:bg-lime-500 opacity-50">
            <i className="fa-brands fa-rocketchat"></i>
            <p>Global Chat</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-200 opacity-50">
            <i className="fa-solid fa-award"></i>
            <p>Rank List</p>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-5 border-b border-gray-200"
            onClick={() => {
              createRoomUtil();
            }}
          >
            <i className="fa-solid fa-user-group fa-sm"></i>
            <p>Create Room</p>
            {spinner && <Spinner size="15px" />}
          </div>
          <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-200">
            <i className="fa-solid fa-right-from-bracket"></i>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
