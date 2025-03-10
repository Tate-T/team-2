const overlays = document.querySelectorAll('.select-scientist__overlay')

const nameSpans = document.querySelectorAll('.scientist-name')
const surnameSpans = document.querySelectorAll('.scientist-surname')
const bornSpans = document.querySelectorAll('.scientist-born')
const deadSpans = document.querySelectorAll('.scientist-dead')

const button1 = document.querySelector('#button1id')
const button2 = document.querySelector('#button2id')
const button3 = document.querySelector('#button3id')
const button4 = document.querySelector('#button4id')
const button5 = document.querySelector('#button5id')
const button6 = document.querySelector('#button6id')
const button7 = document.querySelector('#button7id')
const button8 = document.querySelector('#button8id')
const button9 = document.querySelector('#button9id')
const button10 = document.querySelector('#button10id')

const button11 = document.querySelector('#button1id2')
const button12 = document.querySelector('#button2id2')
const button13 = document.querySelector('#button3id2')
const button14 = document.querySelector('#button4id2')
const button15 = document.querySelector('#button5id2')
const button16 = document.querySelector('#button6id2')
const button17 = document.querySelector('#button7id2')
const button18 = document.querySelector('#button8id2')
const button19 = document.querySelector('#button9id2')
const button20 = document.querySelector('#button10id2')



console.log(button1)

button10.addEventListener('click', () => {
    for (let overlay of overlays){
        overlay.style.backgroundColor = 'transparent'
    }
})

button1.addEventListener('click', () => {
    for (let bornSpan of bornSpans) {
        const birthYear = Number(bornSpan.innerHTML);
        const overlay = bornSpan.closest('.select-scientist__div-item').lastElementChild;
        if ( birthYear < 1900 && birthYear > 1799) {
            overlay.style.backgroundColor = 'transparent';
        } else {
            overlay.style.backgroundColor = 'rgb(217, 217, 217)';
        }
    }
    
});

button2.addEventListener('click', () => {
    for (let nameSpan of nameSpans) {
        if (nameSpan.innerHTML === 'Albert'){
            const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
            overlay.style.backgroundColor = overlay.style.backgroundColor = 'transparent';
        } else {
            const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
            overlay.style.backgroundColor = 'rgb(217, 217, 217)';
        }
    }
    
});

button4.addEventListener('click', () => {
    for (let surnameSpan of surnameSpans) {
        if (surnameSpan.innerHTML.startsWith('C')){
            const overlay = surnameSpan.closest('.select-scientist__div-item').lastElementChild;
            overlay.style.backgroundColor = overlay.style.backgroundColor = 'transparent';
        } else {
            const overlay = surnameSpan.closest('.select-scientist__div-item').lastElementChild;
            overlay.style.backgroundColor = 'rgb(217, 217, 217)';
        }
    }
    
});

button6.addEventListener('click', () => {
    for (let nameSpan of nameSpans) {
        if (nameSpan.innerHTML.startsWith('A')){
            const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
            overlay.style.backgroundColor = overlay.style.backgroundColor = 'rgb(217, 217, 217)';
        } else {
            const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
            overlay.style.backgroundColor = 'transparent';
        }
    } 
});

button7.addEventListener('click', () => {
    let latestYear = 0;
    let latestIndex = 0;
    for (let i = 0; i < bornSpans.length; i++) {
        const birthYear = Number(bornSpans[i].innerHTML);
        if (birthYear > latestYear) {
            latestYear = birthYear;
            latestIndex = i;
        }
    }
    for (let i = 0; i < bornSpans.length; i++) {
        const overlay = bornSpans[i].closest('.select-scientist__div-item').lastElementChild;
        if (i === latestIndex) {
            overlay.style.backgroundColor = 'transparent';
        } else {
            overlay.style.backgroundColor = 'rgb(217, 217, 217)'; 
        }
    }
});



button8.addEventListener('click', () => {
    let indexLong = 0;
    let longestSubYear = 0;
    let indexShort = 0
    let shortestSubYear = Infinity 

    for (let i = 0; i < bornSpans.length; i++) {
        const birthYear = Number(bornSpans[i].innerHTML);
        const deathYear = Number(deadSpans[i].innerHTML);
        const subYear = deathYear - birthYear;
        if (subYear < shortestSubYear) {
            shortestSubYear = subYear;
            indexShort = i;
        }
        if (subYear > longestSubYear) {
            longestSubYear = subYear;
            indexLong = i;
        }
    }


    for (let i = 0; i < bornSpans.length; i++) {
        const overlay = bornSpans[i].closest('.select-scientist__div-item').lastElementChild;
        if (i === indexShort) {
            overlay.style.backgroundColor = 'transparent'; 
        } else if (i === indexLong) {
            overlay.style.backgroundColor = 'transparent';
        } else {
            overlay.style.backgroundColor = 'rgb(217, 217, 217)'; 
        }
    }
})






button9.addEventListener('click', () => {
    for (let i = 0; i < nameSpans.length; i++){
        const overlay = nameSpans[i].closest('.select-scientist__div-item').lastElementChild;
        if (nameSpans[i].innerHTML.trim().charAt(0).toUpperCase() === surnameSpans[i].innerHTML.trim().charAt(0).toUpperCase()) {
            overlay.style.backgroundColor = 'transparent';
        } else {
            overlay.style.backgroundColor = 'rgb(217, 217, 217)';
        }
    }
})



button3.addEventListener('click', () => {
    const list = document.querySelector('.select-scientist__div-list');
    const items = [...list.querySelectorAll('.select-scientist__div-item')];
    
    items.sort((a, b) => {
        const nameA = a.querySelector('.scientist-name').innerHTML.trim().toUpperCase();
        const nameB = b.querySelector('.scientist-name').innerHTML.trim().toUpperCase();
        list.innerHTML = ''
        return nameA.localeCompare(nameB);
    });
    items.forEach((item) => {
        list.appendChild(item)
        const overlay = item.lastElementChild;
        overlay.style.backgroundColor = 'transparent';
    })
    for (let i = 0; i < items.length; i++){
        const itemId = items[i].querySelector('.select-scientist__id');
        itemId.innerHTML = `${i + 1}.`
    }
});


button5.addEventListener('click', () => {
    const list = document.querySelector('.select-scientist__div-list');
    const items = [...list.querySelectorAll('.select-scientist__div-item')];
    
    items.sort((a, b) => {
        const ageA = Number(a.querySelector('.scientist-born').innerHTML) -  Number(a.querySelector('.scientist-dead').innerHTML);
        const ageB = Number(b.querySelector('.scientist-born').innerHTML) -  Number(b.querySelector('.scientist-dead').innerHTML);
        list.innerHTML = ''
        return ageA - ageB

    });
    items.forEach((item) => {
        list.appendChild(item)
        const overlay = item.lastElementChild;
        overlay.style.backgroundColor = 'transparent';
    })
    for (let i = 0; i < items.length; i++){
        const itemId = items[i].querySelector('.select-scientist__id');
        itemId.innerHTML = `${i + 1}.`
    }
});



















// spanElement.closest('.select-scientist__div-item')



















// for (let i = 0; i < overlays.length; i++){

    //     switch (i + 1) {
    //         case 1: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         case 2: 
    //             overlays[i].style.backgroundColor = '#D9D9D9';
    //             break;
    //         case 3: 
    //             overlays[i].style.backgroundColor = '#D9D9D9';
    //             break;
    //         case 4: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         case 5: 
    //             overlays[i].style.backgroundColor = '#D9D9D9';
    //             break;
    //         case 6: 
    //             overlays[i].style.backgroundColor = '#D9D9D9';
    //             break;
    //         case 7: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         case 8: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         case 9: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         case 10: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         case 11: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         case 12: 
    //             overlays[i].style.backgroundColor = 'transparent';
    //             break;
    //         default:
    //             break;
    //     }
    // }



    button20.addEventListener('click', () => {
        for (let overlay of overlays){
            overlay.style.backgroundColor = 'transparent'
        }
    })
    
    button11.addEventListener('click', () => {
        for (let bornSpan of bornSpans) {
            const birthYear = Number(bornSpan.innerHTML);
            const overlay = bornSpan.closest('.select-scientist__div-item').lastElementChild;
            if ( birthYear < 1900 && birthYear > 1799) {
                overlay.style.backgroundColor = 'transparent';
            } else {
                overlay.style.backgroundColor = 'rgb(217, 217, 217)';
            }
        }
        
    });
    
    button12.addEventListener('click', () => {
        for (let nameSpan of nameSpans) {
            if (nameSpan.innerHTML === 'Albert'){
                const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
                overlay.style.backgroundColor = overlay.style.backgroundColor = 'transparent';
            } else {
                const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
                overlay.style.backgroundColor = 'rgb(217, 217, 217)';
            }
        }
        
    });
    
    button14.addEventListener('click', () => {
        for (let surnameSpan of surnameSpans) {
            if (surnameSpan.innerHTML.startsWith('C')){
                const overlay = surnameSpan.closest('.select-scientist__div-item').lastElementChild;
                overlay.style.backgroundColor = overlay.style.backgroundColor = 'transparent';
            } else {
                const overlay = surnameSpan.closest('.select-scientist__div-item').lastElementChild;
                overlay.style.backgroundColor = 'rgb(217, 217, 217)';
            }
        }
        
    });
    
    button16.addEventListener('click', () => {
        for (let nameSpan of nameSpans) {
            if (nameSpan.innerHTML.startsWith('A')){
                const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
                overlay.style.backgroundColor = overlay.style.backgroundColor = 'rgb(217, 217, 217)';
            } else {
                const overlay = nameSpan.closest('.select-scientist__div-item').lastElementChild;
                overlay.style.backgroundColor = 'transparent';
            }
        } 
    });
    
    button17.addEventListener('click', () => {
        let latestYear = 0;
        let latestIndex = 0;
        for (let i = 0; i < bornSpans.length; i++) {
            const birthYear = Number(bornSpans[i].innerHTML);
            if (birthYear > latestYear) {
                latestYear = birthYear;
                latestIndex = i;
            }
        }
        for (let i = 0; i < bornSpans.length; i++) {
            const overlay = bornSpans[i].closest('.select-scientist__div-item').lastElementChild;
            if (i === latestIndex) {
                overlay.style.backgroundColor = 'transparent';
            } else {
                overlay.style.backgroundColor = 'rgb(217, 217, 217)'; 
            }
        }
    });
    
    
    
    button18.addEventListener('click', () => {
        let indexLong = 0;
        let longestSubYear = 0;
        let indexShort = 0
        let shortestSubYear = Infinity 
    
        for (let i = 0; i < bornSpans.length; i++) {
            const birthYear = Number(bornSpans[i].innerHTML);
            const deathYear = Number(deadSpans[i].innerHTML);
            const subYear = deathYear - birthYear;
            if (subYear < shortestSubYear) {
                shortestSubYear = subYear;
                indexShort = i;
            }
            if (subYear > longestSubYear) {
                longestSubYear = subYear;
                indexLong = i;
            }
        }
    
    
        for (let i = 0; i < bornSpans.length; i++) {
            const overlay = bornSpans[i].closest('.select-scientist__div-item').lastElementChild;
            if (i === indexShort) {
                overlay.style.backgroundColor = 'transparent'; 
            } else if (i === indexLong) {
                overlay.style.backgroundColor = 'transparent';
            } else {
                overlay.style.backgroundColor = 'rgb(217, 217, 217)'; 
            }
        }
    })
    
    
    
    
    
    
    button19.addEventListener('click', () => {
        for (let i = 0; i < nameSpans.length; i++){
            const overlay = nameSpans[i].closest('.select-scientist__div-item').lastElementChild;
            if (nameSpans[i].innerHTML.trim().charAt(0).toUpperCase() === surnameSpans[i].innerHTML.trim().charAt(0).toUpperCase()) {
                overlay.style.backgroundColor = 'transparent';
            } else {
                overlay.style.backgroundColor = 'rgb(217, 217, 217)';
            }
        }
    })
    
    
    
    button13.addEventListener('click', () => {
        const list = document.querySelector('.select-scientist__div-list');
        const items = [...list.querySelectorAll('.select-scientist__div-item')];
        
        items.sort((a, b) => {
            const nameA = a.querySelector('.scientist-name').innerHTML.trim().toUpperCase();
            const nameB = b.querySelector('.scientist-name').innerHTML.trim().toUpperCase();
            list.innerHTML = ''
            return nameA.localeCompare(nameB);
        });
        items.forEach((item) => {
            list.appendChild(item)
            const overlay = item.lastElementChild;
            overlay.style.backgroundColor = 'transparent';
        })
        for (let i = 0; i < items.length; i++){
            const itemId = items[i].querySelector('.select-scientist__id');
            itemId.innerHTML = `${i + 1}.`
        }
    });
    
    
    button15.addEventListener('click', () => {
        const list = document.querySelector('.select-scientist__div-list');
        const items = [...list.querySelectorAll('.select-scientist__div-item')];
        
        items.sort((a, b) => {
            const ageA = Number(a.querySelector('.scientist-born').innerHTML) -  Number(a.querySelector('.scientist-dead').innerHTML);
            const ageB = Number(b.querySelector('.scientist-born').innerHTML) -  Number(b.querySelector('.scientist-dead').innerHTML);
            list.innerHTML = ''
            return ageA - ageB
    
        });
        items.forEach((item) => {
            list.appendChild(item)
            const overlay = item.lastElementChild;
            overlay.style.backgroundColor = 'transparent';
        })
        for (let i = 0; i < items.length; i++){
            const itemId = items[i].querySelector('.select-scientist__id');
            itemId.innerHTML = `${i + 1}.`
        }
    });
    