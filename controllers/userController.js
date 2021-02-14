export const join = (req, res) => {
  res.render("join",{ pageTitle: "Join" });
};
export const login = (req, res) => {
  res.render("login",{ pageTitle: "login" });
};
export const logout = (req, res) => {
  res.render("logout",{ pageTitle: "logout" });
};
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("User Detail");
export const editProfile = (req, res) => res.render("Edit Profile");
export const changePassword = (req, res) => res.render("Change Password");
