function modal() {
  // вызов и закрытие модального окна
  const modal = document.querySelector(".modal"),
    btnsOpenModal = document.querySelectorAll("[data-modal]"),
    scrollY = calcScroll();

  btnsOpenModal.forEach((item) =>
    item.addEventListener("click", () => {
      openModal();
    })
  );

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scrollY}px`;
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "scroll";
    document.body.style.marginRight = `0px`;
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
  //
  //
  //
  //
  //появление модального окна через 3 сек после захода на страницу
  const modalTimerId = setTimeout(() => {
    openModal();
  }, 3000);

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
      openModal();
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
}

export { modal };
