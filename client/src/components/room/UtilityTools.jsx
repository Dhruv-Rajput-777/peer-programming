import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleMic } from "../../actions/mic";
import { showParticipants } from "../../actions/participants";

import Participants from "./Participants";
import QuestionForm from "./QuestionForm";

const UtilityTools = () => {
  const dispatch = useDispatch();
  const mic = useSelector((state) => state.toggleMicReducer);
  const showParticipantsState = useSelector(
    (state) => state.showParticipantsReducer
  );

  return (
    <div
      className="flex items-center"
      style={{ minHeight: "9vh", backgroundColor: "#eee", borderTop: "1px solid #dddddd" }}
    >
      <div className="flex items-center px-4 gap-4">
        {mic == "unmute" ? (
          <div className="border border-gray-400 py-1 px-2 bg-white">
            <i
              className="fa-solid fa-microphone fa-xs text-gray-700 cursor-pointer"
              onClick={() => {
                dispatch(toggleMic("unmute"));
              }}
            ></i>
          </div>
        ) : (
          <div className="border border-gray-400 py-1 px-2 bg-white">
            <i
              className="fa-solid fa-microphone-slash text-gray-700 fa-xs cursor-pointer"
              onClick={() => {
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
