import "./styles/main.scss";

const navEl = document.getElementById("nav");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
    navEl.classList.add("open");
});

closeIcon.addEventListener("click", () => {
    navEl.classList.remove("open");
});