const leftButton1 = document.querySelector("#left-button-1");
const rightButton1 = document.querySelector("#right-button-1");
const leftButton2 = document.querySelector("#left-button-2");
const rightButton2 = document.querySelector("#right-button-2");
const leftButton3 = document.querySelector("#left-button-3");
const rightButton3 = document.querySelector("#right-button-3");
const carousal1 = document.querySelector("#carousal-1");
const carousal2 = document.querySelector("#carousal-2");
const carousal3 = document.querySelector("#carousal-3");




//  first carousal box
leftButton1.addEventListener("click", function () {
    carousal1.classList.add("hidden");
    carousal3.classList.remove("hidden");
})
rightButton1.addEventListener("click", function () {
    carousal1.classList.add("hidden");
    carousal2.classList.remove("hidden");
})


//   second carousal box
leftButton2.addEventListener("click", function () {
    carousal2.classList.add("hidden");
    carousal1.classList.remove("hidden");
})
rightButton2.addEventListener("click", function () {
    carousal2.classList.add("hidden");
    carousal3.classList.remove("hidden");
})


//  third carousal box
leftButton3.addEventListener("click", function () {
    carousal3.classList.add("hidden");
    carousal2.classList.remove("hidden");
})
rightButton3.addEventListener("click", function () {
    carousal3.classList.add("hidden");
    carousal1.classList.remove("hidden");
})
