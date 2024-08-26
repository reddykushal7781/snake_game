import {update as updateSnake, draw as drawSnake, Snake_Speed } from './snake.js';

let lastRenderTime = 0

function main(currentTime) {
    // window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    
    // console.log(currentTime);
    // console.log(secondsSinceLastRender);

    if (secondsSinceLastRender < 1 / Snake_Speed) return
    console.log(`Render`);
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);

function update() { 
    updateSnake()

}

function draw() { 
    drawSnake()

}
