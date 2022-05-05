"use strict";
//1. Create a separate countries.js file and store the countries array in to this file, 
//   create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2. First remove all the punctuations 
//   and change the string to array 
//   and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let textAltered = text.replace(/,|\./g,'');
let words = textAltered.split(' ');
console.log(words)
console.log(words.length)

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
/* 
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/

if (!(shoppingCart.includes('Meat'))){
    shoppingCart.unshift('Meat');
}
if (!(shoppingCart.includes('Sugar'))){
    shoppingCart.push('Sugar');
}

let allergicToHoney = prompt('Are you alergic to Honey? Answer "Yes" or "No": ');

if (allergicToHoney.toLowerCase() == 'yes'){
    shoppingCart.splice('Honey')
}

shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// if (!(countries.includes('Ethiopia'))){
//     console.log('ETHIOPIA');
// } else {
//     countries.push('Ethiopia');
// }

// //5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// // If it does not exist add Sass to the array and print the array.
// if (webTechs.includes('SASS')){
//     console.log('Sass is CSS preprocess');
// } else {
//     webTechs.push('SASS');
//     console.log(webTechs);
// }

//6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);