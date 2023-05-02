const shareButtons = document.querySelectorAll("button.share-button");
const mainButton = shareButtons[0];
mainButton.addEventListener("click", (e) => {
    mainButton.firstElementChild.classList.toggle("fa-times")
    for (let i = 0; i < shareButtons.length; i++) {
        shareButtons[i].classList.toggle("open")
    }
})

for (let i = 1; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener("click", (e) => {
        for (let i = 0; i < shareButtons.length; i++) {
            shareButtons[i].classList.toggle("open")
            mainButton.firstElementChild.classList.toggle("fa-times")
        }
    })
}
