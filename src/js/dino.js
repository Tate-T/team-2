const dino = document.querySelector('#dinosour')
const cactus = document.querySelector("#cactus"); 
const startButton = document.querySelector('.dino__button')
let index = 1
let gameInterval;
let cactusInterval;
let groundInterval;
const points = document.querySelector('#points')
let isJumping = false;
let jumpInterval;

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
    let cactusPositionLeft = parseInt(window.getComputedStyle(cactus).left);
    let dinoPositionLeft = parseInt(window.getComputedStyle(dino).left);
    let cactusWidth = cactus.offsetWidth;
    let dinoWidth = dino.offsetWidth;
    let cactusPositionTop = parseInt(window.getComputedStyle(cactus).top);
    let dinoPositionTop = parseInt(window.getComputedStyle(dino).top);
    let cactusHeight = cactus.offsetHeight;
    let dinoHeight = dino.offsetHeight;

    if (cactusPositionLeft <= dinoPositionLeft + dinoWidth - 20 && cactusPositionLeft + cactusWidth >= dinoPositionLeft && cactusPositionTop <= dinoPositionTop + dinoHeight - 20 && cactusPositionTop + cactusHeight >= dinoPositionTop) {
        clearInterval(gameInterval); 
        clearInterval(cactusInterval);
        clearInterval(groundInterval);
        alert(`Ви програли, в вас було ${points.innerHTML} очків`);
        dino.style.left = '350px';
        cactus.style.left = '730px';
        dino.src = './img/standing_still.png'
        const div = document.querySelector('#game')
        div.style.animation = 'none'
        points.innerHTML = '0'
        dino.style.top = '222px'
    } else if (cactusPositionLeft <= 165) {
        cactus.style.left = '885px';
    } else {
        cactus.style.left = `${cactusPositionLeft - 2}px`;
    }
}

function groundMove (){
    const div = document.querySelector('#game')
    div.style.animation = 'moveGround 1.1s linear infinite'
}

function jump() {
    if (jumpInterval) {
        clearInterval(jumpInterval);
    }
    if (isJumping){
        return;
    } 
    dino.style.top = '222px'
    isJumping = true; 
    let jumpHeight = 0;
    jumpInterval = setInterval(() => {
        if (jumpHeight < 80) {
            dino.style.top = `${parseInt(window.getComputedStyle(dino).top) - 5}px`; // Move up
            jumpHeight += 5;
        } else if (jumpHeight >= 80 && jumpHeight < 130) {
            dino.style.top = `${parseInt(window.getComputedStyle(dino).top) + 8}px`; // Move down
            jumpHeight += 5;
        } else {
            clearInterval(jumpInterval); 
            isJumping = false; 
        }
    }, 25); 
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

startButton.addEventListener('click', () => {

    if (gameInterval) {
        clearInterval(gameInterval);
    }
    if (cactusInterval) {
        clearInterval(cactusInterval);
    }
    if (groundInterval) {
        clearInterval(groundInterval);
    }
    cactusInterval = setInterval(cactusMove, 7);
    groundInterval = setInterval(groundMove, 10);
    gameInterval = setInterval(() => {
        getPoints()
        change()
    }, 100);

})


 
