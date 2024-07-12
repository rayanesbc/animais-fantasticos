export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const texto = +numero.innerText;
      const incremento = Math.floor(texto / 100);

      let start = 0;
      const intervalo = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > texto) {
          numero.innerText = texto;
          clearInterval(intervalo);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
      observer.disconnect();
    }
  }

  // ADICIONANDO UM OBSERVADOR
  const observerTarget = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
