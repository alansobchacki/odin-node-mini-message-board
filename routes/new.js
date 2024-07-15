const express = require("express");
const router = express.Router();

// Import the messages array from index.js
const messages = require("./index").messages;

router.get("/", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/", function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
