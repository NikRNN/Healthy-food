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

export default tabs;
