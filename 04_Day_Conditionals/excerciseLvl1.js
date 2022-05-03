"use strict";

//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userAge = prompt('Enter your age: ');
let validAge = 18;
userAge >= validAge ? alert(`You are old enough to drive`) : alert(`You are left with ${validAge - userAge} year(s) to drive.`);

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 21;
let yourAge = prompt('Enter your age: ');

let ageDiff = (myAge > yourAge) ? myAge - yourAge : yourAge - myAge;
(myAge > yourAge) ? console.log(`You are ${ageDiff} years younger than me`) : console.log(`You are ${ageDiff} years older than me`);

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else
//ternary operator.

let a = +prompt('Enter a number: ');
let b = +prompt('Enter a number: ');
let calculation = ((a,b) => {
    if (a > b){
        return `${a} is greater than ${b}`;
    }
    else{
        return `${a} is less than ${b}`;
    }
});
console.log(calculation(a,b)); 

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`); //ternary

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
//Using the modulous operator % if the remainder is not zero than it is not even

let userInput = prompt('Enter a number: ');

(userInput % 2) == 0 ? console.log(`${userInput} is an even number`) : console.log(`${userInput} is an odd number`);