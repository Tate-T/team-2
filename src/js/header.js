const button1 = document.querySelector('#header-button1')
const button2 = document.querySelector('#header-button2')
const allTags = document.querySelectorAll("h1, h2, h3, h4, h5, h6, a, p, input, button, svg, section");
const sections = document.querySelectorAll('section')
const header = document.querySelector('header')

button1.addEventListener('click', () => {
    button1.style.display = 'none';
    button2.style.display = 'inherit'
    document.body.style.backgroundColor = '#2E2E2E'
    header.style.backgroundColor = '#2E2E2E'
    for (let tag of allTags){
        tag.style.color = '#FFFFFF'

    }

    for (let section of sections){
        section.style.backgroundColor = '#2E2E2E'
    }
    
})

button2.addEventListener('click', () => {
    button2.style.display = 'none'
    button1.style.display = 'inherit';
    document.body.style.backgroundColor = '#FFFFFF'
    header.style.backgroundColor = '#FFFFFF'
    for (let tag of allTags){
        tag.style.color = '#000000'
    }

    for (let section of sections){
        section.style.backgroundColor = '#FFFFFF'
    }
})