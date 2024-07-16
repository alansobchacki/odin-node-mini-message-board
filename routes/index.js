const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there! 👋 This app does not connect to a database, so your messages will disappear after a while.",
    user: "Dennis",
    added: "Sat, 13 Jul 2024 18:15:53 GMT",
  },
  {
    text: "This app was built to practice HTTP methods (mainly GET and POST), setting up an Express skeleton, and basic deployment.",
    user: "Dennis",
    added: "Sat, 13 Jul 2024 18:17:51 GMT",
  },
  {
    text: "More complex apps coming soon™",
    user: "Dennis",
    added: "Sat, 13 Jul 2024 18:22:31 GMT",
  },
  {
    text: "spyder",
    user: "Charlie",
    added: "Sun, 14 Jul 2024 12:35:12 GMT",
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = { router, messages };
