import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calculator from "./modules/calculator";
import server from "./modules/server";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  //появление модального окна через 3 сек после захода на страницу
  const modalTimerId = setTimeout(() => {
    openModal(".modal", modalTimerId);
  }, 3000);

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2024-08-15");
  cards();
  calculator();
  server("form", modalTimerId);
  slider();
});
