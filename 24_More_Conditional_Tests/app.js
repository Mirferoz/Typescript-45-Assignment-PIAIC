// • Tests for equality and inequality with strings
var str1 = "Hello";
var str2 = "hello";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true
// Test using the lower case function
var text1 = "Hello World";
var text2 = "hello world";
console.log(text1.toLowerCase() === text2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
// • Tests using "and" and "or" operators
var a = 5;
var b = 10;
var c = 15;
console.log(a < b && b < c); // true
console.log(a < b || b > c); // ture at least one
console.log(a > b && b < c); // false
console.log(a < b || b > c); //false 
// • Test whether an item is in a array
var colors = ["white", "black", "red", "green", "yellow", "blue"];
console.log(colors.includes('black')); // true
console.log(colors.includes('purple')); // false
// • Test whether an item is not in a array 
var flowers = ["rose", "jasmine", "iris", "lotus"];
console.log(!flowers.includes('marigold')); // true
console.log(flowers.includes('rose')); // false
