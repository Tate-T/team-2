// const overlay1 = document.querySelector('#overlay1')
// const overlay2 = document.querySelector('#overlay2')
// const overlay3 = document.querySelector('#overlay3')
// const overlay4 = document.querySelector('#overlay4')
// const overlay5 = document.querySelector('#overlay5')
// const overlay6 = document.querySelector('#overlay6')
// const overlay7 = document.querySelector('#overlay77')
// const overlay8 = document.querySelector('#overlay8')
// const overlay9 = document.querySelector('#overlay9')
// const overlay10 = document.querySelector('#overlay10')
// const overlay11 = document.querySelector('#overlay11')
// const overlay12 = document.querySelector('#overlay12')
let overlays = document.querySelectorAll('.select-scientist__overlay')

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const button5 = document.querySelector('#button5')
const button6 = document.querySelector('#button6')
const button7 = document.querySelector('#button7')
const button8 = document.querySelector('#button8')
const button9 = document.querySelector('#button9')
const button10 = document.querySelector('#button10')

button10.addEventListener('click', () => {
    for (let overlay of overlays){
        overlay.style.backgroundColor = 'transparent'
    }
})

button1.addEventListener('click', () => {
    for (let i = 0; i < overlays.length; i++){
        switch (i + 1) {
            case 1: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            case 2: 
                overlays[i].style.backgroundColor = '#D9D9D9';
                break;
            case 3: 
                overlays[i].style.backgroundColor = '#D9D9D9';
                break;
            case 4: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            case 5: 
                overlays[i].style.backgroundColor = '#D9D9D9';
                break;
            case 6: 
                overlays[i].style.backgroundColor = '#D9D9D9';
                break;
            case 7: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            case 8: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            case 9: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            case 10: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            case 11: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            case 12: 
                overlays[i].style.backgroundColor = 'transparent';
                break;
            default:
                break;
        }
    }
});

