let menuIcon = document.querySelector("#menuIcon");
let navMenu = document.querySelector("#navMenu");


function toggleMobileMenu(){

    if(navMenu.classList.contains("open")){
        console.log("closing");
        menuIcon.src = "./images/icon-hamburger.svg";
        navMenu.classList.remove("open");
    } else{
        console.log("opening");
        menuIcon.src = "./images/icon-close.svg";
        navMenu.classList.add("open");
    }


}



function init(){
    menuIcon.addEventListener("click", toggleMobileMenu);
}



window.onload = init();