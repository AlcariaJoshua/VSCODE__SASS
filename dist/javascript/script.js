const burger__btn = document.querySelector(".burger__btn");
const navigation = document.querySelector(".navigation");
burger__btn.addEventListener("click", () => {
    burger__btn.classList.toggle("open");
    navigation.classList.toggle("open");
    navigation.style=("transition: .5s ease")

});