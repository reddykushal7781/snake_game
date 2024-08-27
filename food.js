import { onSnake, expandSnake } from './snake.js'

import { randomGridPosition } from './grid.js'
// import (onSnake)

let food = getRandomFoodPosition()
const EXPANSION_RATE=3


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food=getRandomFoodPosition()
    }
}

export function draw(gameBoard) { 
    const foodElement = document.createElement('div');  
    //  Its just createElement not createElementById
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        // only double equal to while in side while loop
        newFoodPosition=randomGridPosition()
    }

    return newFoodPosition
}