const bcrypt = require("bcryptjs");

const adminUser = {
  email: "admin@admin.com",
  password: bcrypt.hashSync("admin123", 10),
};

module.exports = adminUser;
