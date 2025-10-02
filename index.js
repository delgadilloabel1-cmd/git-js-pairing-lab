/*
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
function untilNum(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}
untilNum(10)

//==========================================
//prablem 5
// multiply

function multiply(a, b) {
    return a * b

}
console.log((multiply(5, 6)));

//============================================
//Problem 6
//add
function add(a, b) {
  let sum = a + b
  if (a === b) {
    return sum * 3
  } else {
    return sum
  }

}

console.log(add(6, 6))
console.log(add(6, 7))
console.log(add(3, 3))

// ==============================
// Problem 7
// isNevative
function isNegative(n) {

    return n < 0;
}

console.log(isNegative((-9)));
console.log(isNegative((8)));
console.log(isNegative((-4)))


//=================================
// Problem 8
//triangleArea

function triangleArea(h, b) {
  return triangleArea = 1 / 2 * b * h
}
console.log(triangleArea(4, 5))


//===================================
//Problem 9
//betweenTwentyAndFourty
function betweenTwentyAndFourty(n) {
    if (n >= 20 && n <= 40) {
        return true;
    } else {
        return false;
    }
}
console.log(betweenTwentyAndFourty(41));
console.log(betweenTwentyAndFourty(19));
console.log(betweenTwentyAndFourty(25));
console.log(betweenTwentyAndFourty(31));

*/
//=======================================
//Problem 10
//largest

function largest(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > c) {
    return b
  } else {
    return c
  }
}
console.log(largest(5, 18, 9))
console.log(largest(5, 9, 18))
console.log(largest(3, 2, 1))