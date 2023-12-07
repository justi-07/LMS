const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Create express app
const cors = require("cors");

app.use(cors());

// Set up the Server Port
const port = process.env.PORT || 8080;

// parse the request of content-type-application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type-application/json
app.use(bodyParser.json());

//define the root route
app.get("/", (req, res) => {
    console.log("server is running")
  res.send(" Server Running !");
});


const loginRoutes = require('./src/routes/login.routes')
const memberRoutes = require('./src/routes/member.routes')
const bookRoutes=require('./src/routes/book.routes')
const bookingRoutes = require('./src/routes/bookings.routes')

// usging as middleware
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/member",memberRoutes);
app.use("/api/v1/book",bookRoutes);
app.use("/api/v1/bookings",bookingRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
