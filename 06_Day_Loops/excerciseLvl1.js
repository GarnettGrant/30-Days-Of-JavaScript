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