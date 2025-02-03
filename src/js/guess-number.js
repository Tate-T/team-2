const button = document.querySelector('.guess-number__button')
const text = document.querySelector('.guess-number__text')
const input = document.querySelector('.guess-number__input')
button.addEventListener('click', () => {
    let randomNum = Math.round(Math.random() * (10 - 1) + 1)
    if (Number(input.value) === randomNum){
        text.innerHTML = `Вітаю, ви вгадали число! (${randomNum})`
    } else if (isNaN(input.value)){
        text.innerHTML = `Ви ввели не число`
    } else if (Number(input.value) > 10){
        text.innerHTML = `Ваше число занадто велике`
    } else if (Number(input.value) !== randomNum) {
        text.innerHTML = `Ви не вгадали! Загадане число було (${randomNum})`
    }  
})