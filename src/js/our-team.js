const button1 = document.querySelector('#button-arrow-left')
const button2 = document.querySelector('#button-arrow-right')
const text = document.querySelector('.our-team__text')
const name1 = document.querySelector('.our-team__name')
const image = document.querySelector('.our-team__image')
const element1 = document.querySelector('#element1')
const element2 = document.querySelector('#element2')
const stas = document.querySelector('#stas')
const andrey = document.querySelector('#andrey')
let index = 1

console.log(button1)

// button1.addEventListener("click", () => {
//     if (image.src.endsWith("andrey.jpg")) {
//         image.src = "./img/stas.jpg";
//         name1.innerHTML = "Стас Трунов";
//         text.innerHTML = "Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino";
//         element2.style.width = '30px';
//         element2.style.backgroundColor = '#797979'
//         element1.style.width = '18px'
//         element1.style.backgroundColor = '#D9D9D9'
//     } else {
//         image.src = "./img/andrey.jpg";
//         name1.innerHTML = "Андрій Норик";
//         text.innerHTML =
//             "Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football";
//         element1.style.width = '30px';
//         element1.style.backgroundColor = '#797979'
//         element2.style.width = '18px'
//         element2.style.backgroundColor = '#D9D9D9'
//     }
// });

// button2.addEventListener("click", () => {
//     if (image.src.endsWith("andrey.jpg")) {
//         image.src = "./img/stas.jpg";
//         name1.innerHTML = "Стас Трунов";
//         text.innerHTML = "Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino";
//         element2.style.width = '30px'
//         element2.style.backgroundColor = '#797979'
//         element1.style.width = '18px'
//         element1.style.backgroundColor = '#D9D9D9'
//     } else {
//         image.src = "./img/andrey.jpg";
//         name1.innerHTML = "Андрій Норик";
//         text.innerHTML =
//             "Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football";
//         element1.style.width = '30px';
//         element1.style.backgroundColor = '#797979'
//         element2.style.width = '18px'
//         element2.style.backgroundColor = '#D9D9D9'
//     }
// });

button1.addEventListener("click", () => {
    if (index === 1) {
        stas.style.display = 'inherit';
        andrey.style.display = "none";
        name1.innerHTML = "Стас Трунов";
        text.innerHTML = "Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino, та tic tac toe";
        element2.style.width = '30px'
        element2.style.backgroundColor = '#797979'
        element1.style.width = '18px'
        element1.style.backgroundColor = '#D9D9D9'
        index += 1
    } else if (index === 2) {
        andrey.style.display = "inherit";
        stas.style.display = "none";
        name1.innerHTML = "Андрій Норик";
        text.innerHTML =
            "Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football";
        element1.style.width = '30px';
        element1.style.backgroundColor = '#797979'
        element2.style.width = '18px'
        element2.style.backgroundColor = '#D9D9D9'
        index -= 1
    }
    }
);

button2.addEventListener("click", () => {
    if (index === 1) {
        stas.style.display = 'inherit';
        andrey.style.display = "none";
        name1.innerHTML = "Стас Трунов";
        text.innerHTML = "Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino, та tic tac toe";
        element2.style.width = '30px'
        element2.style.backgroundColor = '#797979'
        element1.style.width = '18px'
        element1.style.backgroundColor = '#D9D9D9'
        index += 1
    } else if (index === 2) {
        andrey.style.display = "inherit";
        stas.style.display = "none";
        name1.innerHTML = "Андрій Норик";
        text.innerHTML =
            "Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football";
        element1.style.width = '30px';
        element1.style.backgroundColor = '#797979'
        element2.style.width = '18px'
        element2.style.backgroundColor = '#D9D9D9'
        index -= 1
    }
});



