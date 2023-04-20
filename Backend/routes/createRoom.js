const router = require("express").Router();
let Room = require("../models/room");

//Create a Room

router.route("/createroom").post((req, res) => {
  const roomName = req.body.roomName;
  const roomId = req.body.roomId;
  const price = req.body.price;
  const bookingStatus = req.body.bookingStatus;
  const amenities = req.body.amenities;
  const bookingId = req.body.bookingId;
  const newRoom = new Room({
    roomName,
    roomId,
    price,
    bookingStatus,
    amenities,
    bookingId,
  });
  newRoom
    .save()
    .then(() => {
      res.json("Room Created Successfully");
    })
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

module.exports = router;
