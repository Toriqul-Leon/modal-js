const modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener("click", function () {
  document.querySelector(".modal-overlay").classList.toggle("open-modal");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".modal-overlay").classList.toggle("open-modal");
});
