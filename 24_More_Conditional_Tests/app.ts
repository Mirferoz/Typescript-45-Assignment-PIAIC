// • Tests for equality and inequality with strings
let str1: string = "Hello";
let str2: string = "hello";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true

// Test using the lower case function
let text1: string = "Hello World";
let text2: string = "hello world";
console.log(text1.toLowerCase() === text2);

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false

// • Tests using "and" and "or" operators
let a: number = 5;
let b: number = 10;
let c: number = 15;

console.log(a < b && b < c); // true

console.log(a < b || b > c); // ture at least one

console.log(a > b && b < c); // false

console.log(a < b || b > c); //false 

// • Test whether an item is in a array
let colors: string[] = ["white", "black", "red", "green", "yellow", "blue"];

console.log(colors.includes('black')); // true
console.log(colors.includes('purple')); // false

// • Test whether an item is not in a array 
let flowers: string[] = ["rose", "jasmine", "iris", "lotus"];

console.log(!flowers.includes('marigold')); // true
console.log(flowers.includes('rose')); // false