"use strict";

//1. Declare an empty array;
const q1Array = [];

//2. Declare an array with more than 5 number of elements
const q2Array = [
    'Name',
    {firstName: 'Garnett',
     middleName: 'Akeele',
     lastName: 'Grant'},
    'Birthday',
    {birthYear: 2000,
     birthMonth: 12,
     birthDay: 7},
     'Favourite Color',
    {colour: 'Red'}
];

//3. Find the length of your array
q2Array.length; //outputs 5

//4. Get the first item, the middle item and the last item of the array
q2Array[0]; //first item
q2Array[((q2Array.length) / 2)];
q2Array[5];

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [
    'Name',
    {firstName: 'Garnett',
     middleName: 'Akeele',
     lastName: 'Grant'},
    'Birthday',
    {birthYear: 2000,
     birthMonth: 12,
     birthDay: 7},
     'Favourite Color',
    {colour: 'Red'}
];

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
console.log(itCompanies[0]); //first
console.log(itCompanies[Math.round((itCompanies.length - 1 )/ 2)]); //middle
console.log(itCompanies[6]); //last

console.log(' ');//Space divider

//10. Print out each company
for (let i = 0; i < itCompanies.length - 1; i++){
    console.log(itCompanies[i]);
}

console.log(' ');//Space divider

//11. Change each company name to uppercase one by one and print them out
itCompanies[0] = itCompanies[0].toUpperCase();
console.log(itCompanies[0]);
itCompanies[1] = itCompanies[1].toUpperCase();
console.log(itCompanies[1]);
itCompanies[2] = itCompanies[2].toUpperCase();
console.log(itCompanies[2]);
itCompanies[3] = itCompanies[3].toUpperCase();
console.log(itCompanies[3]);
itCompanies[4] = itCompanies[4].toUpperCase();
console.log(itCompanies[4]);
itCompanies[5] = itCompanies[5].toUpperCase();
console.log(itCompanies[5]);
itCompanies[6] = itCompanies[6].toUpperCase();
console.log(itCompanies[6]);

console.log(' ');//Space divider

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);

console.log(' ');//Space divider

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes('AMAZON') ? console.log('Amazon is included') : console.log('Amazon is not included');

//14. Filter out companies which have more than one 'o' without the filter method
const filteredCompanies =[];
for (let i = 0; i < itCompanies.length - 1; i++){
    if (itCompanies[i].match(/o{2,}/gi)){
        filteredCompanies.push(itCompanies[i]);
    }
}
//outputs Facebook & Google

console.log(' ');//Space divider

//15. Sort the array using sort() method
console.log(itCompanies.sort());

console.log(' ');//Space divider

//16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

console.log(' ');//Space divider

//17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

console.log(' ');//Space divider

//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7));

console.log(' ');//Space divider

//19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4));

console.log(' ');//Space divider

//20. Remove the first IT company from the array
console.log(itCompanies);
itCompanies.shift()
console.log(itCompanies);

console.log(' ');//Space divider

//21. Remove the middle IT company or companies from the array
itCompanies.splice(2,2)
console.log(itCompanies); // removes google and facebook

console.log(' ');//Space divider

//22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//23. Remove all IT companies
itCompanies.splice(0,(itCompanies.length));
console.log(itCompanies);