const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const model = require("./users-model");

router.post("/register", (req, res, next) => {
  const { username, password } = req.body;

  const hash = bcrypt.hashSync(password, 8);
  model
    .addUser({ username, password: hash })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.post("/login", (req, res, next) => {});
router.get("/logout", (req, res, next) => {});

router.get("/", (req, res) => {
  model
    .get()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

module.exports = router;
