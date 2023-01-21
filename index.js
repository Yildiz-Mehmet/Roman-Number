const numbers = document.getElementById("number1");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const roman2 = document.getElementById("roman");

//************** */
// const roman = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };

const roman1 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let romanArray = [];

let romanString;

// let number = prompt("Please, enter a number");

let result1;

function myFunction() {
  while (number > 0) {
    if (number >= 1000) {
      result1 = Math.floor(number / 1000);
      for (let i = 0; i < result1; i++) {
        romanArray.push("M");
      }
      number = number % 1000;
    } else if (number >= 900) {
      result1 = Math.floor(number / 900);
      for (let i = 0; i < result1; i++) {
        romanArray.push("CM");
      }
      number = number % 900;
    } else if (number >= 500) {
      result1 = Math.floor(number / 500);
      for (let i = 0; i < result1; i++) {
        romanArray.push("D");
      }
      number = number % 500;
    } else if (number >= 400) {
      result1 = Math.floor(number / 400);
      for (let i = 0; i < result1; i++) {
        romanArray.push("CD");
      }
      number = number % 400;
    } else if (number >= 100) {
      result1 = Math.floor(number / 100);
      for (let i = 0; i < result1; i++) {
        romanArray.push("C");
      }
      number = number % 100;
    } else if (number >= 90) {
      result1 = Math.floor(number / 90);
      for (let i = 0; i < result1; i++) {
        romanArray.push("XC");
      }
      number = number % 90;
    } else if (number >= 50) {
      result1 = Math.floor(number / 50);
      for (let i = 0; i < result1; i++) {
        romanArray.push("L");
      }
      number = number % 50;
    } else if (number >= 40) {
      result1 = Math.floor(number / 40);
      for (let i = 0; i < result1; i++) {
        romanArray.push("XL");
      }
      number = number % 40;
    } else if (number >= 10) {
      result1 = Math.floor(number / 10);
      for (let i = 0; i < result1; i++) {
        romanArray.push("X");
      }
      number = number % 10;
    } else if (number >= 9) {
      result1 = Math.floor(number / 9);
      for (let i = 0; i < result1; i++) {
        romanArray.push("IX");
      }
      number = number % 9;
    } else if (number >= 5) {
      result1 = Math.floor(number / 5);
      for (let i = 0; i < result1; i++) {
        romanArray.push("V");
      }
      number = number % 5;
    } else if (number >= 4) {
      result1 = Math.floor(number / 4);
      for (let i = 0; i < result1; i++) {
        romanArray.push("IV");
      }
      number = number % 4;
    } else if (number >= 1) {
      result1 = Math.floor(number / 1);
      for (let i = 0; i < result1; i++) {
        romanArray.push("I");
      }
      number = number % 1;
    }
  }
  romanString = romanArray.join("");
  roman2.innerHTML = `${numbers.value}: ${romanString}`;
  numbers.value = "";
}

btn.addEventListener("click", () => {
  number = numbers.value;
  myFunction();
  romanArray = [];
});
reset.addEventListener("click", () => {
  window.location.reload();
});
