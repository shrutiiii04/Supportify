const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const UserController = require("../controllers/users.js");

router.get("/signup",UserController.renderSignUpForm);
router.post("/signup",wrapAsync(UserController.createNewUser));

router.get("/login",UserController.renderLoginForm)
router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login", failureFlash:true}),UserController.loginUser)

//logout
router.get("/logout",UserController.logoutUser);
module.exports = router;
