// Таски на условия
// 1) Делится ли число на 5, или на 3, или на 2 без остатка?
const randomNumber = Math.floor(Math.random() * 100);
const dividers = [5, 3, 2];
for (let i = 0; i < 3; i++) {
  if (randomNumber % dividers[i] === 0) {
    console.log(randomNumber + " is divided by " + dividers[i]);
  } else {
    console.log(randomNumber + " is NOT divided by " + dividers[i]);
  }
}
// Таски на циклы (Only FOR)
// 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)
const userNumber = Number(prompt("Enter some number pls "));
let factorialRez = 1;
for (let i = 1; i <= userNumber; i++) {
  factorialRez *= i;
}
alert(userNumber + "! = " + factorialRez);
// Неудачное решение..... цикл, при каждой итерации обращается к константе которая задана функцией, которая, в итоге, заново пытается определить константу каждый раз.........
// const userNumber = function () {
//   let userNumber;
//   for (;;) {
//     userNumber = Number(prompt("Enter some number pls "));
//     if (Number.isInteger(userNumber)) {
//       break;
//     } else {
//       alert("number is not integer");
//     }
//   }
//   return userNumber;
// };
// let factorialRez = 1;
// for (let i = 1; i <= userNumber(); i++) {
//   factorialRez *= i;
// }
// alert(userNumber() + "! = " + factorialRez);

// 2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь
const userParametr = Number(prompt("Enter some number pls "));
let sequenceRez = 0;
for (let i = 1; i <= userParametr; i++) {
  sequenceRez += 1 / i;
}
alert(Math.round(sequenceRez * 1000) / 1000);

// 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12)
const userBottomLim = Number(prompt("Enter bottom limit pls "));
const userTopLim = Number(prompt("Enter top limit pls "));
let multipIntRez = 1;
for (let i = userBottomLim; i <= userTopLim; i++) {
  multipIntRez *= i;
}
alert("Your multiplication result " + multipIntRez);

// Таски на функции
// 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// Ожидаемый вывод:
// isAdult(20); // true
// isAdult(4); // false
const permit = isAdult(Number(prompt("Enter your age pls ")));
alert(permit);
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

// 1) *Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)
const isInt = checkInt();
alert(isInt);
function checkInt() {
  if (Number.isInteger(Number(prompt("Enter any number pls")))) {
    return true;
  } else {
    return false;
  }
}

// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:

// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false
const isDivided = checkMultiplicity(
  Number(prompt("Enter frst num pls ")),
  Number(prompt("Enter scnd num pls "))
);
alert(isDivided);
function checkMultiplicity(frstArgument, scndArgument) {
  if (Number.isInteger(frstArgument / scndArgument)) {
    return true;
  } else {
    return false;
  }
}

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
const userTriangle = [
  Number(prompt("Enter lenght of frst side pls ")),
  Number(prompt("Enter lenght of scnd side pls ")),
  Number(prompt("Enter lenght of third side pls ")),
];
const isTriangle = checkTriangularity(userTriangle);
alert(isTriangle);
function checkTriangularity(triangle) {
  if (
    triangle[0] < triangle[1] + triangle[2] &&
    triangle[1] < triangle[0] + triangle[2] &&
    triangle[2] < triangle[0] + triangle[1]
  ) {
    return true;
  } else {
    return false;
  }
}

// 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)
// (2 функции на выбор реализовать в формате функционального выражения)
