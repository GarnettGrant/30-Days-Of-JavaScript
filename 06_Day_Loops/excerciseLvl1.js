"use strict";

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

  //1. Iterate 0 to 10 using for loop, do the same using while and do while loop

  //Fors
  console.log("Countries");
  console.log("------------------------");
  for (let i = 0; i < 10; i++){
      console.log(countries[i]);
  }
  console.log("------------------------");
  console.log("Web Techs");
  console.log("------------------------");
  for (let i = 0; i < 10; i++){
      console.log(webTechs[i]);
  }
  console.log("------------------------");
  console.log("Mern Stack");
  console.log("------------------------");
  for (let i = 0; i < 10; i++){
      console.log(mernStack[i]);
  }

 //Do whiles
 let i = 0;
  console.log("------------------------");
  console.log("Countries");
  console.log("------------------------");
  do{
    i++;
    console.log(countries[i]);

  }while(i < 10);
  console.log("------------------------");
  console.log("Web Techs");
  console.log("------------------------");
i = 0;
  do{
    i++;
    console.log(webTechs[i]);

  }while(i < 10);
  console.log("------------------------");
  console.log("Mern Stack");
  console.log("------------------------");
i = 0;
  do{
    i++;
    console.log(mernStack[i]);

  }while(i < 10);
  console.log("------------------------");

  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log(" ");
//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
 
console.log("Countries");
  console.log("------------------------");
  for (let i = 10; i > 0; i--){
      console.log(countries[i]);
  }
  console.log("------------------------");
  console.log("Web Techs");
  console.log("------------------------");
  for (let i = 10; i > 0; i--){
      console.log(webTechs[i]);
  }
  console.log("------------------------");
  console.log("Mern Stack");
  console.log("------------------------");
  for (let i = 10; i > 0; i--){
      console.log(mernStack[i]);
  }

  //Do whiles
 i = 10;
 console.log("------------------------");
 console.log("Countries");
 console.log("------------------------");
 do{
   i--;
   console.log(countries[i]);

 }while(i > 0);
 console.log("------------------------");
 console.log("Web Techs");
 console.log("------------------------");
i = 10;
 do{
   i--;
   console.log(webTechs[i]);

 }while(i > 0);
 console.log("------------------------");
 console.log("Mern Stack");
 console.log("------------------------");
i = 10;
 do{
   i--;
   console.log(mernStack[i]);

 }while(i > 0);
 console.log("------------------------");

 //3. Iterate 0 to n using for loop

 let n = prompt("Enter a number");

 for (let i = 0; i < n; i++ ){
    console.log(i);
 }

//4. Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

for (let i = 1; i <= 7; i++){
    let hash = "#";
    console.log(`${hash.repeat(i)}\n`);

}

//5. Use loop to print the following pattern:
/*
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/

for (let i = 0; i <=10; i++){
  console.log (`${i} x ${i} = ${i*i}`);
}

console.log("------------------------");

//6. Using loop print the following pattern
/*
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/
console.log('i   i^2   i^3');
for (let i = 0; i <=10; i++){
  console.log(`${i}   ${i**2}   ${i**3}`);
}
console.log("------------------------");

//7. Use for loop to iterate from 0 to 100 and print only even numbers

for(let i = 0; i <=100; i++ ){
  if (i % 2 == 0){
    console.log(i);
  }
}

console.log("------------------------");
//8. Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i = 0; i <=100; i++ ){
  if (i % 2 != 0){
    console.log(i);
  }
}

console.log("------------------------");
//9. Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i = 0; i <= 100; i++ ){
  if (!(i % 2 == 0)){
    console.log(i);
  }
}

console.log("------------------------");
//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++){
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);


console.log("------------------------");
//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++){
  if (i % 2 == 0){
    evenSum += i;
  }
  else{
    oddSum += i;
  }
}
console.log(`The sum of all evens from 0 to 10 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`);

console.log("------------------------");
//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumArray = [];
evenSum = 0;
oddSum = 0;

for (let i = 0; i <=100; i++){
  if (i % 2 == 0){
    evenSum += i;
  }
  else{
    oddSum += i;
  }
}
sumArray.push(evenSum,oddSum);
console.log(sumArray);


console.log("------------------------");
//13.Develop a small script which generate array of 5 random numbers
let rdmNumbArray = [];
for (let i = 0; i < 5; i ++){
  rdmNumbArray.push(Math.round(Math.random() * 100));
}
console.log(rdmNumbArray);

console.log("------------------------");
//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
rdmNumbArray = [];
let rdmNumb = 0;

for (let i = 0; i < 5; i ++){
rdmNumb = Math.round(Math.random() * 100);
  if (!(rdmNumbArray.includes(rdmNumb))){
  rdmNumbArray.push(rdmNumb);
  }
}
console.log(rdmNumbArray);

//15. Develop a small script which generate a six characters random id:
let rdmID = [];
rdmNumb = 0;
let rdmLetter = '';
let rdmLetterCode = 0;

for (let i = 0; i < 6; i++){
  rdmNumb = Math.round(Math.random() * 9);
  rdmLetterCode = (Math.floor(Math.random() * (122 - 65 + 1)) + 65);
  if (rdmLetterCode > 90 && rdmLetterCode < 93){
    rdmLetterCode = (Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  } else if (rdmLetterCode > 93 && rdmLetterCode < 97){
    rdmLetterCode = (Math.floor(Math.random() * (90 - 65 + 1)) + 65);
  }
  rdmLetter = String.fromCharCode(rdmLetterCode);

  if (i % 2 == 0){
    rdmID.push(rdmLetter);
  } else {
    rdmID.push(rdmNumb);
  }
}

let randomId = rdmID.join('')
console.log(randomId);

//easier way found online

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());