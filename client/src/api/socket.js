import { io } from "socket.io-client";

const serverURL = "https://pear-programming-server.herokuapp.com/";
const socket = io(serverURL);

export { socket };
