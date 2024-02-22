"use strict";
const btnPrevious = document.getElementById("btnPrevious");
const btnNext = document.getElementById("btnNext");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".see-review");

const openModal = function () {
  console.log("See Review Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const imageFiles = ["acorient.png", "leviathan.jpg"];
let currentIndexImage = 0;

// function to change the image
function changeBook() {
  const imageEl = document.getElementById("image");
  imageEl.src = imageFiles[currentIndexImage];
}
// function incorporating the changeBook function to go back to previous image
function prevImage() {
  currentIndexImage =
    (currentIndexImage - 1 + imageFiles.length) % imageFiles.length;
  changeBook();
}
// function incorporating the changeBook function to go to next image
function nextImage() {
  currentIndexImage =
    (currentIndexImage + 1 + imageFiles.length) % imageFiles.length;
  changeBook();
}

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

changeBook();
