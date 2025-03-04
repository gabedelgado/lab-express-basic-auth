const isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    return res.render("login", {
      message: "you were not logged in ! please do so now.",
    });
  }
  next();
};

// if an already logged in user tries to access the login page it
// redirects the user to the home page
const isLoggedOut = (req, res, next) => {
  if (req.session.user) {
    return res.redirect("/");
  }
  next();
};

const checkFields = (req, res, next) => {
  let errors = [];
  if (!req.body.username) {
    errors.push("You did not include a name!");
  }
  if (!req.body.password) {
    errors.push("You need a password");
  }
  if (errors.length > 0) {
    return res.render("signup", { message: errors });
  }
  next();
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
  checkFields,
};
