const burger__btn = document.querySelector(".burger__btn");
const navigation = document.querySelector(".navigation");
burger__btn.addEventListener("click", () => {
    burger__btn.classList.toggle("open");
    navigation.classList.toggle("open");
    navigation.style=("transition: .5s ease")
   
});


const chevron = document.querySelector(".fa-chevron-down");
const under = document.querySelector(".under");
chevron.addEventListener("click", () => {
    chevron.classList.toggle("open");
    under.classList.toggle("open");
    under.style=("transition: .5s ease")
   
});

const right = document.querySelector(".right");
const time__modal = document.querySelector(".time__modal");
right.addEventListener("click", () => {
    right.classList.toggle("active");
    time__modal.classList.toggle("active");
    
});


const nav = document.querySelector(".nav ul li");
nav.addEventListener("click", () => {
    nav.nextElementSibling.classList.toggle("open")
    nav.querySelector("i").classList.toggle("open");
   
});

var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    axis: "vertical",
    speed: 300,
    
  });

