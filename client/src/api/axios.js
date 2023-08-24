import axios from "axios";
import { serverURL } from "../constants";

export default axios.create({
  baseURL: serverURL,
});
