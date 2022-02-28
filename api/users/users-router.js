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
      res.json(err);
    });
});
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
});
router.get("/logout", (req, res, next) => {});

router.get("/", (req, res) => {
  console.log("its working");
});

module.exports = router;
