import { update as updateSnake, draw as drawSnake, Snake_Speed } from './snake.js';

import { update as updateFood, draw as drawFood } from './food.js';

import { getsOutSideGrid } from './grid.js';

import { snakeBodyInterception,getSnakeHead } from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
let gameOver = false;

function main(currentTime) {

    if (gameOver===true) {
        if (confirm('You lost, Press ok to restart ')) { // okay
            window.location = '/';
        }
        return
    }
    // window.requestAnimationFrame(main);
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    
    // console.log(currentTime);
    // console.log(secondsSinceLastRender);

    if (secondsSinceLastRender < 1 / Snake_Speed) return
    // console.log(`Render`);
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);

function update() { 
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() { 
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver= getsOutSideGrid(getSnakeHead()) || snakeBodyInterception()
}
