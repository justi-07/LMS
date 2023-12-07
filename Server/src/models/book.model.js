"use strict";
var dbConn = require("../../config/db.config");
let b_id;
// Book Object Creation
let book_reg = function (breg) {
  (this.name = breg.name),
    (this.author = breg.author),
    (this.stock = breg.stock),
    (this.genres = breg.genres),
    (this.language = breg.language),
    (this.description = breg.description);
};

// create a new Book
book_reg.create = function (newBook, result) {
  console.log(newBook);
  console.log(
    "________________--------- starts ------------------__________________________"
  );
  // query to check if name exists in the database
  const name = newBook.name;
  const checkNameExistenceQuery = `SELECT * FROM books  WHERE  name='${name}'`;
  // execute the query
  dbConn.query(checkNameExistenceQuery, function (error, results, fields) {
    console.log(results.length);
    // if the query returns a result, it means the name exists in the database
    if (results.length > 0) {
      result(null, "The   " + name + " exists in the database.");
      console.log(`The  ${name} exists in the database.`);
    } else {
      //   console.log(`The  ${name} does not exist in the database.`);
      dbConn.query("INSERT INTO books set ? ", newBook, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("Book Insert Data");
          console.log(res);
          b_id = res.insertId;
          result(null, "book Added");
        }
      });
    }
  });
};

// Fetch all Books from Database
book_reg.findViewAllBooks = function (result) {
  dbConn.query("SELECT * from books", function (err, res) {
    if (err) {
      console.log("error :" + err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Delete a Book  with Id

book_reg.delete = function (b_id, result) {
  console.log("onside book model");
  console.log(b_id);
  dbConn.query("DELETE FROM books WHERE b_id=?", [b_id], function (err, res) {
    if (err) {
      console.log("errror" + err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Update a Book  with Id

book_reg.update = function (newBook, result) {
  console.log("bookmodel");

  let qry = `UPDATE books SET name='${newBook.name}',author='${newBook.author}',genres='${newBook.genres}',stock='${newBook.stock}',language='${newBook.language}',description='${newBook.description}' WHERE name='${newBook.name}'`;

  console.log(qry);
  dbConn.query(qry, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = book_reg;
