import React from "react";

const Announcement = () => {
  return (
    <div className="mt-2 px-24 py-1" style={{ height: "8vh" }}>
      <div
        className="flex justify-center items-center rounded-lg shadow-md border border-gray-200"
        style={{ height: "100%" }}
      >
        <div className="flex items-center ">
          <i className="fa-solid fa-triangle-exclamation text-lime-500 text-sm mr-1"></i>
          <p className="font-semibold text-xs">
            For practice please visit :{" "}
            <a
              href="https://c2-ladders.com/"
              className="text-lime-500 underline"
            >
              c2-ladders
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
