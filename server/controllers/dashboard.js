import Chats from "../models/chat.js";

const getMessages = async (req, res) => {
  try {
    const messages = await Chats.find().limit(200).sort({ createdAt: 1 });
    return res.send(messages);
  } catch (error) {
    console.log(error);
    res.send([]);
  }
};

export { getMessages };
