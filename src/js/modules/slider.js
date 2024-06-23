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

export default slider;
