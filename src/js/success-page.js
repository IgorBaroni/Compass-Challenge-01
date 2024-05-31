// Changing message through parameters
function changeBodyText() {
  const url = new URL(window.location.href);
  const actionType = url.searchParams.get("action");
  const text = document.getElementById("message-text");
  const image = document.getElementById("success-image");

  if (actionType === "donation") {
    text.innerHTML =
      "Thank you for your generous donation! Your support means the world to us and will make a real difference in the lives of the animals we care for. Your contribution helps us provide food, shelter, medical care, and love to those in need. We are really grateful for your kindness and generosity!";
    image.src = "../assets/images/success-page/dog.png";
  } else if (actionType === "adoption") {
    text.innerHTML =
      "Thank you for applying to adopt an animal! Your application has been successfully submitted. We will review it carefully and get back to you as soon as possible through email. Thank you for considering adoption!";
    image.src = "../assets/images/success-page/cat.png";
  } else if (actionType === "subscription") {
    text.innerHTML =
      "Thank you for subscribing to our newsletter! Your support means the world to us and the animals we care for. By joining our community, you're helping us spread awareness and find loving homes for our furry friends. Get ready for heartwarming stories, adorable pet updates, and exclusive adoption opportunities delivered straight to your email.";
    image.src = "../assets/images/success-page/image-group3.png";
  }
}

changeBodyText();

// Routes
document.getElementById("back-btn").addEventListener("click", () => {
  window.location = "../../index.html";
});

// Donate Modal
const donateModal = document.getElementById("donate-modal");

document.getElementById("donate-button").addEventListener("click", () => {
  donateModal.showModal();

  document.getElementById("donate-email-input").blur();

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

document.getElementById("help-button").addEventListener("click", () => {
  window.location = "success-page.html?action=donation";
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
