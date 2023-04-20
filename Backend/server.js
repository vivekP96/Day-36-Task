require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();
const port = process.env.PORT || 8000;
const Connection = require("./dbConnection");
const createRoute = require("./routes/createRoom");
const getroomsRoute = require("./routes/getRooms");
const newbookingRoute = require("./routes/bookingRoom");
const getBookedRoutes = require("./routes/getbookedRooms");
//middlewares

app.use(express.json());
app.use(cors());
//Db connection
Connection();

//End point for creating
app.use("/api", createRoute);

//End point for getting allrooms
app.use("/api", getroomsRoute);

//End point for Booking a room
app.use("/api", newbookingRoute);

//End point for getting booked room
app.use("/api", getBookedRoutes);
app.listen(port, () => {
  console.log(`Server Listening to port ${port}`);
});
