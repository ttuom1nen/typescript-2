// Type annotations:
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

class Animal {}

let rhino: Animal = new Animal();

let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// Type inference:
// TypeScript detects the type
let cakes = 5;
let capitol = "Helsinki";

// When to use annotations?
// 1) Function returns the 'any' type
const json = "{'x': 10, 'y': 20}";
const coords: { x: number; y: number } = JSON.parse(json);

// 2) When declaring a variable on one line and init it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}

// 3) Variable whose type cant be inferred correctly
let numbers = [-10, 2, 12];
let positiveNumbers: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveNumbers = numbers[i];
    }
}
