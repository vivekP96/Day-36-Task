const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  roomId: { type: Number, required: true },
  price: { type: Number, required: true },
  bookingStatus: { type: String, required: true },
  amenities: { type: String, required: true },
  bookingId: { type: String },
});

const Room = mongoose.model("Room", roomSchema, "Room");
module.exports = Room;
