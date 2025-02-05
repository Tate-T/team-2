const button1 = document.querySelector('#button-arrow-left')
const button2 = document.querySelector('#button-arrow-right')
const text = document.querySelector('.our-team__text')
const name1 = document.querySelector('.our-team__name')
const image = document.querySelector('.our-team__image')
const element1 = document.querySelector('#element1')
const element2 = document.querySelector('#element2')

button1.addEventListener("click", () => {
    if (image.src.endsWith("therock.jpg")) {
        image.src = "../img/dicaprio.jpg";
        name1.innerHTML = "Leonardo Dicaprio";
        text.innerHTML = "Знімався в фільмах: Поймай мене якщо сможешь, Початок, Проклятий Острів";
        element2.style.width = '30px';
        element2.style.backgroundColor = '#797979'
        element1.style.width = '18px'
        element1.style.backgroundColor = '#D9D9D9'
    } else {
        image.src = "../img/therock.jpg";
        name1.innerHTML = "The Rock";
        text.innerHTML =
            "Знімався в фільмах: Джуманджи, Форсаж, Красне Повідомлення";
        element1.style.width = '30px';
        element1.style.backgroundColor = '#797979'
        element2.style.width = '18px'
        element2.style.backgroundColor = '#D9D9D9'
    }
});

button2.addEventListener("click", () => {
    if (image.src.endsWith("therock.jpg")) {
        image.src = "../img/dicaprio.jpg";
        name1.innerHTML = "Leonardo Dicaprio";
        text.innerHTML = "Знімався в фільмах: Поймай мене якщо сможешь, Початок, Проклятий Острів";
        element2.style.width = '30px'
        element2.style.backgroundColor = '#797979'
        element1.style.width = '18px'
        element1.style.backgroundColor = '#D9D9D9'
    } else {
        image.src = "../img/therock.jpg";
        name1.innerHTML = "The Rock";
        text.innerHTML =
            "Знімався в фільмах: Джуманджи, Форсаж, Красне Повідомлення";
        element1.style.width = '30px';
        element1.style.backgroundColor = '#797979'
        element2.style.width = '18px'
        element2.style.backgroundColor = '#D9D9D9'
    }
});
