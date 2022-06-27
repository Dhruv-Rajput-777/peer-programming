import React, { useEffect } from "react";
import Spinner from "../Spinner";

import { useSelector, useDispatch } from "react-redux";
import { setRoomDetails } from "../../actions/room";
import ErrorBanner from "../ErrorBanner";
import { showError } from "../../actions/error";

const JoinRoom = () => {
  const dispatch = useDispatch();
  const roomDetails = useSelector((state) => state.roomDetailsReducer);

  useEffect(() => {
    if (roomDetails.available == null) {
      dispatch(setRoomDetails());
      return;
    }
    if (!roomDetails.available) dispatch(showError(roomDetails.error));
  }, [roomDetails.available]);

  return (
    <div>
      <ErrorBanner />
      <div
        className="flex items-center justify-center gap-3 flex-col"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div className="text-xl">Fetching room details...</div>
        <Spinner />
      </div>
    </div>
  );
};

export default JoinRoom;
