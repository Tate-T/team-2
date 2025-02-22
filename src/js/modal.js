(() => {
  const modalWindow = {
    closeModal: document.querySelector("[data-close-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal-button]"),
    modal: document.querySelector("[data-modal]"),
    input: document.querySelector(".modal__input"),
  };

  modalWindow.closeModal.addEventListener("click", toggleModal);
  modalWindow.closeModalBtn.addEventListener("click", handleSaveClick);

  function toggleModal() {
    modalWindow.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  function handleSaveClick() {
    if (modalWindow.input.value.trim() === "") {
      alert("Будь ласка, введіть своє ім’я!");
      modalWindow.input.focus();
    } else {
      toggleModal();
    }
  }
})();
