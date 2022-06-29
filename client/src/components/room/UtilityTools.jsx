import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleMic } from "../../actions/mic";
import { showParticipants } from "../../actions/participants";

import Participants from "./Participants";
import QuestionForm from "./QuestionForm";

import { setParticipants } from "../../actions/participants";
import {
  startCall,
  leaveCall,
  toggleMicrophoneTrack,
  getUsers,
} from "../../agora.js";

const UtilityTools = () => {
  const dispatch = useDispatch();

  const mic = useSelector((state) => state.toggleMicReducer);
  const showParticipantsState = useSelector(
    (state) => state.showParticipantsReducer
  );
  const roomDetails = useSelector((state) => state.roomDetailsReducer);

  useEffect(() => {
    startCall(roomDetails.roomId, roomDetails.userId).then(() => {
      const setUsers = async () => {
        const users = await getUsers();
        dispatch(setParticipants(users));
      };
      setUsers();
    });
    return () => {
      leaveCall();
    };
  }, []);

  return (
    <div
      className="flex items-center"
      style={{
        minHeight: "9vh",
        backgroundColor: "#eee",
        borderTop: "1px solid #dddddd",
      }}
    >
      <div className="flex items-center px-4 gap-4">
        {mic == "unmute" ? (
          <div className="border border-gray-400 py-1 px-2 bg-white">
            <i
              className="fa-solid fa-microphone fa-xs text-gray-700 cursor-pointer"
              onClick={() => {
                toggleMicrophoneTrack("off");
                dispatch(toggleMic("unmute"));
              }}
            ></i>
          </div>
        ) : (
          <div className="border border-gray-400 py-1 px-2 bg-white">
            <i
              className="fa-solid fa-microphone-slash text-red-700 fa-xs cursor-pointer"
              onClick={() => {
                toggleMicrophoneTrack("on");
                dispatch(toggleMic("mute"));
              }}
            ></i>
          </div>
        )}

        <div>
          <div
            className="border border-gray-400 py-1 px-2 bg-white"
            style={{ zIndex: 20 }}
          >
            <i
              className="fa-solid fa-user-group fa-xs text-gray-700 cursor-pointer"
              onClick={() => {
                dispatch(showParticipants());
              }}
            ></i>
          </div>
          {showParticipantsState ? <Participants /> : null}
        </div>

        <QuestionForm />
      </div>
    </div>
  );
};

export default UtilityTools;
