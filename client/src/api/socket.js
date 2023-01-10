import { io } from "socket.io-client";

const serverURL = "https://pear-programming-server.onrender.com/";
const socket = io(serverURL);

export { socket };
