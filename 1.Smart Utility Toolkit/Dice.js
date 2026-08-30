// Dice.js

const crypto = require("crypto");

function rollDice() {

    const number = crypto.randomInt(1, 7);

    return number;
}

console.log("Dice Rolled:", rollDice());