const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const adminUser = require("../models/user.model");
require("dotenv").config();

function login(req, res) {
  const { email, password } = req.body;
  if (
    email !== adminUser.email ||
    !bcrypt.compareSync(password, adminUser.password)
  ) {
    return res.status(403).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: adminUser.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
}

module.exports = { login };
