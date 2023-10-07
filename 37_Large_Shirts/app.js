// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "for gents only"; }
    return console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// large shirt with default message
makeShirt();
// midium shirt with default message
makeShirt("Medium");
// custom shirt with a different message and size
makeShirt("small");
