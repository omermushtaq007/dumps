import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    role: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
      isGeneral: {
        type: Boolean,
        default: true,
      },
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
)
const User = mongoose.model("users", userSchema)

export default User
