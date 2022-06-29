import { io } from "socket.io-client";

const serverURL = "http://localhost:8000/";
const socket = io(serverURL);

export { socket };
