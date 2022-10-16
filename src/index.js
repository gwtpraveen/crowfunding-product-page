import "./styles/main.scss";

const dispalyThankz = () => {
    window.scroll({
        top: 0,
    });
    document.body.classList.remove("choose");
    document.body.classList.add("thankz");
};

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

// choose reward
const selectRewardBtns = document.querySelectorAll(".card .card-footer .btn");
const modalCloseIcon = document.querySelector(".choose-div .close-icon");
const chooseDivEle = document.querySelector(".choose-div");

selectRewardBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.classList.add("choose");
    })
});

modalCloseIcon.addEventListener("click", () => {
    document.body.classList.remove("choose");
});

// the modal closes when the user clicks the outside of the modal.
chooseDivEle.addEventListener("click", e => {
    console.log(e.target)
    if (e.target.className === "choose-div") {
        document.body.classList.remove("choose");
    }
});

// choose piedge
const rowEles = document.querySelectorAll(".choose-div .row");
const continuBtns = document.querySelectorAll(".row-footer .btn");

rowEles.forEach(row => {
    row.addEventListener("click", e => {
        if (e.target.className === "row-title" || e.target.className === "header-title") {
            rowEles.forEach(rows => rows.classList.remove("active"));
            if (!row.classList.contains("disable")) {
                row.classList.add("active");

                if (row.classList.contains("row-none")) {
                    dispalyThankz();
                }
            }
        }
    });
});

continuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        dispalyThankz();
    });
});

// thankz div 
const gotItBtn = document.querySelector(".thankz-div .btn");
const thankzDiv = document.querySelector(".thankz-div");

gotItBtn.addEventListener("click", () => {
    document.body.classList.remove("thankz");
});

thankzDiv.addEventListener("click", () => {
    document.body.classList.remove("thankz");
});
