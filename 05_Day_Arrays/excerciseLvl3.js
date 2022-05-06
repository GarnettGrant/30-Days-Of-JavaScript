"use strict";
//1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
const sortedAges = ages.sort();

let agesMin = Math.min.apply(Math,sortedAges); //Method 1
agesMin = Math.min(...sortedAges); //Method 2 (Spread Operator)

let agesMax = Math.max.apply(Math,sortedAges); //Method 1
agesMax = Math.max(...sortedAges); //Method 2 (Spread Operator)

//Find the median age(one middle item or two middle items divided by two)
let agesMed = sortedAges[(sortedAges.length) / 2]; //returns 24

//Find the average age(all items divided by number of items)
let agesSum = 0;
for (let i = 0; i < sortedAges.length - 1; i++){
     agesSum += sortedAges[i];  
}
let agesAvg = (agesSum / sortedAges.length);

//Find the range of the ages(max minus min)
let agesRange = agesMax - agesMin;

//Compare the value of (min - average) and (max - average), use abs() method 
    //Slice the first ten countries from the countries array

Math.abs((agesMin - agesAvg));
Math.abs((agesMax - agesAvg));

let comparison 

//2. Find the middle country(ies) in the countries array
let middleCountries = countries;