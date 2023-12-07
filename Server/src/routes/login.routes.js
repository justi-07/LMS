const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login.controller");

//Retrieve all emoployees 
router.get('/:email/:pswd', loginController.findInput);
router.put('/member/:m_id', loginController.deleteMember);

module.exports = router