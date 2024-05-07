// Control Flow Structures

// 1. Conditional statements = Allow you to execute different blocks of code based on a condition/boolean

// if - else statement
let age = 16;
if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote!");
}

// if - else if - else statement
let temperature = 50;

if (temperature < 0) {
    console.log("I'm probably already frozen.");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It is a cold day.");
} else if (temperature >= 20 && temperature < 30) {
    console.log("It is a warm day.");
} else if (temperature >= 30 && temperature < 40) {
    console.log("It is a hot day.");
} else {
    console.log("I have melted.");
}

// switch statement
let day = 'Tuesday';
switch (day) {
    case 'Monday':
        console.log("Back to work.");
        break;
    case 'Friday':
    case 'Saturday':
    case 'Sunday':
        console.log("It's the weekend!");
        break;
    default:
        console.log("It is a regular day.");
}

// 2. Looping statements - Loops are used to repeatedly execute a block of code until a specific condition is met.

// For loop
for (let i = 1; i <= 5; i++) {
    console.log('For loop count:', i);
}

// While Loop
let count = 1;
while (count <= 5) {
    console.log('while loop count:', count);
    count++;
}

// Do-while Loop
let name = "";

// prompt()
do {
    name = prompt('Enter your name.');
} while (name == "")