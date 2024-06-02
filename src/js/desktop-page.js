// Adoptables Page Route
const viewAdoptablesButtons = document.querySelectorAll(".view-adop-btn");

viewAdoptablesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location = "src/view/adoptables-page.html";
  });
});

// Success Page Route
const subscribeButton = document.getElementById("subscribe-btn");

subscribeButton.addEventListener("click", () => {
  window.location = "src/view/success-page.html?action=subscription";
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
  });
}

let result2;
let imgNumber2 = 6;
function removeImage() {
  imgNumber2--;
  carouselImages.forEach((image, index) => {
    if (imgNumber2 == 0) {
      imgNumber2 = 5;
    }

    result2 = imgNumber2 + index;

    if (result2 == 6) {
      result2 = 1;
    } else if (result2 == 7) {
      result2 = 2;
    } else if (result2 == 8) {
      result2 = 3;
    }

    console.log(result2);

    image.src = `src/assets/images/desktop-page/carousel/img-${result2}.png`;
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
  window.location = "src/view/success-page.html?action=donation";
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
  window.location = "src/view/success-page.html?action=adoption";
});
