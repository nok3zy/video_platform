import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const User = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});

User.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", User);

export default model;