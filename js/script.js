import ScrollSuave from "./modules/scroll-suave.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/menu-dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/date-object.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";

// const options = {
//   behavior: "smooth",
//   block: "start",
// };
// teria que passar essa options como segundo argumento da funcao ScrollSuave abaixo:
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initAnimacaoScroll();
