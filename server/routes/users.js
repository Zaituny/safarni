const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/users").get(function (req, res) {
 let db_connect = dbo.getDb("Safarni");
 db_connect
   .collection("users")
   .find()
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/searchresults").get(function (req, res) {
  let db_connect = dbo.getDb("Safarni");
  db_connect
    .collection("searchresults")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 recordRoutes.route("/flights").get(function (req, res) {
  let db_connect = dbo.getDb("Safarni");
  db_connect
    .collection("flights")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
 recordRoutes.route("/hotels").get(function (req, res) {
  let db_connect = dbo.getDb("Safarni");
  db_connect
    .collection("hotels")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
// This section will help you get a single record by id
recordRoutes.route("/users/:Email").get(function (req, res) {
 let db_connect = dbo.getDb("Safarni");
 let myquery = { Email: req.params.Email};
 db_connect
   .collection("users")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/users/add").post(function (req, response) {
 let db_connect = dbo.getDb("Safarni");
 let myobj = {
   Email: req.body.email,
   FirstName: req.body.firstname,
   LastName: req.body.lastname,
   Password: req.body.password
 };
 db_connect.collection("users").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});

recordRoutes.route("/searchresults/add").post(function (req, response) {
  let db_connect = dbo.getDb("Safarni");
  let myobj = {
    id: req.body.id,
    time: req.body.time,
    airline: req.body.airline,
    date: req.body.date,
    duration: req.body.duration,
    layoverTime: req.body.layoverTime,
    price: req.body.price,
    tripPerTraveler: "Round trip per traveler",
    included: "Carry-on included",
    destination: req.body.destination,
  };
  db_connect.collection("searchresults").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
 });

 recordRoutes.route("/hotels/add").post(function (req, response) {
  let db_connect = dbo.getDb("Safarni");
  let myobj = {
    name: req.body.name,
    star: req.body.star,
    img: req.body.img,
    description: req.body.description,
    rating: req.body.rating,
    reviews: req.body.reviews,
    price: req.body.price,
    payEvery: req.body.payEvery
  };
  db_connect.collection("hotels").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
 });
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     Email: req.body.email,
     FirstName: req.body.firstname,
     LastName: req.body.lastname,
     Password: req.body.password
   },
 };
 db_connect
   .collection("users")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("users").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
recordRoutes.route("/delete/:collection").delete((req, response) => {
  let db_connect = dbo.getDb();
  db_connect.collection(req.params.collection).deleteMany({}, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
 });
 
module.exports = recordRoutes;