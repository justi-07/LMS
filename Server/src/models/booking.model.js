"use strict";
var dbConn = require("../../config/db.config");
let b_id, booking_id;

// Booking  Object Creation
let tbl_booking = function (breg) {
  (this.booking_id = breg.booking_id),
    (this.b_id = breg.b_id),
    (this.m_id = breg.m_id),
    (this.name = breg.name),
    (this.cdate = breg.currentDate),
    (this.rdate = breg.PlusDate),
    (this.status = breg.status);
};

// Create a Booking  with Id

tbl_booking.create = function (new_booking, result) {
  console.log("onside booking model");
  console.log(new_booking);
  dbConn.query(
    "INSERT INTO bookings SET ?",
    [new_booking],
    function (err, res) {
      if (err) {
        console.log("errror" + err);
        result(null, err);
      } else {
        // result(null, res);
        dbConn.query(
          "UPDATE books  SET stock=stock-1 WHERE name='" +
            new_booking.name +
            "'",
          function (err, res) {
            if (err) {
              console.log("errror" + err);
              result(null, err);
            } else {
              result(null, res);
            }
          }
        );
      }
    }
  );
};

// Fetch all members from Database
tbl_booking.findViewAllBookingById = function (new_booking, result) {
  console.log(
    "errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
  );
  console.log(
    "SELECT books.name,books.author,books.genres,books.language,books.description,bookings.booking_id,bookings.b_id,bookings.m_id,bookings.cdate,bookings.rdate,bookings.status FROM books,bookings WHERE bookings.`status`='collected' AND  bookings.`b_id`=books.`b_id` AND bookings.`m_id`='" +
      new_booking.m_id +
      "' "
  );
  dbConn.query(
    "SELECT books.name,books.author,books.genres,books.language,books.description,bookings.booking_id,bookings.b_id,bookings.m_id,bookings.cdate,bookings.rdate,bookings.status FROM books,bookings WHERE bookings.`status`='collected' AND  bookings.`b_id`=books.`b_id` AND bookings.`m_id`='" +
      new_booking.m_id +
      "' ",
    function (err, res) {
      if (err) {
        console.log("error :" + err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// returnBook

tbl_booking.returnBook = function (new_booking, result) {
  console.log(
    "///////////////////////////////////////////////////////////////////////"
  );
  console.log("onside rerunn model");
  console.log("newBooking:booking_id ");
  console.log(new_booking);
  console.log(
    `UPDATE bookings SET status='Returned' WHERE booking_id='${new_booking.booking_id}'`
  );

  let qry = `UPDATE bookings SET status='Returned' WHERE booking_id='${new_booking.booking_id}'`;
  dbConn.query(qry, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log(
        "UPDATE books SET stock=stock+1 WHERE b_id='" + new_booking.b_id + "'"
      );
      dbConn.query(
        "UPDATE books SET stock=stock+1 WHERE b_id='" + new_booking.b_id + "'",
        function (err, res) {
          if (err) {
            console.log("error :" + err);
            result(null, err);
          } else {
            result(null, res);
          }
        }
      );
    }
  });
};

// Fetch  members booking History  from Database
tbl_booking.viewHistory = function (new_booking, result) {
  console.log(
    "errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
  );
  console.log(
    "SELECT books.name,books.author,books.genres,books.language,books.description,bookings.booking_id,bookings.b_id,bookings.m_id,bookings.cdate,bookings.rdate,bookings.status FROM books,bookings WHERE bookings.`status`='Returned' AND  bookings.`b_id`=books.`b_id` AND bookings.`m_id`='" +
      new_booking.m_id +
      "' "
  );
  dbConn.query(
    "SELECT books.name,books.author,books.genres,books.language,books.description,bookings.booking_id,bookings.b_id,bookings.m_id,bookings.cdate,bookings.rdate,bookings.status FROM books,bookings WHERE bookings.`status`='Returned' AND  bookings.`b_id`=books.`b_id` AND bookings.`m_id`='" +
      new_booking.m_id +
      "' ",
    function (err, res) {
      if (err) {
        console.log("error :" + err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// admin View All Members Booking History
tbl_booking.viewMemberBookingHistory = function (result) {
  dbConn.query(
    "SELECT members.*, books.name,books.author,books.genres,books.language,books.description,bookings.booking_id,bookings.b_id,bookings.m_id,bookings.cdate,bookings.rdate,bookings.status FROM members,books,bookings WHERE bookings.`status`='Returned' AND  bookings.`b_id`=books.`b_id`  AND bookings.`m_id`=members.`m_id` ",
    function (err, res) {
      if (err) {
        console.log("error :" + err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = tbl_booking;
