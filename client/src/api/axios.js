import axios from "axios";

export default axios.create({
  baseURL: "https://pear-programming-server.herokuapp.com/",
  // baseURL: "http://localhost:8000/",
});
