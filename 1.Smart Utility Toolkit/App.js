// App.js

const isEven = require("./Modules/isEven");
const Logger = require("./Modules/Logger");

const Service = require("./Service");
const Text = require("./Text");

Logger.log("Smart Utility Toolkit Started");

console.log("10 is even:", isEven(10));
console.log("5 is even:", isEven(5));

console.log("Addition:", Service.add(10, 5));
console.log("Subtraction:", Service.subtract(10, 5));
console.log("Multiplication:", Service.multiply(10, 5));
console.log("Division:", Service.divide(10, 5));

console.log("Uppercase:", Text.upperCase("hello world"));
console.log("Lowercase:", Text.lowerCase("HELLO WORLD"));
console.log("Characters:", Text.countCharacters("Hello"));

Logger.log("Smart Utility Toolkit Completed");