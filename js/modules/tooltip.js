export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function onMouseOver() {
    // DISPARA O EVENTO QUANDO PASSA O MOUSE EM CIMA
    // console.log(event);

    function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    // ESSE THIS SE REFERE AO ITEM DO FOR EACH
    const tooltipBox = criarTooltipBox(this);

    const onMouseMove = {
      handleEvent(event) {
        // DEFININDO O PONTO ONDE O TOOLTIPBOX DEVE APARECER NA TELA
        this.tooltipBox.style.top = `${event.pageY + 20} px`;
        this.tooltipBox.style.left = `${event.pageX + 20} px`;
      },
    };

    // DEIXANDO A FUNÇÃO DE FORA, ELA SÓ FUNCIONARÁ COMO UM OBJETO, ENTÃO PRECISAMOS
    // USAR O MÉTOD HANDLE EVENT, SENÃO FARÍAMOS:
    // function onMouseLeave(){
    //    tooltipBox.remove();
    // }
    const onMouseLeave = {
      tooltipBox: "",
      element: "",
      handleEvent() {
        this.tooltipBox.remove();
        // PARA REMOVER OS EVENTOS DA ABA DE EVENT LISTENERS APÓS O MOUSE PASSAR EM CIMA
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    // PREENCHE NO OBJETO CRIADO, A TOOLTIPBOX CRIADA
    onMouseLeave.tooltipBox = tooltipBox;
    // PARA REMOVER OS EVENTOS DA ABA DE EVENT LISTENERS APÓS O MOUSE PASSAR EM CIMA
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);

    // A TOOLTIPBOX SEGUE O MOUSE
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
