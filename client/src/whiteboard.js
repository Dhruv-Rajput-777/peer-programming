import { WhiteWebSdk } from "white-web-sdk";

var whiteWebSdk = new WhiteWebSdk({
  appIdentifier: "UvKd4PGxEeyjZNFU8okD5Q/Uw4QTFhtcTYTVw",
  region: "in-mum",
});

var joinRoomParams = {
  uuid: localStorage.getItem("roomUUID"),
  uid: localStorage.getItem("userId"),
  roomToken: localStorage.getItem("roomToken"),
};

const joinRoom = async (req, res) => {
  whiteWebSdk
    .joinRoom(joinRoomParams)
    .then(function (room) {
      room.bindHtmlElement(document.getElementById("white-board"));

      var toolbar = document.getElementById("toolbar");
      var toolNames = [
        "pencil",
        "eraser",
        "rectangle",
        "text",
        "arrow",
        "ellipse",
        "hand",
        "straight",
      ];

      var toolImages = [
        '<i class="fa-solid fa-pencil fa-lg"></i>',
        '<i class="fa-solid fa-eraser fa-lg"></i>',
        '<i class="fa-regular fa-square fa-lg"></i>',
        '<i class="fa-solid fa-font fa-lg"></i>',
        '<i class="fa-solid fa-arrow-up fa-lg"></i>',
        '<i class="fa-regular fa-circle fa-lg"></i>',
        '<i class="fa-solid fa-hand-dots fa-lg"></i>',
        '<i class="fa-solid fa-grip-lines-vertical fa-lg"></i>',
      ];

      for (let i = 0; i < toolNames.length; i++) {
        var toolName = toolNames[i];
        var btn = document.createElement("BUTTON");
        btn.classList.add("text-xs", "px-2", "py-1");
        btn.setAttribute("id", "btn" + toolName);
        btn.innerHTML = toolImages[i];

        btn.addEventListener("click", function (obj) {
          var ele = obj.target;
          if (ele.getAttribute("id") == null) ele = ele.parentElement;
          var toolName = ele.getAttribute("id").replace("btn", "");
          room.setMemberState({
            currentApplianceName: toolName,
            shapeType: "pentagram",
            // strokeColor: [0, 0, 0, 1],
            strokeWidth: 5,
            textSize: 20,
          });
        });
        toolbar.appendChild(btn);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
};

export { joinRoom };
