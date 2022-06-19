import axios from "./axios";
import { setQuestionSource } from "../actions/question";

const getQuestionSource = async (question) => {
  try {
    const response = await axios.post(
      `/api/getQuestionSource`,
      {
        url: question,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { questionSource: "" };
  }
};

export { getQuestionSource };
