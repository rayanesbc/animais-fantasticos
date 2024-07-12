import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    // console.log(event);
    this.classList.add("active");

    // outsideClick();
    // FOI SUBSTITUÍDO POR
    // outsideClick(this, () => {
    //   console.log("ativou");
    // });

    // FOI SUBSTITUÍDO POR
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((item) => {
    // item.addEventListener("click", handleClick);
    // item.addEventListener("touchstart", handleClick);
    ["click", "mousestart"].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
}
