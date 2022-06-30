import React from "react";

const Header = () => {
  return (
    <div className="">
      <div
        className="header flex bg-white border-b border-gray-200"
        style={{
          height: "8vh",
          width: "100%"
        }}
      >
        <div className="logo flex items-center" style={{ width: "30%" }}>
          <img
            src="../logo-no-bg.png"
            alt="Pears"
            style={{ height: "1.6rem", width: "auto" }}
            className="pl-4"
          />
          <div className="text-sm font-bold pl-2 text-gray-800">
            Pear Programming
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
