const dino = document.querySelector('#dinosour')
const cactus = document.querySelector("#cactus"); 
const startButton = document.querySelector('.dino__button')
let index = 1
let gameInterval;
let cactusInterval;
let groundInterval;
const points = document.querySelector('#points')
const text = document.querySelector('.dino__text')
let isJumpingUp = false;
let isJumpingDown = true;
let jumpUpInterval;
let jumpDownInterval;
let jumpInterval;
let isJumping = false;

// function change(){
    
//     if (index == 2) {
//         index = 1;
//         dino.src = `./img/dino_run1.png`;
//     } else if (index == 1) {
//         index = 2
//         dino.src = `./img/dino_run2.png`;
//     }
//     console.log('Image path:', dino.src);
// }

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
        text.innerHTML = `Ви програли, в вас було ${points.innerHTML} очків`;
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

let jumpHeight = 0;

function groundMove (){
    const div = document.querySelector('#game')
    div.style.animation = 'moveGround 1.1s linear infinite'
}

function jump() {
    if (jumpInterval) {
        clearInterval(jumpInterval);
    }
    if (isJumping) {
        return;
    }


    let isGoingUp = true;
    dino.style.top = '222px'
    jumpInterval = setInterval(() => {
        isJumping = true;
        let currentTop = parseInt(window.getComputedStyle(dino).top);
        if (isGoingUp) {
            if (jumpHeight < 100) {
                dino.style.top = `${currentTop - 8}px`;
                jumpHeight += 8;
            } else {
                isGoingUp = false;
            }
        } else {
            if (jumpHeight > 0) {
                dino.style.top = `${currentTop + 8}px`;
                jumpHeight -= 8;
            } else {
                clearInterval(jumpInterval);
                isJumping = false;
                dino.style.top = '222px'
            }
        }
    }, 25);
}


document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && isJumping === false) {
        jump()
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
        // change()
    }, 100);

})


 
