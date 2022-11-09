console.log("something")

// function declaration

function calAge1(birthyear)
{return 2022 - birthyear;}



const age1 = calAge1(2000);


// function expression

const calAge = function(birthyear){
    return 2022-birthyear;
}


const age = calAge(1999);
console.log(age1, age)



// arrow function

const calAge2 = birthyeah =>2022 - birthyeah;
const age2 = calAge(2005);
console.log(age2)


// ---------------------------------------------------------
// starting example to understand
// example

const yearUntilRetirement = (birthye, firstname) => {

const age3 = 2022 - birthye;
const retirement = 65 - age3;
return `${firstname} with ${age3} years retires in ${retirement} years`;

}
console.log(yearUntilRetirement(2003, 'Thendo'));


// function calling another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange `
return juice;
}

console.log(fruitProcessor(4, 9));

