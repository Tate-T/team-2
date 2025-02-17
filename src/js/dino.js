const dino = document.querySelector('.dino__item')
const startButton = document.querySelector('.dino__button')
let index = 1
let isJumping = false;

function change(){
    dino.src = `./img/dino_run${index}.png`;
    if (index == 2) {
        index = 1;
    } else {
        index += 1
    }
}

function jump() {
    dino.style.top = '10px'
}




startButton.addEventListener('click', () => {
    setInterval(change, 130);
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            jump();
        }
    });
})