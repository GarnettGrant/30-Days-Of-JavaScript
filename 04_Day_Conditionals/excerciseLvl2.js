"use strict";

//Write a code which can give grades to students according to theirs scores:

let studentGrade = prompt('Enter your grade: ');
let studentLetterGrade;
if (studentGrade >= 80 && studentGrade <= 100){
    studentLetterGrade = 'A';
    console.log(studentLetterGrade);
} else if (studentGrade >= 70 && studentGrade <= 79){
    studentLetterGrade = 'B';
    console.log(studentLetterGrade);
} else if (studentGrade >= 60 && studentGrade <= 69){
    studentLetterGrade = 'C';
    console.log(studentLetterGrade);
} else if (studentGrade >= 50 && studentGrade <= 59){
    studentLetterGrade = 'D';
    console.log(studentLetterGrade);
} else if (studentGrade >= 0 && studentGrade <= 49){
    studentLetterGrade = 'F';
    console.log(studentLetterGrade);
}
