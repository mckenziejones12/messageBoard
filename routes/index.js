const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET homepage and default messages. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// GET new message form
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Create new message" });
});

// POST new message to messageboard
router.post("/new", function (req, res) {
  const message = req.body.message;
  const author = req.body.author;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});
module.exports = router;
