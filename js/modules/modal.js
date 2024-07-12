export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(e) {
    e.preventDefault();
    containerModal.classList.add("ativo");
  }

  function fecharModal(e) {
    e.preventDefault();
    containerModal.classList.remove("ativo");
  }

  function cliqueForaModal(e) {
    if (e.target === this) {
      fecharModal(e);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
