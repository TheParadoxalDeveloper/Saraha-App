import { Message } from "../../../database/models/message.model.js";
import { User } from "../../../database/models/user.model.js";

export const getUser = async (req, res) => {
  try {
    let checkUser = await User.findById(req.params.id);
    console.log(checkUser);

    if (!checkUser) {
      return res.render("error.ejs", { session: null });
    }

    res.render("user.ejs", { userId: req.params.id, session: null, checkUser });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.render("error.ejs", { session: null });
  }
};

export const sendMessage = async (req, res) => {
  req.body.user = req.params.id
  await Message.insertMany(req.body)
  res.redirect("/user/" + req.params.id)
};
