function server() {
  //отправка данных на сервер
  const forms = document.querySelectorAll("form");

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
  async function getDataFromServer(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Соединение с ${url} завершилось с ${res.status}`);
    }
    return await res.json();
  }

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
    openModal();

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
      closeModal();
    }, 3000);
  }
}

export { server };
