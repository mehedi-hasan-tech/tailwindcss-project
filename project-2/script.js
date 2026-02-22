const menuIcon = document.getElementById("menu-btn");
const menuBar = document.getElementById("menu");
const img = document.getElementById("image");

menuIcon.addEventListener("click",() => {
    menuBar.classList.toggle("hidden")
})
