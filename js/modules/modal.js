export default class Modal {
  constructor(abrirModal, fecharModal, containerModal) {
    this.botaoAbrir = document.querySelector(abrirModal);
    this.botaoFechar = document.querySelector(fecharModal);
    this.containerModal = document.querySelector(containerModal);

    // Bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // function abrirModal(e) {
  //   e.preventDefault();
  //   containerModal.classList.add("ativo");
  // }

  // function fecharModal(e) {
  //   e.preventDefault();
  //   containerModal.classList.remove("ativo");
  // }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora
  cliqueForaModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal(e);
    }
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
