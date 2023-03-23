const toggle = document.querySelector(".toggle__menu");
const nav = document.querySelector(".header__nav");



toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
})

// new

const headerB = document.querySelector(".header");

window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if(window.pageYOffset >= 100){
        headerB.classList.remove("shadow");
    }
    else{
        headerB.classList.add("shadow");
    }
});



