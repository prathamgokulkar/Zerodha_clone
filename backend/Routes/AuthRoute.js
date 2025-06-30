const { Login } = require("../Controllers/AuthController");
const { Signup } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);

router.post("/login", Login);

module.exports = router;
