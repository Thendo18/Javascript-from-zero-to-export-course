const massMark = 10;
const heightMark = 1.69;
const BMIMark = massMark / heightMark ** 2;



const massJohn = 92;
const heightJohn  = 1.95;
const BMIJohn  = massJohn / heightJohn ** 2;



console.log(BMIMark,BMIJohn);
// console.log(BMIMark,BMIJohn,markHigherBMI);    
 

// task 2
if(BMIMark > BMIJohn){
 console.log("Mark's Bmi is hire than john's")
}
else{

console.log(`Johns's Bmi is hire than Marks's`)
}


console.log(`Mark's Bmi (${BMIMark})  is higher than John's (${BMIJohn})!`)