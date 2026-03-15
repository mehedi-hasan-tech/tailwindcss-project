const body = document.body;
const hambarger = document.getElementById("hambarger");
const menu = document.getElementById("menu");
const crossIcon = document.getElementById("cross-icon");
const tabSearch = document.getElementById("search");
const items = document.querySelectorAll("#list_item li")
const items2 = document.querySelectorAll("#next_list li")


hambarger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    body.classList.add("hide-class");
    tabSearch.classList.add("hide-class2");
});

crossIcon.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    body.classList.remove("hide-class");
    tabSearch.classList.remove("hide-class2");
 });

 items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(el => el.classList.remove("active"));
        item.classList.add("active")
    })
 });

items2.forEach(item => {
    item.addEventListener("click", () => {
        items2.forEach(el => el.classList.remove("active"));
        item.classList.add("active")
    })
 });

