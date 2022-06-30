import { getMessages } from "../api/dashboard";

export const setDashboardDetails = (details) => {
  return {
    type: "SET_DASHBOARD_DETAILS",
    payload: details,
  };
};

export const setMessages = () => async (dispatch) => {
  const messages = await getMessages();
  dispatch({
    type: "SET_MESSAGES",
    payload: messages,
  });
};

export const addMessage = (message) => {
  return {
    type: "ADD_MESSAGE",
    payload: message,
  };
};
