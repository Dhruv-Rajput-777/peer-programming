import React from "react";
import { useDispatch } from "react-redux";

import { showError } from "../actions/error";
import { showRoomModal } from "../actions/roomModal";
import { createRoom } from "../api/room";
import ErrorBanner from "../components/ErrorBanner";

import RoomModal from "../components/dashboard/RoomModal";

const Dashboard = () => {
  const dispatch = useDispatch();

  const createRoomUtil = async () => {
    const data = await createRoom();
    if (data.success) {
      return dispatch(showRoomModal(data.roomId));
    } else {
      return dispatch(
        showError("Unable to create room! Please try again later.")
      );
    }
  };

  return (
    <div>
      <ErrorBanner />
      <RoomModal />
      <button
        className="bg-yellow-500"
        onClick={() => {
          createRoomUtil();
        }}
      >
        Create Room
      </button>
    </div>
  );
};
export default Dashboard;
