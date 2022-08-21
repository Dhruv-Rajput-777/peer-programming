import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../api/socket";
import { addMessage } from "../../actions/dashboard";
import Spinner from "../Spinner";

function scrollToBottom() {
  const element = document.getElementById("chat-container");
  element.scroll({ top: element.scrollHeight, behavior: "smooth" });
}

const ChatContainer = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.dashboardDetailsReducer.userId);
  const chats = useSelector((state) => state.chatReducer);

  const messageBox = (username, message, index) => {
    return username == userId ? (
      <div className="flex my-2 mx-2 justify-end" key={username + index}>
        <div
          className="bg-lime-400 py-1 px-2 rounded-md"
          style={{ maxWidth: "65%" }}
        >
          <div className="text-xs">{message}</div>
        </div>
      </div>
    ) : (
      <div className="flex my-2 mx-2" key={username + index}>
        <div className="bg-lime-400 rounded-md" style={{ maxWidth: "65%" }}>
          <div
            className="flex italic pt-1 px-2 justify-end"
            style={{ fontSize: "60%" }}
          >
            {username}
          </div>
          <div className="text-xs pb-1 px-2">{message}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    scrollToBottom();
    socket.off("recieveMessage");
    socket.on("recieveMessage", (data) => {
      dispatch(addMessage(data));
    });
  });

  const [message, setMessage] = useState("");

  const submitMessage = (e) => {
    e.preventDefault();
    scrollToBottom();
    let _message = message.trim();
    if (_message.length === 0) return;
    dispatch(addMessage({ userId, message }));
    socket.emit("sendMessage", { userId, message });
    setMessage("");
  };

  const SpinnerUtil = () => {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner size="50px" />
      </div>
    );
  };

  return (
    <div className="pl-3 pr-8 py-2" style={{ width: "75%", height: "auto" }}>
      <div
        className="bg-white rounded-lg shadow-xl border border-gray-200"
        style={{ height: "78vh" }}
      >
        <div className="p-4 border-b border-gray-200" style={{ height: "88%" }}>
          <div
            id="chat-container"
            className=""
            style={{ height: "100%", width: "100%", overflow: "auto" }}
          >
            {chats.length === 0 ? (
              <SpinnerUtil />
            ) : (
              chats.map(({ userId, message }, index) => {
                return messageBox(userId, message, index);
              })
            )}
          </div>
        </div>
        <div
          className=""
          style={{ height: "12%", padding: "0.5rem 4rem 0.5rem 4rem" }}
        >
          <form
            className="flex items-center justify-evenly gap-3 px-6 border border-gray-400 shadow-md rounded-3xl"
            style={{
              height: "100%",
            }}
          >
            <input
              className="text-xs outline-none"
              style={{
                width: "95%",
                paddingTop: "0.1rem",
                paddingBottom: "0.1rem",
              }}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Type a message..."
              value={message}
            />
            <button
              className="outline-none"
              onClick={(e) => {
                submitMessage(e);
              }}
            >
              <i className="fa-solid fa-paper-plane text-lime-500"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
