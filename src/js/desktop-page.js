// Donate Modal
const donateModal = document.getElementById("donate-modal");

const donateButtons = document.querySelectorAll(".heart-btn");

donateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    donateModal.showModal();

    document.getElementById("donate-email-input").blur();

    donateModal.classList.add("show");
    donateModal.classList.remove("hide");
  });
});

document.getElementById("cancel-button").addEventListener("click", () => {
  donateModal.classList.remove("show");
  donateModal.classList.add("hide");

  setTimeout(() => {
    donateModal.close();
  }, 250);
});

document.getElementById("help-button").addEventListener("click", () => {
  window.location = "src/view/success-page.html";
});

const paymentMethods = document.querySelectorAll(".payment-method");

paymentMethods[0].classList.add("selected");

paymentMethods.forEach((option) => {
  option.addEventListener("click", () => {
    for (let i = 0; i < paymentMethods.length; i++) {
      paymentMethods[i].classList.remove("selected");
    }
    option.classList.add("selected");
  });
});

// Adopt Modal
const adoptModal = document.getElementById("adopt-modal");

document.getElementById("apply-adopt-button").addEventListener("click", () => {
  adoptModal.showModal();

  document.getElementById("adopt-email-input").blur();

  adoptModal.classList.add("show");
  adoptModal.classList.remove("hide");
});

document.getElementById("adopt-cancel-button").addEventListener("click", () => {
  adoptModal.classList.remove("show");
  adoptModal.classList.add("hide");

  setTimeout(() => {
    adoptModal.close();
  }, 250);
});

document.getElementById("adopt-button").addEventListener("click", () => {
  window.location = "src/view/success-page.html";
});