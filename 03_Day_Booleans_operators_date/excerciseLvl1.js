"use strict";
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Garnett';
let lastName = 'Grant';
let country = 'Canada';
let city = 'Toronto';
let age = 21;
let isMarried = false;
let year = 2022;

typeof(firstName); // returns string
typeof(lastName); // returns string
typeof(country); // returns string
typeof(city); // returns string
typeof(age); // returns number
typeof(isMarried); // returns boolean
typeof(year); // returns number

//2.Check if type of '10' is equal to 10
(typeof('10') == 10); // returns false

//3. Check if parseInt('9.8') is equal to 10
(parseInt('9.8') == 10); // returns false

//4. Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
10 == 10; // returns true
0 == 0; // returns true
'Garnett' == 'Garnett'; // returns true
//Write three JavaScript statement which provide falsy value.
9 == 10; // returns false
1 == 2; // returns false
'Grant' == 'Garnett'; // returns false

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3; //true
4 >= 3; //true
4 < 3; //false
4 <= 3; //false
4 == 4; //true
4 === 4; //true
4 !== 4; //false
4 !== 4; //false
4 != '4'; //false
4 == '4'; //true
4 === '4'; //false
//Find the length of python and jargon and make a falsy comparison statement.
('python').length != ('jargon').length;

//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //false
4 > 3 || 10 < 12; //true
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
!(false); //true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); //true
!(4 === '4'); //true
("There is no 'on' in both dragon and python"); // false

//7. Use the Date object to do the following activities
let newDate = new Date();
//What is the year today?
newDate.getFullYear(); //returns 2022

//What is the month today as a number?
newDate.getMonth(); //returns 3

//What is the date today?
newDate; //returns Sat Apr 30 2022 23:57:53 GMT-0400 (Eastern Daylight Time)

//What is the day today as a number?
newDate.getDay(); //returns 6

//What is the hours now?
newDate.getHours(); //returns 23

//What is the minutes now?
newDate.getMinutes(); //returns 57

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
let sinceOld = Date.now(); //returns 1651377473086