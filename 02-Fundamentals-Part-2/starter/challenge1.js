const calAverage = (a, b, c) =>(a+b+c)/3;
const scoreDolphin = calAverage(44,23,71);
const scorekoalas = calAverage(65,54,49);

const checkWinner = function (avgDolphin ,avgKoalas){
    if(avgDolphin>avgKoalas){
    console.log(`Dolphins wins (${avgDolphin} vs. ${avgKoalas})`)}
    else{
    console.log(`koalas wins (${avgDolphin} vs. ${avgKoalas})`)}
 
}

checkWinner(scoreDolphin,scorekoalas);



