const mobile_menu= document.querySelector("#mobile-menu")   //hamburgur icon
const navbar_menu= document.querySelector(".navbar_menu")
const navLogo= document.querySelector("#navbar-logo")

//display navbar mobile menu when hamburger icon clicked
mobile_menu.addEventListener("click",() => {
    mobile_menu.classList.toggle("is-active")
    navbar_menu.classList.toggle("active")
});


//highlight active navbar menu items when scrolling
const highlightMenu= () => {
    const element= document.querySelector(".highlight")  
    const homeMenu= document.querySelector("#home-page")
    const aboutMenu= document.querySelector("#about-page")
    const servicesMenu= document.querySelector("#services-page")
    let scrollPos= window.scrollY   //number of px scrolled in Y axis of webpage
    // console.log(scrollPos)

    //add highlight class to menu items
    if(window.innerWidth > 960 && scrollPos < 600){  //show highlight only on bigger screen width
        homeMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return 
    }
    else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add("highlight")
        homeMenu.classList.remove("highlight")  //remove class from its adjacent sections
        servicesMenu.classList.remove("highlight")
        return
    }
    else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    }

    //remove highlight line from navbar mobile menu
    if( (element && window.innerWidth<960 && scrollPos<600) || element){
        element.classList.remove("highlight")
    }
}
window.addEventListener("scroll",highlightMenu)
window.addEventListener("click",highlightMenu)


//close navbar mobile menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars= document.querySelector(".is-active")
    if(window.innerWidth <= 768 && menuBars){
        mobile_menu.classList.toggle("is-active")
        navbar_menu.classList.toggle("active")
    }
}
navbar_menu.addEventListener("click",hideMobileMenu)
navLogo.addEventListener("click",hideMobileMenu)



