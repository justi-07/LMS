"use strict";
const member_reg = require("../models/member.model");

exports.findAll = function (req, res) {
  member_reg.findAll(function (err, stud) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", stud);
    res.send(stud);
  });
};

exports.update = function (req, res) {
  const new_stud = new member_reg(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    member_reg.update(new_stud, function (err, stud) {
      console.log(new_stud);
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Member added successfully!",
        data: stud,
      });
    });
  }
  
};

exports.findViewAllMembers = function (req, res) {
  member_reg.findViewAllMembers(function (err, stud) {
    if (err) res.send(err);
    console.log("res", stud);
    res.json(stud);
  });
};

exports.create = function (req, res) {
  const new_stud = new member_reg(req.body);
  console.log("new_stud");
  console.log(new_stud);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    member_reg.create(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Member added successfully!",
        data: stud,
      });
    });
  }

};
