import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  submissions: {
    type: Array,
  },
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);
export default User;
