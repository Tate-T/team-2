const button = document.querySelector('.check-age__button')
const text = document.querySelector('.check-age__text')
const input = document.querySelector('.check-age__input')

function leapYear (year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

button.addEventListener('click', () => {
    if (leapYear(Number(input.value)) === true){
        text.innerHTML = 'Ви народилися у високосний рік!'
        text.style.color = '#039900'
    } else if (isNaN(input.value)){
        text.innerHTML = `Ви ввели не рік`
    } else if (leapYear(Number(input.value)) === false) {
        text.innerHTML = 'Ви народилися у звичайному році!'
        text.style.color = '#039900'
    }
})