import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setBoardType } from "../../actions/boardType";
import { toggleMic } from "../../actions/mic";
import { showParticipants } from "../../actions/participants";

import Participants from "./Participants";

const Header = () => {
  const dispatch = useDispatch();
  const boardType = useSelector((state) => state.setBoardTypeReducer);
  const mic = useSelector((state) => state.toggleMicReducer);
  const showParticipantsState = useSelector(
    (state) => state.showParticipantsReducer
  );

  return (
    <div>
      <div
        className="header flex border-b border-gray-300"
        style={{ height: "7vh", width: "100vw" }}
      >
        <div className="logo flex items-center" style={{ width: "30%" }}>
          <img
            src="../logo-no-bg.png"
            alt="PearProgramming"
            style={{ height: "1.6rem", width: "auto" }}
            className="pl-4"
          />
          <div className="text-sm font-bold pl-2 text-gray-800">
            Pear Programming
          </div>
        </div>
        <div
          className="flex items-center justify-end gap-5 font-semibold text-gray-800 pr-6"
          style={{ flexGrow: 1 }}
        >
          {boardType == "editor" ? (
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => {
                dispatch(setBoardType("white-board"));
              }}
            >
              <div className="text-xs font-bold mr-1">White Board</div>
              <i className="fa-solid fa-chalkboard fa-xs"></i>
            </div>
          ) : (
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => {
                dispatch(setBoardType("editor"));
              }}
            >
              <div className="text-xs font-bold mr-1">Text Editor</div>
              <i className="fa-solid fa-code fa-xs"></i>
            </div>
          )}

          {mic == "unmute" ? (
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => {
                dispatch(toggleMic("unmute"));
              }}
            >
              <div className="text-xs font-bold mr-1">Mute</div>
              <i className="fa-solid fa-microphone fa-xs"></i>
            </div>
          ) : (
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => {
                dispatch(toggleMic("mute"));
              }}
            >
              <div className="text-xs font-bold mr-1">Unmute</div>
              <i className="fa-solid fa-microphone-slash fa-xs"></i>
            </div>
          )}

          <div>
            <div
              className="flex items-center justify-center cursor-pointer z-30"
              style={{ zIndex: 20 }}
              onClick={() => {
                dispatch(showParticipants());
              }}
            >
              <div className="text-xs font-bold mr-1">Participants</div>
              <i className="fa-solid fa-user-group fa-xs"></i>
            </div>
          </div>
          {showParticipantsState ? <Participants /> : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
