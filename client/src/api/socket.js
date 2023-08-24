import { io } from "socket.io-client";
import { serverURL } from "../constants.js";

const socket = io(serverURL);

export { socket };
