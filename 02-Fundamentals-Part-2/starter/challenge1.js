const calAverage = (a, b, c) =>(a+b+c)/3;
// console.log(calAverage(1,2,3))


// test1

const scoreDolphin = calAverage(44,23,71);
    const scorekoalas = calAverage(65,54,49);

    const avgDolphin = scoreDolphin;
    const avgKoalas = scorekoalas;

function checkWinner(avgDolphin ,avgKoalas){

    avgDolphin>avgKoalas ? 
    console.log(`Dolphins wins (${avgDolphin} vs. ${avgKoalas})`):
    console.log(`koalas wins (${avgDolphin} vs. ${avgKoalas})`)
 
}
// console.log(scoreDolphin,  scorekoalas);



