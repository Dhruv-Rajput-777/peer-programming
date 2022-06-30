import passport from "passport";
import axios from "axios";
import Users from "../models/users.js";

passport.use(Users.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  Users.findById(id, function (err, user) {
    done(err, user);
  });
});

const loginUser = (req, res) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.log(err);
        return res.status(401).send(err);
      }
      if (!user) {
        return res.status(401).send(info);
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(user);
      });
    })(req, res);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

const codeforcesHandleExists = async (codeforcesHandle) => {
  try {
    const cfUserData = await axios.get(
      `https://codeforces.com/api/user.info?handles=${codeforcesHandle}`
    );
    return cfUserData.data.status === "OK";
  } catch (err) {
    console.log(err.response.data);
    return false;
  }
};

const checkSubmission = async (codeforcesHandle) => {
  const url = `https://codeforces.com/api/user.status?handle=${codeforcesHandle}&from=1&count=1`;

  try {
    const response = await axios.get(url);
    const submission = response.data.result[0];

    const { contestId, index } = submission.problem;

    if (
      contestId === 4 &&
      index === "A" &&
      submission.verdict === "COMPILATION_ERROR"
    ) {
      return true;
    }

    return false;
  } catch (err) {
    console.log(err.response.data);
    return false;
  }
};

const signupUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(await codeforcesHandleExists(username)))
      return res.status(400).send({ err: "Invalid Codeforces Handle" });

    // if (!(await checkSubmission(username)))
    // return res.status(400).send({ err: "No submission found" });

    Users.register({ username }, password, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
      }
      passport.authenticate("local")(req, res, () => {
        return res.send(user);
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};

const getUserId = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      return res.send({ userId: req.user.username });
    } else {
      return res.send({ userId: null });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ err: error.message });
  }
};

export { loginUser, signupUser, getUserId };
