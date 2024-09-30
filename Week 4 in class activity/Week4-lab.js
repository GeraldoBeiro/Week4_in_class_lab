/* Georgian College
24F Client-Side JavaScript - 200
Student: Geraldo Beiro Neto
Student_ID: 200587023
Date/Time: 09-30-2024 01:33AM
*/


//first challenge
//asking the user to input a number
let userInput = prompt("Enter a number:");

// Now I am checking if the number is a multiple of 5
if (userInput % 5 === 0) {
    console.log(`${userInput} is a multiple of 5`);
} else {
    console.log(`${userInput} is not a multiple of 5`);
}


//second challenge:
let score = prompt("Enter the student's score from 1 to 100:"); // defining the variable score = prompt

// Now I am checking the score range and assigning a grade to the student
if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score");
}

//-------------------------------------------

//third challenge - calculator

function calculator(num1, num2, operator) {
    // Now I am using a switch statement to handle different operators
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

// Now I am testing the calculator function
console.log("The result for sum is: " + calculator(5, 2, '+')); // 7
console.log("The result for subtraction is: "+calculator(5, 2, '-')); // 3
console.log("The result for multiplication is: "+calculator(5, 2, '*')); // 10
console.log("The result for division is: "+calculator(5, 2, '/')); // 2.5
console.log("The result for error is: "+calculator(5, 2, '&')); // Error: Invalid operator



//fourth challenge - FizzBuzz
// Now I am looping from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Checking if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i+" FizzBuzz");
    }
    // Checking if the number is a multiple of 3
    else if (i % 3 === 0) {
        console.log(i+" Fizz");
    }
    // Checking if the number is a multiple of 5
    else if (i % 5 === 0) {
        console.log(i+" Buzz ");
    }
    // If none of the conditions are met, just print the number
    else {
        console.log(i);
    }
}