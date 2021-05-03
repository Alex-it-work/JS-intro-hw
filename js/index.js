/*Таски на переменные:*/
/* 1********************************* */
const firstArgument = Math.floor(Math.random() * 100);
const secondArgument = Math.floor(Math.random() * 100);
console.log("first = ", firstArgument, ", and second = ", secondArgument);
console.log("multiplication result is ", firstArgument * secondArgument);
/* 2********************************* */
const thirdArgument = Math.floor(Math.random() * 100);
const fourthArgument = Math.floor(Math.random() * 100);
console.log("third = ", thirdArgument, ", and fourth = ", fourthArgument);
console.log("division result is ", thirdArgument / fourthArgument);
/* 3********************************* */
const fifthArgument = Math.floor(Math.random() * 100);
const sixthArgument = Math.floor(Math.random() * 100);
console.log("fifth = ", fifthArgument, ", and sixth = ", sixthArgument);
console.log("sum result is ", fifthArgument + sixthArgument);
/* 4********************************* */
const intValue = 11;
const boolFlag = true;
const stringValue = "java script";
const anotherStringValue = "100";
console.group("CheckResult");
console.log("intValue = ", intValue, "(", typeof intValue, ")");
console.log("boolFlag = ", boolFlag, "(", typeof boolFlag, ")");
console.log("stringValue = ", stringValue, "(", typeof stringValue, ")");
console.log(
  "anotherStringValue = ",
  anotherStringValue,
  "(",
  typeof anotherStringValue,
  ")"
);
console.groupEnd();
/* 5********************************* */
let num = 1;
num += +11;
console.log(num);
num -= 11;
console.log(num);
num *= 11;
console.log(num);
num /= 11;
console.log(num);
num++;
console.log(num);
num--;
console.log(num);
/*Таски на prompt:*/
/* 1********************************* */
const anyNumber = Number(prompt("Lets write any number:"));
alert("Your number is : " + anyNumber);
/* 2********************************* */
const anotherNumber = Number(prompt("Lets write another one number:"));
alert("Average of nmbrs is : " + (anyNumber + anotherNumber) / 2);
/* 3********************************* */
const minutesValue = Number(prompt("Lets write minutes:"));
alert("Your minutes is : " + minutesValue * 60 + " s");
/* 4********************************* */
const greeting = "Hello, ";
const userName = prompt("Pls, enter yur name:");
alert(greeting + userName + "! Welcome to JS-intro!");

/*Таски на условия:*/
/* 1********************************* */
const guessNumber = Number(prompt("Guess the number:"));
if (guessNumber === 10) {
  alert("Lucky you, its rly 10!");
} else {
  alert("Wasted");
}
/* 2********************************* */
const test = Math.random() < 0.5;
if (test) {
  alert("True");
} else {
  alert("False");
}
if (!test) {
  alert("True");
} else {
  alert("False");
}
/* 3********************************* */
const price = Number(prompt("Enter amount:"));
if (price > 800) {
  alert(
    "Your purchase amount with 5% discount is : " +
      Math.ceil(price * 0.95 * 100) / 100
  );
} else if (price > 500) {
  alert(
    "Your purchase amount with 3% discount is : " +
      Math.ceil(price * 0.97 * 100) / 100
  );
} else {
  alert("Your purchase amount is : " + price);
}

/*Таски на циклы. Каждую задачу решить всеми тремя циклами!*/
/* 1********************************* */
let firstTaskCounter = 25;
while (firstTaskCounter >= 0) {
  console.log(firstTaskCounter);
  firstTaskCounter--;
}

firstTaskCounter = 25;
do {
  console.log(firstTaskCounter);
  firstTaskCounter--;
} while (firstTaskCounter >= 0);

for (let i = 25; i >= 0; i--) {
  console.log(i);
}
/* 2********************************* */
let secondTaskCounter = 10;
while (secondTaskCounter <= 50) {
  if (secondTaskCounter % 5 === 0) {
    console.log(secondTaskCounter);
  }
  secondTaskCounter++;
}

secondTaskCounter = 10;
do {
  if (secondTaskCounter % 5 === 0) {
    console.log(secondTaskCounter);
  }
  secondTaskCounter++;
} while (secondTaskCounter <= 50);

for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
/* 3********************************* */
let thirdTaskCounter = 0;
let counter = 0;
while (counter <= 100) {
  thirdTaskCounter += counter;
  counter++;
}
console.log(thirdTaskCounter);

thirdTaskCounter = 0;
counter = 0;
do {
  thirdTaskCounter += counter;
  counter++;
} while (counter <= 100);
console.log(thirdTaskCounter);

thirdTaskCounter = 0;
for (let i = 0; i <= 100; i++) {
  thirdTaskCounter += i;
}
console.log(thirdTaskCounter);
/* 4********************************* */
let fourthTaskValue;
while (fourthTaskValue !== 6) {
  fourthTaskValue = Number(prompt("2 + 2 * 2 = "));
}
alert("Сongratulations!");

fourthTaskValue = 0;
do {
  fourthTaskValue = Number(prompt("2 + 2 * 2 = "));
} while (fourthTaskValue !== 6);
alert("Сongratulations!");

for (let i; i !== 6; ) {
  i = Number(prompt("2 + 2 * 2 = "));
}
alert("Сongratulations!");
