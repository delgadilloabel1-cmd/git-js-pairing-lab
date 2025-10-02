//Code your solutions in this file
// Problem 1
function fiveToOneHundred(n) {
    for (let i = 5; i <= n; i++) {
        console.log(i)
    }
}
fiveToOneHundred(100)

//=================================
// Problem 2 
// MultiplyTOThree

function multiplesOfThree(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}
multiplesOfThree(100)

//////////////////////////////
// Problem 3
// MultiplesOfThreeOrFive

function multiplesOfThreeOrFive(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }

}
multiplesOfThreeOrFive(100);

//===================================
//Problem 4
//untilNum
