let inputBox = document.querySelector(".input-box"),
search = document.querySelector(".search"),
closeIcon = document.querySelector(".close-icon");

search.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));