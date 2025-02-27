(() => {
  const modalWindow = {
    closeModal: document.querySelector("[data-close-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal-button]"),
    modal: document.querySelector("[data-modal]"),
    input: document.querySelector(".modal__input"),
  };

  modalWindow.closeModal.addEventListener("click", toggleModal);
  modalWindow.closeModalBtn.addEventListener("click", handleSaveClick);
  modalWindow.input.addEventListener("input", validateInput);

  function toggleModal() {
    modalWindow.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  function validateInput() {
    const value = modalWindow.input.value.trim();

    if (value.length < 2) {
      modalWindow.input.style.border = "2px solid red";
    } else {
      modalWindow.input.style.border = "2px solid green";
    }
  }

  function handleSaveClick() {
    const value = modalWindow.input.value.trim();

    if (value.length < 2) {
      modalWindow.input.style.border = "2px solid red";
      modalWindow.input.focus();
      return;
    }

    toggleModal();
  }
})();
