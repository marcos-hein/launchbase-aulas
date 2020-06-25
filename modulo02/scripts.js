const modaOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function() {
        modaOverlay.classList.add("active")

    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modaOverlay.classList.remove("active")
})