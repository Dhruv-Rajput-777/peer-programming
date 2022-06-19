import React from "react";

const Participants = () => {
  return (
    <div
      className="absolute"
      style={{ width: "10rem", zIndex: 10, bottom: "8vh" }}
    >
      <div
        className="users-list bg-lime-400 text-gray-800 cursor-pointer"
        style={{ maxHeight: "10rem", overflowY: "auto" }}
      >
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">dhruv10050</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">harsh_1dsaf</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">asfd23_asfd</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">as23df</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">5fsad</div>
        </div>
        <div className="flex items-center gap-2 user-list-item px-2 py-2">
          <i className="fa-solid fa-user fa-xs"></i>
          <div className="text-xs font-semibold ">afsdsdfjk6</div>
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
