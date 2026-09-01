const express = require("express")
const authController = require("../controllers/auth.controller")

const router = express.Router()


/*  POST /api/auth/register */
router.post("/register",authController.userRegisterController)

/* POST /api/auth/login */
router.post("/login",authController.userLoginController)


/**
 * -POST /API/AUTH/LOGOUT
 */

router.post("/logout",authController.userLogoutController)


module.exports=router