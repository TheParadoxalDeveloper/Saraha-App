import { User } from "../../../database/models/user.model.js";
import bcryptjs from "bcryptjs";
import Swal from "sweetalert2";

export const getRegister = async (req, res) => {
  res.render("register.ejs", { session: null });
};

export const handleRegister = async (req, res) => {
  let checkEmail = await User.findOne({ email: req.body.email });
  if (checkEmail) return res.redirect("/register");
  req.body.password = bcryptjs.hashSync(req.body.password, 8);
  await User.insertMany(req.body);
  res.redirect("/login");
};
