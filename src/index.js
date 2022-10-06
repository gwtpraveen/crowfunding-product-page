import "./styles/main.scss";

// navigation bar
const navEl = document.getElementById("nav");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
    navEl.classList.add("open");
});

closeIcon.addEventListener("click", () => {
    navEl.classList.remove("open");
});


// bookmark button
const bookmarkEl = document.querySelector(".bookmark");

bookmarkEl.addEventListener("click", () => {
    if (bookmarkEl.classList.contains("bookmarked")) {
        bookmarkEl.classList.remove("bookmarked");
        bookmarkEl.lastElementChild.textContent = "Bookmark";
    } else {
        bookmarkEl.classList.add("bookmarked");
        bookmarkEl.lastElementChild.textContent = "Bookmarked";
    }
})