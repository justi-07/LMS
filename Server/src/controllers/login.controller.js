"use strict";

const login = require("../models/login.model");
exports.create = function (req, res) {
  const new_login = new login(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    login.create(new_login, function (err, login) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Member added successfully!",
        data: login,
      });
    });
  }
};

exports.findInput = function (req, res) {
  console.log("request");
  
  console.log(req);
  // login.findInput;
  login.findInput(req.params.email, req.params.pswd, function (err, login) {
    if (err) res.send(err);
    res.json(login);
  });
};

exports.deleteMember = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
       login.deleteMember(req.params.m_id,  function(err,  login) {
          if (err)
          res.send(err);
          res.json({ error:false, message: 'User successfully updated' });
      });
  }

};
