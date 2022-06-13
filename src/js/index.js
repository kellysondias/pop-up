const button = document.getElementById('btn')
const popup = document.querySelector('.popup')

button.addEventListener('click', () => {
    popup.classList.add('show')
})

const popupButton = document.querySelector('.popup-btn')

popupButton.addEventListener('click', () => {
    popup.classList.remove('show')
})