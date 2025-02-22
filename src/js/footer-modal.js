(() => {
  const modal = {
    openModalBtn: document.querySelector("[data-footer-modal-open]"),
    closeModal: document.querySelector("[data-close-footer-modal]"),
    footerModal: document.querySelector("[data-footer-modal]"),
  };

  modal.openModalBtn.addEventListener("click", function () {
    const emailInput = document.querySelector("#emailInput");
    const email = emailInput.value.trim();

    if (email === "" || !email.includes("@")) {
      alert("Будь ласка, введіть коректну електронну адресу.");
      return;
    }

    toggleModal();
  });

  modal.closeModal.addEventListener("click", toggleModal);

  function toggleModal() {
    modal.footerModal.classList.toggle("is-hidden");
  }
})();
