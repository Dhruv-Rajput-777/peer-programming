import axios from "./axios";

const getMessages = async () => {
  try {
    const { data } = await axios.get("/api/messages");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getMessages };
