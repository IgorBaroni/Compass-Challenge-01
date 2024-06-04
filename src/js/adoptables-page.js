// Routes
document.getElementById("back-button").addEventListener("click", () => {
  window.location = "../../index.html";
});

// Donate Modal
const donateModal = document.getElementById("donate-modal");

const valueInput = document.getElementById("value-input");
const emailInput = document.getElementById("donate-email-input");

document.getElementById("donate-button").addEventListener("click", () => {
  donateModal.showModal();

  donateModal.classList.add("show");
  donateModal.classList.remove("hide");
});

document.getElementById("cancel-button").addEventListener("click", () => {
  donateModal.classList.remove("show");
  donateModal.classList.add("hide");

  setTimeout(() => {
    donateModal.close();
  }, 250);
});

valueInput.addEventListener("change", () => {
  valueInput.value = "R$ " + parseFloat(valueInput.value).toFixed(2);
});

const validateEmail = /\w+@\w+\.\w+/
const validateValue = /\d+/

document.getElementById("help-button").addEventListener("click", () => {
  if (validateValue.test(valueInput.value) && validateEmail.test(emailInput.value)) {
    window.location = "success-page.html?action=donation";
  } else {
    alert("Fill in all the blanks with valid information!");
  } 
});

const paymentMethods = document.querySelectorAll(".payment-method");
const paymentInputs = document.querySelectorAll(".payment-input");

paymentMethods[0].classList.add("selected");
paymentInputs[0].checked = true;

paymentMethods.forEach((option, index) => {
  option.addEventListener("click", () => {
    for (let i = 0; i < paymentMethods.length; i++) {
      paymentMethods[i].classList.remove("selected");
    }
    option.classList.add("selected");

    for (let i = 0; i < paymentInputs.length; i++) {
      paymentInputs[i].checked = false;
    }

    paymentInputs[index].checked = true;
  });
});
