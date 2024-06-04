// Regexs
const validateEmail = /\w+@\w+\.\w+/;
const validateValue = /\d+/;

// Adoptables Page Route
const viewAdoptablesButtons = document.querySelectorAll(".view-adop-btn");

viewAdoptablesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location = "src/view/adoptables-page.html";
  });
});

// Success Page Route
const subscribeButton = document.getElementById("subscribe-btn");
const subscribeInput = document.getElementById("subscribe-email-input");

subscribeButton.addEventListener("click", () => {
  if (validateEmail.test(subscribeInput.value)) {
    window.location = "src/view/success-page.html?action=subscription";
  } else {
    alert("Enter a valid email!");
  }
});

// Carousel
const rightArrow = document.getElementById("arrow-right");
const leftArrow = document.getElementById("arrow-left");
let carouselImages = document.querySelectorAll(".carousel-image");
let counter = 1;

// Carousel Dots
const dots = document.querySelectorAll(".dot");

dots[0].classList.add("dot-selected");

function changeDotColor() {
  // Remove color from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot-selected");
  }
  // Add color to new dot
  dots[counter - 1].classList.add("dot-selected");
}

let imgNumber = 1;
let result;
function addImage() {
  imgNumber++;
  carouselImages.forEach((image, index) => {
    if (imgNumber == 6) {
      imgNumber = 1;
    }

    result = imgNumber + index;

    if (result == 6) {
      result = 1;
    } else if (result == 7) {
      result = 2;
    } else if (result == 8) {
      result = 3;
    }

    image.src = `src/assets/images/desktop-page/carousel/img-${result}.png`;

    image.classList.remove("changePicture");
    setTimeout(() => {
      image.classList.add("changePicture");
    }, 0);
  });
}

let result2;
function removeImage() {
  imgNumber--;
  carouselImages.forEach((image, index) => {
    if (imgNumber == 0) {
      imgNumber = 5;
    }

    result2 = imgNumber + index;

    if (result2 == 6) {
      result2 = 1;
    } else if (result2 == 7) {
      result2 = 2;
    } else if (result2 == 8) {
      result2 = 3;
    }
    image.src = `src/assets/images/desktop-page/carousel/img-${result2}.png`;

    image.classList.remove("changePicture");
    setTimeout(() => {
      image.classList.add("changePicture");
    }, 0);
  });
}

rightArrow.addEventListener("click", () => {
  // Changing counter value
  if (counter < 5) {
    counter++;
  } else if ((counter = 6)) {
    counter = 1;
  }
  addImage();
  changeDotColor();
});

leftArrow.addEventListener("click", () => {
  // Changing counter value
  if (counter > 1) {
    counter--;
  } else if ((counter = 1)) {
    counter = 5;
  }
  removeImage();
  changeDotColor();
});

// Donate Modal
const donateModal = document.getElementById("donate-modal");

const donateButtons = document.querySelectorAll(".heart-btn");

const valueInput = document.getElementById("value-input");
const emailInput = document.getElementById("donate-email-input");

donateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    donateModal.showModal();

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

valueInput.addEventListener("change", () => {
  valueInput.value = "R$ " + parseFloat(valueInput.value).toFixed(2);
});

document.getElementById("help-button").addEventListener("click", () => {
  if (
    validateValue.test(valueInput.value) &&
    validateEmail.test(emailInput.value)
  ) {
    window.location = "src/view/success-page.html?action=donation";
  } else if (validateEmail.value == "" && valueInput.value == "") {
    alert("Fill in all the blanks!");
  } else if (!validateValue.test(valueInput.value)) {
    alert("Fill in the value blank with a valid numeric value!");
  } else if (!validateEmail.test(valueInput.value)) {
    alert("Fill in the email blank with a valid email!");
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

// Adopt Modal
const adoptModal = document.getElementById("adopt-modal");

const adoptButtons = document.querySelectorAll(".apply-adopt-btn");

const adoptemailInput = document.getElementById("adopt-email-input");
const usernameInput = document.getElementById("user-name-input");
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const policyCheckbox = document.getElementById("checkbox");

adoptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    adoptModal.showModal();

    document.getElementById("adopt-email-input").blur();

    adoptModal.classList.add("show");
    adoptModal.classList.remove("hide");
  });
});

document.getElementById("adopt-cancel-button").addEventListener("click", () => {
  adoptModal.classList.remove("show");
  adoptModal.classList.add("hide");

  setTimeout(() => {
    adoptModal.close();
  }, 250);
});

document.getElementById("adopt-button").addEventListener("click", () => {
  if (
    validateEmail.test(adoptemailInput.value) &&
    usernameInput.value.length > 10 &&
    dayInput.value > 0 &&
    monthInput.value > 0 &&
    yearInput.value > 0 &&
    policyCheckbox.checked
  ) {
    window.location = "src/view/success-page.html?action=adoption";
  } else if (!policyCheckbox.checked) {
    alert("You need to agree with our Privacy Policy and Terms of Conditions!");
  } else if (dayInput.value > 31 || monthInput.value > 12 || (yearInput.value < 1800 && yearInput.value > 3000)) {
    alert("You need to enter valid date values!");
  } else {
    alert("Fill in all the blanks with valid information!");
  }
});
