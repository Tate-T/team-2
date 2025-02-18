const dino = document.querySelector('#dinosour')
const cactus = document.querySelector("#cactus"); 
const startButton = document.querySelector('.dino__button')
let index = 1
let isJumping = false;
const points = document.querySelector('#points')

function change(){
    dino.src = `./img/dino_run${index}.png`;
    if (index == 2) {
        index = 1;
    } else {
        index += 1
    }
}

// function jump() {
//     dino.style.top = '10px'
// }

function getPoints(){
    points.innerHTML = Number(points.innerHTML) + 1
}


function cactusMove (){
    let cactusPosition = parseInt(window.getComputedStyle(cactus).left);

    if (cactusPosition <= 165) {
        cactus.style.left = '885px'
    } else {
        cactus.style.left = `${cactusPosition - 2}px`;
    }
}

function groundMove (){
    const div = document.querySelector('#game')
    div.style.animation = 'moveGround 1.5s linear infinite'
}




startButton.addEventListener('click', () => {
    setInterval(change, 100);
    setInterval(cactusMove, 10);
    setInterval(groundMove, 5);
    setInterval(getPoints, 100);
    // document.addEventListener('keydown', (event) => {
    //     if (event.code === 'Space') {
    //         jump();
    //     }
    // });
})
 
