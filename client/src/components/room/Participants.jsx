import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { channel, leaveCall } from "../../agora";
import { addParticipant, removeParticipant } from "../../actions/participants";

const Participants = () => {
  const dispatch = useDispatch();
  const participants = useSelector((state) => state.updateParticipantsReducer);

  try {
    channel.on("MemberJoined", (name) => dispatch(addParticipant(name)));
    channel.on("MemberLeft", async (name) => {
      await leaveCall();
      dispatch(removeParticipant(name));
    });
  } catch (error) {
    console.log(error);
  }

  const Participant = (name) => {
    return (
      <div
        className="flex items-center gap-2 user-list-item px-2 py-2"
        key={name}
      >
        <i className="fa-solid fa-user fa-xs"></i>
        <div className="text-xs font-semibold ">{name}</div>
      </div>
    );
  };

  return (
    <div
      className="absolute"
      style={{ width: "10rem", zIndex: 10, bottom: "8vh" }}
    >
      <div
        className="users-list bg-lime-400 text-gray-800 cursor-pointer"
        style={{ maxHeight: "10rem", overflowY: "auto" }}
      >
        {participants.map((name) => Participant(name))}
      </div>
    </div>
  );
};

export default Participants;
