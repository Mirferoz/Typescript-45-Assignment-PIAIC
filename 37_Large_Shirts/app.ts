// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



function makeShirt(size: string="large", message: string="for gents only") : void {
   return console.log(`Size: ${size}, Message: ${message}`);
}

// large shirt with default message
makeShirt();

// midium shirt with default message
makeShirt("Medium");

// custom shirt with a different message and size
makeShirt("small");