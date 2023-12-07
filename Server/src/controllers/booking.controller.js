"use strict";
const tbl_booking = require("../models/booking.model");

exports.create = function (req, res) {
  const new_booking = new tbl_booking(req.body);

  // handles null error
  console.log("-----------------", req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    tbl_booking.create(new_booking, function (err, booking) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Booking  added successfully!",
        data: booking,
      });
    });
  }
};

// update a Books
exports.findViewAllBookingById = function (req, res) {
  const new_stud = new tbl_booking(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    tbl_booking.findViewAllBookingById(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json(stud);
    });
  }
};

// returnBook
exports.returnBook = function (req, res) {
  const new_stud = new tbl_booking(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    tbl_booking.returnBook(new_stud, function (err, stud) {
      console.log(new_stud);
      if (err) res.send(err);
      res.json({ error: false, message: "Returned", data: stud });
    });
  }
};

// book History
exports.viewHistory = function (req, res) {
  const new_stud = new tbl_booking(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    tbl_booking.viewHistory(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json(stud);
    });
  }
};

// admin View all Members Book History
exports.viewMemberBookingHistory = function (req, res) {
  tbl_booking.viewMemberBookingHistory(function (err, stud) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", stud);
    res.send(stud);
  });
};
