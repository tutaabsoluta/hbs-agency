const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    trips: [
      {
        id: 1,
        title: 'Chill Adventure'
      }
    ]
    trips: ["Chill Adventure", "Spooky Times", "Desert Madness", "Out in the wild"],
  });
});

module.exports = router;
