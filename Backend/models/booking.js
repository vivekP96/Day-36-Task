const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  bookingDate: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  roomId: { type: Number, required: true },
});

const Bookings = mongoose.model("Bookings", bookingSchema, "Bookings");
module.exports = Bookings;
