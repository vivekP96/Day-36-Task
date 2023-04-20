const router = require("express").Router();
let Booking = require("../models/booking");
let Room = require("../models/room");
// var bookingIdNo=Math.random().toString().substr(2, 9);
// var bookingIdChars=Math.random().toString().substr(2, 9);
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

//Booking a room with ----->customerName: , bookingdate: ,startTime: ,endTime: ,roomId: <-----

router.route("/roombooking").post(async (req, res) => {
  const customerName = req.body.customerName;
  const bookingDate = req.body.bookingDate;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const roomId = req.body.roomId;

  const newBooking = new Booking({
    customerName,
    bookingDate,
    startTime,
    endTime,
    roomId,
  });
  const room = await Room.find({ roomId: roomId });
  const data = room[0].bookingStatus;

  if (data === "available") {
    newBooking.save().then(() => {
      res.json("Booking Succesful!!!");
    });
    await Room.findOneAndUpdate(
      { roomId: roomId },
      { bookingStatus: "booked", bookingId: generateString(12) }
    ).catch((err) => {
      console.log(data);
      res.status(400).json("Error:" + err);
    });
  } else {
    res.json("Room Already Booked");
  }
});
module.exports = router;
