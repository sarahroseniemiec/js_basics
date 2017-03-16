// solution 1
var numberOfDonuts = 16;
var glassesOfMilk = 12;
console.log(numberOfDonuts + glassesOfMilk);

var stringOne = "I do not like green eggs and ham. I do not like them, Sam-I-Am. ";
var stringTwo = "Try them, try them, and you may! Try them and you may, I say.";
console.log(stringOne + stringTwo);

// solution 2
var favoriteDesserts = [
  ["sponge", "funfetti", "red velvet"],
  ["oreo", "chocolate chip", "caramel delights"],
  ["chocolate chip cookie dough", "mint chocolate chip", "vanilla", "chocolate"]
]
console.log(favoriteDesserts [1][1]);
console.log(favoriteDesserts [0][1]);

// solution 3
var number = prompt ("enter a number");
if (number<100) {
  alert (number + " is less than 100");
} else {
  alert (number + " is greater than 100");
}

// solution 4
// tried different numbers in prompt.

// solution 5
var plant = "monstera";
if (plant == "cactus") {
  console.log("the plant is a cactus");
} else {
  console.log("the plant is not a cactus");
}

// solution 6
function logToConsole (someName) {
  console.log(someName);
}
logToConsole("Peter");

// solution 7
function hello () {
  console.log("hello");
}
hello ();

// solution 8
function doorPrize (doorNumber) {
  if (doorNumber==1) {
    alert ("you selected door one, you've won a cookie!")
  } else if (doorNumber==2) {
    alert ("you selected door two, you've won a pizza!")
  } else if (doorNumber==3) {
    alert ("you selected door three, you've won a puppy!")
  } else {
    alert ("invalid entry")
  }
}

doorPrize (3);
