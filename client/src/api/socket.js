import { io } from "socket.io-client";

const serverURL = "https://pear-programming-server.cyclic.app/";
const socket = io(serverURL);

export { socket };
