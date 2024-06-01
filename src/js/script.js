window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    modal = require("./modules/modal"),
    timer = require("./modules/timer"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc"),
    server = require("./modules/server"),
    slider = require("./modules/slider");

  tabs();
  modal();
  timer();
  cards();
  calc();
  server();
  slider();
});
