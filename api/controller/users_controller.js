import User from "../../model/User.js"
// function which calls all active users.
export async function getAllUsers(req, res) {
  try {
    const users = await User.find({ status: true }).select("-role -updatedAt -password")
    if (users.length > 0) {
      return res.status(200).json({
        data: users,
      })
    }
    return res.status(404).json("No users found")
  } catch (err) {
    // return error message
    console.error(err.message)
    throw err.message
  }
}
