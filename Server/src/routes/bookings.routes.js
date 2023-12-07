const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");

router.post("/", bookingController.create);

// fetch Indivitual Booking details  from database
router.put("/viewMyBookings", bookingController.findViewAllBookingById);

// Member view all book History
router.put("/viewHistory", bookingController.viewHistory);

// All Members Booking History(Admin)
router.put("/viewMemberBookingHistory", bookingController.viewMemberBookingHistory);

// return book
router.put("/returnBook", bookingController.returnBook);
module.exports = router;
