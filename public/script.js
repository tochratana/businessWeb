const toggle = document.querySelector(".toggle");
const navLists = document.querySelector(".nav-lists");

toggle.addEventListener("click", function () {
  navLists.classList.toggle("active");
});
