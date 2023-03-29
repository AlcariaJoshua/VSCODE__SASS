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


const kamote = document.querySelectorAll('.nav__btn');
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener('click', () => {
        kamoteq.nextElementSibling.classList.toggle('open');
        kamoteq.querySelector("i").classList.toggle("open");
       
    })
})

var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    axis: "vertical",
    speed: 300,
    
  });

// const links = document.querySelectorAll(".links");
// const des = document.querySelectorAll(".des");

// links.forEach((link) => {
//     link.addEventListener('click', () =>{
//         removeActiveStar();
//         link.classList.add('active');
//         const Content= document.querySelector(`#${link.id}-content`);
//         removeActiveContent();
//         Content.classList.add("active");
//       })
// })

// function removeActiveStar() {
//     links.forEach((link) => {
//       link.classList.remove('active');
//     })
//   }
//   function removeActiveContent() {
//     des.forEach((link) => {
//       link.classList.remove('active');
//     })
//   }
const link = document.querySelectorAll(".links");
const des = document.querySelectorAll(".des");
link.forEach((star) => {
  star.addEventListener('click', () =>{
    removeActiveStar();
    star.classList.add('active');
    const activeContent= document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
});

function removeActiveStar() {
  link.forEach((star) => {
    star.classList.remove('active');
  })
}
function removeActiveContent() {
  des.forEach((star) => {
    star.classList.remove('active');
  })
}