let apples: number = 5;
// : number === tipe anotation
let speed: string = "sasd";
let hasName: boolean = true;

let isNull: null = null;
let isUndefined: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "as"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// class Car {}

const honda: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use anotations
// 1) function that returns 'any' type

const json = '{"x" : 10, "y": 20}';
const coordinates = JSON.parse(json);

console.log(coordinates);

// any means ts cant figure out what values does e.x a function returns or to what variable type it referes.
// avoid at all costs

// 2) dedclare a variable and initialize in one line

let words = ["ddd", "sss", "fff"];

let foundwords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "sss") {
    foundwords = true;
  }
}

// 3 ) values whose typ cannot be inferred correectly

let number = [-10, -1, -12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}

// https://globant.udemy.com/course/react-and-typescript-build-a-portfolio-project/learn/lecture/24340010#overview
