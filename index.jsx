const mainContainer = document.querySelector(".main-container");

const thanksContainer = document.querySelector(".thank-you");

const submitBtn = document.getElementById("submit")
const rateBtn = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateBtn.addEventListener("click", () =>{
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})