const bars = document.getElementById("hambargar")
const navlist = document.getElementById("hambargar_nav")
const headerBar = document.getElementById("header_bar_icon")
const crossIcon = document.getElementById("crossIcon")
const items = document.querySelectorAll("#list_item li")
const parents= document.querySelectorAll(".parent-li")

bars.addEventListener("click", () => {
    navlist.classList.toggle("hidden")
    if(navlist.classList.contains("hidden")){
        crossIcon.classList.add("cross")
        headerBar.classList.remove("bar_line2")
    }else{
        crossIcon.classList.remove("cross")
        headerBar.classList.add("bar_line2")
    }
})

items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach(el => el.classList.remove("active"));
        item.classList.add("active")
    })
})

parents.forEach((parent) => {
    parent.addEventListener("click", () => {
        const childs = parent.querySelector(".child-ul")
        if(childs){
            childs.classList.toggle("hidden")
        }
    })
})

