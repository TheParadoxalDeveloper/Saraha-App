export const getHome = async(req, res) => {
  res.render("home.ejs", { session: req.session});
};
