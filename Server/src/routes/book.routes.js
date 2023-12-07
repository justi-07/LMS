const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");

//create a new Book
router.post("/", bookController.create);

// fetch all Books from database
router.get("/viewAllBook", bookController.findViewAllBooks);

// Delete Books Details
router.put("/deleteBook", bookController.delete);

// Update Books Details
router.put("/update", bookController.update);

module.exports = router;
