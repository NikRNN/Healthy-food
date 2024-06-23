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

export default modal;
export { closeModal };
export { openModal };
