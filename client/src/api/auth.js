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

    localStorage.setItem("userId", response.data.username);
    return { loginSuccess: true };
  } catch (err) {
    console.log(err);
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
    localStorage.setItem("userId", response.data.username);
    return { signupSuccess: true };
  } catch (err) {
    console.log(err.response.data);
    return { signupSuccess: false, err: err.response.data.err };
  }
};

const getUserId = async () => {
  try {
    return localStorage.getItem("userId");
    // const response = await axios.get(`/auth/user`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   withCredentials: true,
    // });
    // if (response.status === 200) {
    //   return response.data.userId;
    // } else {
    //   return null;
    // }
  } catch (err) {
    console.log(err.response.data);
    return null;
  }
};

export { loginUser, signupUser, getUserId };
