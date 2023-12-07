const express = require("express");
const router = express.Router();
const memberController = require("../controllers/member.controller");

//create a new Member
router.post("/", memberController.create);
// fetch all members from database
router.get("/viewAllMembers", memberController.findViewAllMembers);
// Update Member Details
router.put("/updateMember", memberController.update);
module.exports = router;
