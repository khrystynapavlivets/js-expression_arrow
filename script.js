"use strict";

/*
Завдання 1

Написати розв’язок нижче описаного завдання за допомогою arrow function:

1. Створити функцію яка прийматиме одне числове значення.

2. Це значення в функції означатиме кількіть елементів послідовності Фібаначі.

3. Обрахуйте цю послідовність і виведіть виведіть всі її елементи в консоль.

Приклад роботи:

1. fib(5) – має повернути 1 1 2 3 5.

2. fib(10) – має повернути 1 1 2 3 5 8 13 21 34 55.

------------------------------------------------------------------------------------------ */

// let fib = (n) => {
//   let a = 0,
//     b = 1,
//     str = "";
//   if (n <= 1) {
//     console.log(a);
//     return n;
//   } else {
//     for (let i = 1; i <= n; i++) {
//       let sum = a + b;
//       a = b;
//       b = sum;
//       str += a + " ";
//     }
//     console.log(str);
//     return str;
//   }
// };
// fib(5);
// fib(10);

// let str = "";
// let fibonacci = (n) => {
//     if (n <= 1) {
//       return n;
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   };
//   let n = 10;
//   for (let i = 1; i <= n; i++) {
//   str += fibonacci(i) + " ";

//   }
//   console.log(str);

/*Завдання 2

Написати розв’язок нижче описаного завдання за допомогою function expression:

Створіть функцію, яка обраховує суму чисел геометричної прогресії, в якій першим числом є 1.
 Інформація про геометричну прогресію знаходиться тут:

1. https://uk.wikipedia.org/wiki/Геометрична _прогресія

2. http://ua.onlinemschool.com/math/formula/geometric_sequence/

Функція приймає два аргументи: кількість чисел прогресії і її знаменник . 
Наприклад, в прогресії типу 1,2,4,8,16 кількість чисел - 5, а знаменник – 2
 (тому що кожне наступне число прогресії домножується на 2). 
 Результат, який має повернути функція для даної прогресії 31.

Функцію потрібно написати двома способами:

1. З використанням циклу

2. З використанням формули знаходження суми геометричної прогресії:

Sn=b1*1-qn1-q,

де b1 – перший елемент прогресії (в даному завданні це 1),

q – знаменник,

n – кількість елементів прогресії



Приклад роботи:

f(5,2) – має повернути 1+2+4+8+16=31

f(4,3) – має повернути 1+3+9+27=40

------------------------------------------------------------------------------------------
*/

///1. З використанням циклу

// function declatation

//   function f(n, q) {
//     let S = 1,
//   b1 = 1;
//   let i = 1;
//   while (i < n) {
//     i++;
//     b1 *= q;
//     S += b1;
//   }
//   console.log(S);
//   return S;
// }

// f(5, 2);
// f(4, 3);

// function expression

// let f = function(n, q)  {
//   let S = 1,
// b1 = 1;
// let i = 1;
// while (i < n) {
//   i++;
//   b1 *= q;
//   S += b1;
// }
// console.log(S);
// return S;
// }

// f(5, 2);
// f(4, 3);

// function arrow

// let f = (n, q) => {
// let S = 1,
// b1 = 1;
// let i = 1;
// while (i < n) {
//   i++;
//   b1 *= q;
//   S += b1;
// }
// console.log(S);
// return S;
// }

// f(5, 2);
// f(4, 3);

//////2. З використанням формули знаходження суми геометричної прогресії:

// Sn=b1*(1-q^n)/(1-q)

// let f = (n, q) => {
// let S = 1,
// b1 = 1;
// for(let i = 1;i < n;i++){
//   b1 *= q;
//   S += b1;
// }
// console.log(S);
// return S;
// }

// f(5, 2);
// f(4, 3);

// function f(n, q) {
//   let Sn = 1,
//     b1 = 1;
//   if (n < 1) {
//     return 0;
//   } else {
//     return b1 * Math.pow(q,n - 1) + f(n - 1, q);
//   }
// }
// console.log("Res", f(5, 2));
// console.log("Res", f(4, 3));

/*
Завдання 3

Написати розв’язок нижче описаного завдання за допомогою function expression or arrow:

1. Створіть функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt().

2. Потрібно щоб функція виводила діапазон тільки простих чисел console.log(), між тими які ввів користувач.

Приклад роботи:

simpleNumber(10,15) – має повернути 11, 13

simpleNumber (2,20) – має повернути 2,3,5,7,11,13,17,19

------------------------------------------------------------------------------------------ */

// let simpleNumber = function () {
//   let start = prompt(`write first number`);
//   let end = prompt(`write last number`);
//   let str = "";

//   if (start > end) {
//     [start, end] = [end, start];
//   }

//   function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)&& i>1) {
//       str += " " + i;
//     }

//   }
//   console.log(`Прості числа в діапазоні між ${start} та ${end} - ${str}`);

// };
// simpleNumber();

// let simpleNumber = () => {
//   let start = prompt(`write first number`);
//   let end = prompt(`write last number`);
//   let str = "";

//   if (start > end) {
//     [start, end] = [end, start];
//   }

// let isPrime= num => {
//     for (let i = 2; i <= Math.sqrt(num); i++) {ß
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)&& i>1) {
//       str += " " + i;
//     }

//   }
//   console.log(`Прості числа в діапазоні між ${start} та ${end} - ${str}`);

// };
// simpleNumber();


