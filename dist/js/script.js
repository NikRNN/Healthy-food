/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");
  function hideTabsContent() {
    tabsContent.forEach(elem => {
      elem.classList.add("hide");
      elem.classList.remove("show");
    });
    tabs.forEach(elem => elem.classList.remove("tabheader__item_active"));
  }
  function showFirstTab(i) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  tabsParent.addEventListener("click", e => {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabs.forEach((elem, index) => {
        if (elem == e.target) {
          hideTabsContent();
          showFirstTab(index);
        }
      });
    }
  });
  hideTabsContent();
  showFirstTab(0);
});
/******/ })()
;
//# sourceMappingURL=script.js.map