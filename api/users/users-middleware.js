const model = require("./users-model");
const db = require("./../data/db-config");
const jwt = require("jsonwebtoken");

const validateRegister = async (req, res, next) => {
  const username = req.body.username;
  if (!username || !req.body.password) {
    res.status(401).json({ message: "username and password required" });
  } else {
    next();
  }
};

const usernameExists = async (req, res, next) => {
  const username = req.body.username;
  const result = await model.getByFilter({ username });
  if (result) {
    res.status(401).json({ message: "username is already taken" });
  } else {
    next();
  }
};

const validateLogin = async (req, res, next) => {
  const username = req.body.username;
  if (!username || !req.body.password) {
    res.status(401).json({ message: "username and password required" });
  } else {
    next();
  }
};

module.exports = {
  validateRegister,
  usernameExists,
  validateLogin,
};
