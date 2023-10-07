// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
var makeShirt = function (size, message) {
    console.log("size: ".concat(size, ", message: ").concat(message));
    return "Size: ".concat(size, ", message: ").concat(message);
};
// call the function 
var size = "Medium";
var message = "for gents only";
makeShirt(size, message);
// directly call the function
makeShirt("large", "for gents only");
