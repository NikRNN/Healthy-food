import { calculator } from "./modules/calculator.js";
import { cards } from "./modules/cards.js";
import { modal } from "./modules/modal.js";
import { server } from "./modules/server.js";
import { slider } from "./modules/slider.js";
import { tabs } from "./modules/tabs.js";
import { timer } from "./modules/timer.js";

window.addEventListener("DOMContentLoaded", () => {
  calculator();
  cards();
  modal();
  server();
  slider();
  tabs();
  timer();
});
