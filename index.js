#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User Input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 - 6: ",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations you guessed correctly!");
}
else {
    console.log("Try Again, You Guessed Wrong Number");
}
