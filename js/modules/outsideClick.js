export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  // SÓ QUERO QUE ESSA FUNÇÃO SEJA CRIADO QUANDO OUTSIDECLICK FOR ATIVADA, ENTÃO CRIO
  // AQUI DENTRO
  function handleOutsideClick(event) {
    //   console.log("html");
    //   console.log(element);
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    // EVENT BUBBLING
    events.forEach((userEvent) => {
      // SETTIMEOUT É ASSÍNCRONO, LOGO O BUBBLE ACONTECE PRIMEIRO
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
}
