const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const model = require("./users-model");

router.post("/register", (req, res, next) => {});
router.post("/login", (req, res, next) => {});
router.get("/logout", (req, res, next) => {});

module.exports = router;
