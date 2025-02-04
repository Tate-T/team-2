const inputs = document.querySelectorAll('.three-numbers__input')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const text = document.querySelector('.three-numbers__text')

let text1;
let text2;
let text3;

num1.addEventListener('change', () => {
    text1 = true

    if (text1 === true || text2 === true || text3 === true){
        if (num1.value === '' || num2.value === '' || num3.value === ''){
            text.innerHTML = 'В вас є пустий інпут'
        } else if(isNaN(num1.value) || isNaN(num2.value) || isNaN(num3.value)){
            text.innerHTML = 'Ви не ввели число в інпуті'
        } else {
            text.innerHTML = `Найбільше число, яке ви ввели - (${Math.max(Number(num1.value), Number(num2.value), Number(num3.value))})`
        }
    }
})

num2.addEventListener('change', () => {
    text2 = true

    if (text1 === true || text2 === true || text3 === true){
        if (num1.value === '' || num2.value === '' || num3.value === ''){
            text.innerHTML = 'В вас є пустий інпут'
        } else if(isNaN(num1.value) || isNaN(num2.value) || isNaN(num3.value)){
            text.innerHTML = 'Ви не ввели число в інпуті'
        } else {
            text.innerHTML = `Найбільше число, яке ви ввели - (${Math.max(Number(num1.value), Number(num2.value), Number(num3.value))})`
        }
    }
})

num3.addEventListener('change', () => {
    text3 = true

    if (text1 === true || text2 === true || text3 === true){
        if (num1.value === '' || num2.value === '' || num3.value === ''){
            text.innerHTML = 'В вас є пустий інпут'
        } else if(isNaN(num1.value) || isNaN(num2.value) || isNaN(num3.value)){
            text.innerHTML = 'Ви не ввели число в інпуті'
        } else {
            text.innerHTML = `Найбільше число, яке ви ввели - (${Math.max(Number(num1.value), Number(num2.value), Number(num3.value))})`
        }
    }
})



