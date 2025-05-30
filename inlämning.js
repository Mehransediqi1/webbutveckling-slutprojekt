var hamburgerMenu = document.querySelector(".hamburger-menu")
var hambergerMenuList = document.querySelector(".hamburger-menu-list")
var cross = document.querySelector(".remove")

hamburgerMenu.addEventListener("click", () => {
    hambergerMenuList.classList.add("active")
})

cross.addEventListener("click", () => {
    hambergerMenuList.classList.remove("active")
})
