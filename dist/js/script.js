/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
document.addEventListener("DOMContentLoaded", () => {
  //переключение табов в секции preview
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");
  function hideTabsContent() {
    tabsContent.forEach(elem => {
      elem.classList.add("hide");
      elem.classList.remove("show", "fade");
    });
    tabs.forEach(elem => elem.classList.remove("tabheader__item_active"));
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  tabsParent.addEventListener("click", e => {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabs.forEach((elem, index) => {
        if (elem == e.target) {
          hideTabsContent();
          showTabContent(index);
        }
      });
    }
  });
  hideTabsContent();
  showTabContent();

  //обратный таймер снизу сайта

  let deadline = "2024-05-20";
  function getClock(endtime) {
    let days, hours, minutes, seconds;
    let difference = Date.parse(endtime) - Date.parse(new Date());
    if (difference <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(difference / (24 * 60 * 60 * 1000));
      hours = Math.floor(difference / (1000 * 60 * 60) % 24);
      minutes = Math.floor(difference / (1000 * 60) % 60);
      seconds = Math.floor(difference / 1000 % 60);
    }
    return {
      difference,
      days,
      hours,
      minutes,
      seconds
    };
  }
  function getZero(num) {
    if (num < 10 && num >= 0) {
      return "0" + num;
    } else {
      return num;
    }
  }
  function getTimer(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timerId = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const timer = getClock(endtime);
      days.innerHTML = getZero(timer.days);
      hours.innerHTML = getZero(timer.hours);
      minutes.innerHTML = getZero(timer.minutes);
      seconds.innerHTML = getZero(timer.seconds);
      if (timer.difference <= 0) {
        clearInterval(timerId);
      }
    }
  }
  getTimer(".timer", deadline);
  getClock(deadline);

  // вызов и закрытие модального окна
  const modal = document.querySelector(".modal"),
    btns = document.querySelectorAll("[data-modal"),
    closeModalBtn = document.querySelector("[data-close]"),
    body = document.querySelector("body"),
    scrollY = calcScroll();
  function openModal(list) {
    list.forEach(elem => {
      elem.addEventListener("click", () => {
        modal.classList.toggle("hide");
        document.documentElement.style.overflow = "hidden";
        document.body.style.marginRight = `${scrollY}px`;
        clearInterval(modalTimerId);
      });
    });
  }
  function closeModal(btn) {
    btn.addEventListener("click", () => {
      modal.classList.toggle("hide");
      document.documentElement.style.overflow = "scroll";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.classList.toggle("hide");
        document.documentElement.style.overflow = "scroll";
        document.body.style.marginRight = `0px`;
      }
    });
    document.addEventListener("keydown", e => {
      if (e.code === "Escape") {
        modal.classList.toggle("hide");
        document.documentElement.style.overflow = "scroll";
        document.body.style.marginRight = `0px`;
      }
    });
  }
  openModal(btns);
  closeModal(closeModalBtn);
  const modalTimerId = setTimeout(() => {
    modal.classList.toggle("hide");
    document.documentElement.style.overflow = "hidden";
    document.body.style.marginRight = `${scrollY}px`;
  }, 3000); //появление модального окна через 5 сек после захода на страницу

  function showModalByScroll() {
    if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
      modal.classList.toggle("hide");
      document.body.style.marginRight = `${scrollY}px`;
      document.documentElement.style.overflow = "hidden";
      window.removeEventListener("scroll", showModalByScroll);
    }
  } //появление модального окна про прокрутке страницы до низа

  window.addEventListener("scroll", showModalByScroll);
  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  calcScroll(); //фон за модальным окном не сдвигается

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
    }
    render() {
      const div = document.createElement("div");
      if (this.classes.length === 0) {
        div.classList.add("menu__item");
      } else {
        this.classes.forEach(className => div.classList.add(className));
      }
      div.innerHTML = `<img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>`;
      this.parent.append(div);
    }
  }

  //создаем элементы в блоке меню
  new MenuCard("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 450, ".menu__field .container", "menu__item").render();
  new MenuCard("img/tabs/elite.jpg", "elite", "Меню “Премиум”", 'В меню "Премиум" мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 780, ".menu__field .container", "menu__item").render();
  new MenuCard("img/tabs/post.jpg", "post", 'Меню "Постное"', "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.", 550, ".menu__field .container", "menu__item").render();
});
/******/ })()
;
//# sourceMappingURL=script.js.map