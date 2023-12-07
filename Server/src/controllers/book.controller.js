"use strict";
const book_reg = require("../models/book.model");

exports.findAll = function (req, res) {
  book_reg.findAll(function (err, stud) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", stud);
    res.send(stud);
  });
};

exports.create = function (req, res) {
  const new_stud = new book_reg(req.body);
  console.log("new_stud");
  console.log(new_stud);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    book_reg.create(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Book added successfully!",
        data: stud,
      });
    });
  }
};
// View All Books
exports.findViewAllBooks = function (req, res) {
  book_reg.findViewAllBooks(function (err, stud) {
    if (err) res.send(err);
    console.log("res", stud);
    res.json(stud);
  });
};

// Delete a Books
exports.delete = function (req, res) {
  console.log("%%  controler  start %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(req.body.b_id);
  console.log("%%% controler ends %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

  book_reg.delete(req.body.b_id, function (err, stud) {
    if (err) res.send(err);
    res.json({ error: false, message: "Book Removed " });
  });
};

// update a Books
exports.update = function (req, res) {
  const new_stud = new book_reg(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    book_reg.update(new_stud, function (err, stud) {
      console.log(new_stud);
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Book Updated successfully!",
        data: stud,
      });
    });
  }
  
};
