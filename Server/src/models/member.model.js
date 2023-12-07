"use strict";
var dbConn = require("../../config/db.config");
let m_id;

// Member Object creation
let member_reg = function (mreg) {
  this.fullname = mreg.fullname;
  this.phone = mreg.phone;
  this.department = mreg.department;
  this.semester = mreg.semester;
  this.regno = mreg.regno;
  this.gender = mreg.gender;
  this.email = mreg.email;
  this.password = mreg.password;
};


// Create a new Member
member_reg.create = function (newMember, result) {
  console.log(newMember);
  console.log(
    "________________--------- starts ------------------__________________________"
  );
  // query to check if email exists in the database
  const email = newMember.email;
  const checkEmailExistenceQuery = `SELECT * FROM members WHERE email= '${email}'`;
  // execute the query
  dbConn.query(checkEmailExistenceQuery, function (error, results, fields) {
    console.log(results.length);
    // if the query returns a result, it means the email exists in the database
    if (results.length > 0) {
      result(null, "The email  " + email + " exists in the database.");
      console.log(`The email ${email} exists in the database.`);
    } else {
      //   console.log(`The email ${email} does not exist in the database.`);
      dbConn.query(
        "INSERT INTO members set ? ",
        newMember,
        function (err, res) {
          if (err) {
            console.log("Error: ", err);
            result(err, null);
          } else {
            m_id = res.insertId;
            dbConn.query(
              "INSERT INTO `login` (`reg_id`,`email`,`password`,`type`,`status`) VALUES('" +
                m_id +
                "','" +
                newMember.email +
                "','" +
                newMember.password +
                "','USER','1')",

              function (err, res) {
                if (err) {
                  console.log("Error: ", err);
                  result(err, null);
                } else {
                  console.log(" Member Insert Data");
                  console.log(res);
                  m_id = res.insertId;
                  result(null, { Qstatus: "success", m_id: m_id });
                }
              }
            );
          }
        }
      );
    }
  });
};

// Fetch all members from Database
member_reg.findViewAllMembers = function (result) {
  dbConn.query(
    "SELECT members.* ,login.* FROM  members,login WHERE  members.m_id=login.`reg_id` AND login.status='1'",
    function (err, res) {
      if (err) {
        console.log("error :" + err);
        result(null, err);
      } else {
        console.log("resultData: " + res);
        result(null, res);
      }
    }
  );
};

member_reg.update = function (newMember, result) {
  console.log("memberModel")
  console.log(`UPDATE members SET fullname=${newMember.fullname},phone=${newMember.phone},department=${newMember.department},semester=${newMember.semester},regno=${newMember.regno},gender=${newMember.gender} WHERE m_id=${newMember.m_id}`)

  let qry = `UPDATE members SET fullname='${newMember.fullname}',phone='${newMember.phone}',department='${newMember.department}',semester='${newMember.semester}',regno='${newMember.regno}',gender='${newMember.gender}' WHERE email='${newMember.email}'`
  dbConn.query(
    qry,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = member_reg;
