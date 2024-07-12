import outsideclick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideclick(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", openMenu);

    eventos.forEach(() => {
      menuButton.addEventListener(eventos, openMenu);
    });
  }
}
