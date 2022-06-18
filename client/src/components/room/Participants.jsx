import React from "react";

const Participants = () => {
  return (
    <div
      className="absolute right-0 mr-2"
      style={{ width: "8rem", zIndex: 10, top: "7vh" }}
    >
      <div className="users-list bg-lime-200 text-gray-800 ">
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">dhruvasfd</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">dhruvasfd</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">dhruvasfd</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">dhruvasfd</div>
        </div>
      </div>
    </div>
  );
};

export default Participants;
