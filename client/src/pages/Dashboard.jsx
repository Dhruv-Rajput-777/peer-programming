import React, { useEffect } from "react";
import ErrorBanner from "../components/ErrorBanner";
import RoomModal from "../components/dashboard/RoomModal";
import Header from "../components/dashboard/Header";
import Announcement from "../components/dashboard/Announcement";
import Menu from "../components/dashboard/Menu";
import ChatContainer from "../components/dashboard/ChatContainer";
import { getUserId } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { setDashboardDetails, setMessages } from "../actions/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../api/socket";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.dashboardDetailsReducer.userId);

  useEffect(() => {
    const checkUserId = async () => {
      const userId = await getUserId();
      if (!userId) {
        return navigate("/login");
      }
      dispatch(setDashboardDetails({ userId }));
    };
    checkUserId();
  });

  useEffect(() => {
    if (!userId) return;
    socket.emit("joinGlobalChat");
    dispatch(setMessages());
  }, [userId]);

  return (
    <div className="" style={{ height: "100vh", width: "100vw" }}>
      <ErrorBanner />
      <RoomModal />
      <Header />
      <Announcement />
      <div className="flex">
        <Menu />
        <ChatContainer />
      </div>
    </div>
  );
};
export default Dashboard;
