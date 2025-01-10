const mobile_menu= document.querySelector("#mobile-menu")
const navbar_menu= document.querySelector(".navbar_menu")

//display mobile menu when hamburger icon clicked
mobile_menu.addEventListener("click",() => {
    mobile_menu.classList.toggle("is-active")
    navbar_menu.classList.toggle("active")
});