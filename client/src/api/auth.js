import axios from "./axios";

const loginUser = async (user) => {
  try {
    const response = await axios.post(`/auth/login`, user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true,
    });

    if (response.status === 200) {
      return { loginSuccess: true };
    } else {
      return { loginSuccess: false, err: response.data.message };
    }
  } catch (err) {
    console.log(err.response.data);
    return { loginSuccess: false, err: err.response.data.message };
  }
};

const signupUser = async (user) => {
  try {
    const response = await axios.post(`/auth/signup`, user, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      return { signupSuccess: true };
    } else {
      return { signupSuccess: false, err: response.data.err };
    }
  } catch (err) {
    console.log(err.response.data);
    return { signupSuccess: false, err: err.response.data.err };
  }
};

export { loginUser, signupUser };
