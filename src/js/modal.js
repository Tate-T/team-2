(() => {
  const modalWindow = {
    closeModal: document.querySelector("[data-close-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal-button]"),
    modal: document.querySelector("[data-modal]"),
  };

  modalWindow.closeModal.addEventListener("click", toggleModal);
  modalWindow.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    modalWindow.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
