const input1 = document.querySelector('.calculator__input1')
const input2 = document.querySelector('.calculator__input2')
const input3 = document.querySelector('.calculator__input3')

const sumBtn = document.querySelector('#button1')
const multBtn = document.querySelector('#button2')
const subBtn = document.querySelector('#button3')
const divBtn = document.querySelector('#button4')
const equals = document.querySelector('.calculator__equals')

function sum(a, b){
    return a + b
}
function mult(a, b){
    return a * b
}
function sub(a, b){
    return a - b
}
function div(a, b){
    return a / b
}

let sumClicked = false;
let multClicked  = false;
let subClicked  = false;
let divClicked  = false;

sumBtn.addEventListener("click", () => {
    sumClicked = true;
    divClicked = false;
    multClicked = false;
    subClicked = false;
})

multBtn.addEventListener("click", () => {
    multClicked = true;
    sumClicked = false;
    divClicked = false;
    subClicked = false;
})

subBtn.addEventListener("click", () => {
    subClicked = true;
    sumClicked = false;
    multClicked = false;
    divClicked = false;
})

divBtn.addEventListener("click", () => {
    divClicked = true;
    sumClicked = false;
    multClicked = false;
    subClicked = false;
})

equals.addEventListener('click', () => {
    if (sumClicked){
        input3.value = sum(Number(input1.value), Number(input2.value))
    } else if (multClicked){
        input3.value = mult(Number(input1.value), Number(input2.value))
    } else if (subClicked){
        input3.value = sub(Number(input1.value), Number(input2.value))
    } else if (divClicked){
        input3.value = div(Number(input1.value), Number(input2.value))
    }
})

