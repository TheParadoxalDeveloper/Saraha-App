import { User } from "../../../database/models/user.model.js";
import bcryptjs from "bcryptjs";

export const getLogin = async (req, res) => {
  res.render("login.ejs", { session: req.session });
};

export const handleLogin = async (req, res) => {
  let checkCredentials = await User.findOne({ email: req.body.email });
  if (!checkCredentials) return res.redirect("/login");
  let isValidPassword = await bcryptjs.compare(req.body.password, checkCredentials.password);
  if (!isValidPassword) return res.redirect("/login");

  req.session.isLoggedIn = true
  req.session.userId = checkCredentials._id
  req.session.username = checkCredentials.name


  res.redirect("/messages");
};


export const handleLogout = async (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/login")
  })
};
