(() => {
  const modal = {
    openModalBtn: document.querySelector("[data-footer-modal-open]"),
    closeModal: document.querySelector("[data-close-footer-modal]"),
    footerModal: document.querySelector("[data-footer-modal]"),
  };

  modal.openModalBtn.addEventListener("click", toggleModal);
  modal.closeModal.addEventListener("click", toggleModal);

  function toggleModal() {
    modal.footerModal.classList.toggle("is-hidden");
  }
})();
