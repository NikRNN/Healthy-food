import { getDataFromServer } from "./server";

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
  getDataFromServer("http://localhost:3000/menu").then((data) => {
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

export default cards;
