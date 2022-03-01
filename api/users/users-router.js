const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const model = require("./users-model");
const mid = require("./users-middleware");
const { JWT_SECRET } = require("./secret");

router.post(
  "/register",
  mid.validateRegister,
  mid.usernameExists,
  (req, res, next) => {
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
  }
);

function generateToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

router.post("/login", mid.validateLogin, (req, res, next) => {
  const { username, password } = req.body;

  model
    .getByFilter({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ message: `welcome ${username}`, token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.get("/logout", (req, res, next) => {
  res.json({ message: "logged out" });
});

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
