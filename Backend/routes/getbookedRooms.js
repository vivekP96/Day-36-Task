const router = require("express").Router();
let Room = require("../models/room");
let Booking = require("../models/booking");
const { default: mongoose } = require("mongoose");

router.route("/getbookedrooms").get(async (req, res) => {
  // const Room = await Room.find();
  // const Bookings = await Booking.find();
  // console.log(room);
  const booking = await Booking.aggregate([
    {
      $lookup: {
        from: "Room",
        localField: "RoomID",
        foreignField: "RoomID",
        pipeline: [
          {
            $project: {
              _id: 0,
            },
          },
        ],
        as: "Customer_data",
      },
    },
  ]).project({ _id: 0, roomId: 0, roomName: 0 });

  res.send(booking);
});
module.exports = router;
