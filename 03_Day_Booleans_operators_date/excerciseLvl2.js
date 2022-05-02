"use strict";

// //1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// //Enter base: 20
// //Enter height: 10
// //The area of the triangle is 100
// let base = prompt('Enter base: ', ''); //displays prompt and assigns input to variable
// let height = prompt('Enter height: ', ''); //displays prompt and assigns input to variable
// let area = (0.5 * +base * +height); // returns 100
// window.alert(`The area of the triangle is ${area}`);

// //2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// //Enter side a: 5
// //Enter side b: 4
// //Enter side c: 3
// //The perimeter of the triangle is 12
// let sidea = prompt('Enter side a: ', '');
// let sideb = prompt('Enter side b: ', '');
// let sidec = prompt('Enter side c: ', '');
// let perimeter = (+sidea + +sideb + +sidec);
// window.alert(`The perimeter of the triangle is ${perimeter}`); // returns 12

// //3. Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = prompt('Enter length: ', '');
// let width = prompt('Enter width', '');
// //area of rectangle (area = length x width)
// let q3area = (+length * +width);
// window.alert(`The area is ${q3area}`);
// //the perimeter of rectangle (perimeter = 2 x (length + width))
// let q3perimiter = (2 * (+length + +width));
// window.alert(`The perimiter is ${q3perimiter}`);

// //4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// /*let pi = +(Math.PI).toFixed(2);*/
// let pi = 3.14;
// let radius = +prompt('Enter radius: ');
// //calculate the area of a circle (area = pi x r x r)
// let q4Area = (pi * radius * radius);
// window.alert(`The area is ${q4Area}`);
// //circumference of a circle(c = 2 x pi x r)
// let q4circum = (2 * pi * radius);
// window.alert(`The circumference is ${q4circum.toFixed(2)}`);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
/*
x|y
0|-2
1|0
*/

let q5xIntercept = {
    x: 0,
    y: -2
};
let q5yIntercept = {
    x: 1,
    y: 0
};

let q5m = ((q5yIntercept.y - q5xIntercept.y) / (q5yIntercept.x - q5xIntercept.x)); //slope

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let q6x1 = 2;
let q6y1 = 2;
let q6x2 = 6;
let q6y2 = 10;

let q6m = ((q6y2 - q6y1) / (q6x2 - q6x1)); //slope

//7. Compare the slope of above two questions.
if (q5m > q6m){
    console.log('Question 5 slope is greater than question 6 slope');
}
else if (q5m == q6m){
    console.log('The slopes are the same');
}
else if (q5m < q6m){
    console.log('Question 6 slope is greater than question 5 slope');
}
// (q5m > q6m) ? console.log('Q5 greater than q6') : console.log('Q5 is not greater than q6'); //Terenary operator

//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
/*
(y = x^2 + 6x + 9)

 x|y
-3|0
 0|9
 1|16
*/
let firstPair = (((-3) ** 2) + (6 * (-3)) + 9); //y = 0
let secondPair = ((0 ** 2) + (6 * 0) + 9); // y = 9
let thirdPair = ((1 ** 2) + (6 * 1) + 9); // y = 16

// //9. Write a script that prompts a user to enter hours and rate per hour. Calculate pay of the person
// //Enter hours: 40
// //Enter rate per hour: 28
// //Your weekly earning is 1120
// let userHours = prompt('Enter hours: ');
// let userRate = prompt('Enter rate per hour: ');
// let weeklyEarning = (+userHours * +userRate).toFixed(2);
// let dollarUS = Intl.NumberFormat("en-US",{
//     style:'currency',
//     currency: "USD",
// });
// window.alert(`Your weekly earning is ${dollarUS.format(weeklyEarning)}`);

// //10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let userName = prompt('Enter your name: ');

// userName.length > 7 ? window.alert('Your name is long') : window.alert('Your name is short');

//11. Compare your first name length and your family name length and you should get this output.
// Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName = 'Garnett';
let lastName = 'Grant';

firstName.length > lastName.length ? console.log(`Your first name ${firstName} is longer than your family name, ${lastName}`) : console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`); //outputs Your first name Garnett is longer than your family name, Grant

//12. Declare two variables myAge and yourAge and assign them initial values and differentiate myAge and yourAge.
//e.g. I am 225 years older than you.

let myAge = 21;
let yourAge = 27;

let ageDiff = (myAge > yourAge) ? myAge - yourAge : yourAge - myAge;
(myAge > yourAge) ? console.log(`I am ${ageDiff} years older than you`) : console.log(`I am ${ageDiff} years younger than you`); //outputs I am 6 years younger than you


//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//Enter birth year: 1995
//You are 25. You are old enough to drive
//
//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let userBirthYear = prompt('Enter birth year: ');
// let userAge = currentYear - +userBirthYear;
// let validAge = 18;
// userAge >= validAge ? alert(`You are ${userAge}. You are old enough to drive`) : alert(`You are ${userAge}. You will be allowed to drive after ${validAge - userAge} year(s)`);

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//Enter number of years you live: 100
//You lived 3153600000 seconds.
// let userYears = prompt('Enter number of years you live: ');
// let userYearsToSeconds = (+userYears * 60 * 60 * 24 * 365);
// window.alert(`You lived ${userYearsToSeconds} seconds`);

//15. Create a human readable time format using the Date time object
//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

let date = new Date();
let dateOne = (`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() + 1} ${date.getHours()}:${date.getMinutes()}`);
let dateTwo = (`${date.getDay() + 1}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
let dateThree = (`${date.getDay() + 1}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
