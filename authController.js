exports.home = (req, res) => {
  res.send("Welcome to Student Exam Portal");
};

exports.login = (req, res) => {
  const { username, role } = req.body;

  req.session.user = { username, role };
  res.cookie("lastRole", role);

  res.send(`Logged in as ${role}`);
};

exports.dashboard = (req, res) => {
  const { username, role } = req.session.user;
  res.send(`Welcome ${username}, role: ${role}`);
};

exports.admin = (req, res) => {
  res.send("Admin Panel");
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("lastRole");
    res.send("Logout successful");
  });
};