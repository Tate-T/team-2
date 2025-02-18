(() => {
    const headerModal = {
      closeModalBtn: document.querySelector("[data-close-modal]"),
      closeModal: document.querySelector("[data-close-modal-button]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    headerModal.closeModalBtn.addEventListener("click", toogleModal);
    headerModal.closeModal.addEventListener("click", toogleModal);
  
    function toogleModal(e) {
      e.preventDefault();
      headerModal.modal.classList.toggle("is-hidden");
    }
  })();
  