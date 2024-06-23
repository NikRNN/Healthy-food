/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
  //калькулятор
  const calcResult = document.querySelector(".calculating__result");

  let sex, height, weight, age, ratio;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female";
    localStorage.setItem("sex", "female");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  function initStartCalc(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);

      if (elem.getAttribute("id") === localStorage.getItem("sex")) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        elem.classList.add(activeClass);
      }
    });
  }

  initStartCalc("#gender div", "calculating__choose-item_active");
  initStartCalc(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getResultCalc() {
    if (!sex || !height || !weight || !age || !ratio) {
      calcResult.textContent = "____";
      return;
    }
    if (sex == "female") {
      calcResult.textContent = Math.round(
        447.6 + 9.2 * weight + 3.1 * height - 4.3 * age * ratio
      );
    }
    if (sex == "male") {
      calcResult.textContent = Math.round(
        88.36 + 13.4 * weight + 4.8 * height - 5.7 * age * ratio
      );
    }
  }

  getResultCalc();

  function getStaticInfoForCalc(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.getAttribute("id");
          localStorage.setItem("sex", e.target.getAttribute("id"));
        }

        elements.forEach((elem) => elem.classList.remove(activeClass));

        e.target.classList.add(activeClass);

        getResultCalc();
      });
    });
  }

  getStaticInfoForCalc("#gender div", "calculating__choose-item_active");
  getStaticInfoForCalc(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getDimanicInfoForCalc(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1.5px solid red";
      } else {
        input.style.border = "none";
      }

      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }
      getResultCalc();
    });
  }

  getDimanicInfoForCalc("#height");
  getDimanicInfoForCalc("#weight");
  getDimanicInfoForCalc("#age");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);


/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/js/modules/server.js");


function cards() {
  //добавление класса для создания карточек меню
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
        this.classes.forEach((className) => div.classList.add(className));
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

  //
  //
  //
  //
  //
  //
  //
  //создаем элементы в блоке меню без данных с сервера (вручную)
  // new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   "vegy",
  //   'Меню "Фитнес"',
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   450,
  //   ".menu__field .container",
  //   "menu__item"
  // ).render();

  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   "Меню “Премиум”",
  //   'В меню "Премиум" мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  //   780,
  //   ".menu__field .container",
  //   "menu__item"
  // ).render();

  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   "post",
  //   'Меню "Постное"',
  //   "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
  //   550,
  //   ".menu__field .container",
  //   "menu__item"
  // ).render();

  //
  //
  //
  //
  //создаем карточки в меню с использованием функции getDataFromServer
  (0,_server__WEBPACK_IMPORTED_MODULE_0__.getDataFromServer)("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altming, title, descr, price }) => {
      new MenuCard(
        img,
        altming,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
  //создаем карточки в меню без использования классов
  // getDataFromServer("http://localhost:3000/menu").then((data) =>
  //   createMenuCard(data)
  // );

  // function createMenuCard(data) {
  //   data.forEach(({ img, altming, title, descr, price }) => {
  //     const element = document.createElement("div");

  //     element.classList.add("menu__item");

  //     element.innerHTML = `
  //     <img src=${img} alt=${altming} />
  //           <h3 class="menu__item-subtitle">${title}</h3>
  //           <div class="menu__item-descr">
  //             ${descr}
  //           </div>
  //           <div class="menu__item-divider"></div>
  //           <div class="menu__item-price">
  //             <div class="menu__item-cost">Цена:</div>
  //             <div class="menu__item-total"><span>${price}</span> руб/день</div>
  //           </div>
  //     `;

  //     document.querySelector(".menu .container").append(element);
  //   });
  // }

  //
  //
  //
  //
  //
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scrollY}px`;

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "scroll";
  document.body.style.marginRight = `0px`;
}

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
scrollY = calcScroll();

function modal(triggerSelector, modalSelector, modalTimerId) {
  // вызов и закрытие модального окна
  const modal = document.querySelector(modalSelector),
    btnsOpenModal = document.querySelectorAll(triggerSelector);

  btnsOpenModal.forEach((item) =>
    item.addEventListener("click", () => {
      openModal(modalSelector, modalTimerId);
    })
  );

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //появление модального окна про прокрутке страницы до низа
  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  //
  //
  //
  //
  //
  //фон за модальным окном не сдвигается
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./src/js/modules/server.js":
/*!**********************************!*\
  !*** ./src/js/modules/server.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDataFromServer: () => (/* binding */ getDataFromServer)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


async function getDataFromServer(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Соединение с ${url} завершилось с ${res.status}`);
  }
  return await res.json();
}

function server(formSelector, modalTimerId) {
  //отправка данных на сервер
  const forms = document.querySelectorAll(formSelector);

  const messages = {
    success: "Спасибо! Мы скоро свяжемся с Вами!",
    load: "icons/spinner.svg",
    failure: "Возникла ошибка, попробуйте еще раз",
  };

  forms.forEach((elem) => sendFormInfo(elem));

  //
  //post функция для отправки данных на сервер
  async function postDataToServer(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    return await res.json();
  }
  //get функция для получения данных с сервера, используется для формирования карточек меню через класс

  function sendFormInfo(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("img");
      statusMessage.src = messages.load;
      statusMessage.style.cssText = `display: block; margin: 0 auto;`;
      form.insertAdjacentElement("afterend", statusMessage);

      //XMLHttpRequest
      // const xhr = new XMLHttpRequest();
      // xhr.open("POST", "server.php");
      // xhr.setRequestHeader("Content-type", "application/json; charset = utf-8");

      const formData = new FormData(form);
      //либо так создаем тело для отправки на сервер, либо через Object Entries
      // const obj = {};
      // formData.forEach((value, key) => {
      //   obj[key] = value;
      // });
      const jsonObj = JSON.stringify(Object.fromEntries(formData.entries()));
      //fetch
      postDataToServer("http://localhost:3000/requests", jsonObj)
        .then((data) => {
          console.log(data);
          showModalAfterSendform(messages.success);
          statusMessage.remove();
        })
        .catch(() => {
          showModalAfterSendform(messages.failure);
          statusMessage.remove();
        })
        .finally(() => {
          form.reset();
        });

      //XMLHttpRequest
      // xhr.send(jsonObj);
      // xhr.addEventListener("load", () => {
      //   if (xhr.status === 200) {
      //     console.log(xhr.response);
      //     showModalAfterSendform(messages.success);
      //     statusMessage.remove();
      //     form.reset();
      //   } else {
      //     showModalAfterSendform(messages.failure);
      //     statusMessage.remove();
      //     form.reset();
      //   }
      // });
    });
  }

  //
  //
  //
  //
  //обновление окна благодарности после успешной отправки
  function showModalAfterSendform(message) {
    const prevModal = document.querySelector(".modal__dialog");
    prevModal.classList.add("hide");
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", modalTimerId);

    const newModal = document.createElement("div");
    newModal.classList.add("modal__dialog");
    newModal.innerHTML = `
  <div class = 'modal__content'>
    <div data-close class = 'modal__close'>×</div>
    <div class = 'modal__title'>${message}</div>
    </div>`;
    document.querySelector(".modal").append(newModal);

    setTimeout(() => {
      newModal.remove();
      prevModal.classList.remove("hide");
      prevModal.classList.add("show");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
    }, 3000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (server);



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
  //слайдер
  const sliders = document.querySelectorAll(".offer__slide"),
    cur = document.querySelector("#current"),
    total = document.querySelector("#total"),
    prevArrow = document.querySelector(".offer__slider-prev"),
    nextArrow = document.querySelector(".offer__slider-next"),
    sliderWrapper = document.querySelector(".offer__slider-wrapper"),
    sliderInnerWrapper = document.querySelector(".offer__slider-inner"),
    width = window.getComputedStyle(sliderWrapper).width,
    mainSliderWrapper = document.querySelector(".offer__slider");

  //вариант 1
  let currIndex = 1;
  let offset = 0;

  //для точек под слайдером
  mainSliderWrapper.style.position = "relative";

  const indicators = document.createElement("ol");
  const dots = [];
  mainSliderWrapper.append(indicators);
  indicators.classList.add("carousel-indicators");

  sliderInnerWrapper.style.width = 100 * sliders.length + "%";
  sliderInnerWrapper.style.display = "flex";
  sliderInnerWrapper.style.transition = "0.5s all";

  sliderWrapper.style.overflow = "hidden";

  sliders.forEach((slide) => {
    slide.style.width = width;
  });

  if (sliders.length < 10) {
    total.textContent = `0${sliders.length}`;
    cur.textContent = `0${currIndex}`;
  } else {
    total.textContent = `${sliders.length}`;
    cur.textContent = `${currIndex}`;
  }

  prevArrow.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, "") * (sliders.length - 1);
    } else {
      offset -= +width.replace(/\D/g, "");
    }
    sliderInnerWrapper.style.transform = `translateX(-${offset}px)`;

    if (currIndex == 1) {
      currIndex = sliders.length;
    } else {
      currIndex--;
    }
    if (sliders.length < 10) {
      cur.textContent = `0${currIndex}`;
    } else {
      cur.textContent = `${currIndex}`;
    }

    dots.forEach((dot) => {
      dot.style.opacity = "0.5";
    });
    dots[currIndex - 1].style.opacity = "1";
  });

  nextArrow.addEventListener("click", () => {
    if (offset == +width.replace(/\D/g, "") * (sliders.length - 1)) {
      offset = 0;
    } else {
      offset += +width.replace(/\D/g, "");
    }

    sliderInnerWrapper.style.transform = `translate(-${offset}px)`;

    if (currIndex == sliders.length) {
      currIndex = 1;
    } else {
      currIndex++;
    }
    if (sliders.length < 10) {
      cur.textContent = `0${currIndex}`;
    } else {
      cur.textContent = `${currIndex}`;
    }

    dots.forEach((dot) => {
      dot.style.opacity = "0.5";
    });
    dots[currIndex - 1].style.opacity = "1";
  });

  //точки под слайдером
  for (let i = 0; i < sliders.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();

      const slideTo = e.target.getAttribute("data-slide-to");

      currIndex = slideTo;

      offset = +width.replace(/\D/g, "") * (slideTo - 1);
      sliderInnerWrapper.style.transform = `translate(-${offset}px)`;

      if (sliders.length < 10) {
        cur.textContent = `0${currIndex}`;
      } else {
        cur.textContent = `${currIndex}`;
      }

      dots.forEach((dot) => {
        dot.style.opacity = "0.5";
      });
      dots[currIndex - 1].style.opacity = "1";
    });
  });

  //вариант 2
  //let currIndex = 0;
  // if (sliders.length < 10) {
  //   total.textContent = `0${sliders.length}`;
  // } else {
  //   total.textContent = `${sliders.length}`;
  // }

  // function hideSliders() {
  //   sliders.forEach((elem) => {
  //     elem.classList.add("hide");
  //     elem.classList.remove("show", "fade");
  //   });
  // }

  // function showSliders(i) {
  //   hideSliders();
  //   sliders[i].classList.add("show", "fade");
  //   sliders[i].classList.remove("hide");
  //   if (i < 10) {
  //     cur.textContent = `0${i + 1}`;
  //   } else {
  //     cur.textContent = `${i + 1}`;
  //   }
  // }

  // showSliders(currIndex);

  // prevArrow.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   currIndex = currIndex > 0 ? currIndex - 1 : sliders.length - 1;
  //   showSliders(currIndex);
  // });

  // nextArrow.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   currIndex = currIndex < sliders.length - 1 ? currIndex + 1 : 0;
  //   showSliders(currIndex);
  // });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  //переключение табов в секции preview
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabsContent() {
    tabsContent.forEach((elem) => {
      elem.classList.add("hide");
      elem.classList.remove("show", "fade");
    });
    tabs.forEach((elem) => elem.classList.remove(activeClass));
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains(tabsSelector.slice(1))) {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
  //обратный таймер снизу сайта

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
      hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((difference / (1000 * 60)) % 60);
      seconds = Math.floor((difference / 1000) % 60);
    }

    return {
      difference,
      days,
      hours,
      minutes,
      seconds,
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

  getTimer(id, deadline);
  getClock(deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/server */ "./src/js/modules/server.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");









window.addEventListener("DOMContentLoaded", () => {
  //появление модального окна через 3 сек после захода на страницу
  const modalTimerId = setTimeout(() => {
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(".modal", modalTimerId);
  }, 3000);

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-modal]", ".modal", modalTimerId);
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(".timer", "2024-08-15");
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_server__WEBPACK_IMPORTED_MODULE_5__["default"])("form", modalTimerId);
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map