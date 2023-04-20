const router = require("express").Router();
let Room = require("../models/room");

router.route("/").get((req, res) => {
  Room.find()
    .then((rooms) => {
      res.json(rooms);
    })
    .catch((err) => {
      console.log(`Error:${err}`);
    });
});
module.exports = router;
