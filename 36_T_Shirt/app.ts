// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.







const makeShirt = (size: string, message: string): string => {
    console.log(`size: ${size}, message: ${message}`);
    return `Size: ${size}, message: ${message}`;
}

// call the function 
let size: string = "Medium";
let message: string = "for gents only";

makeShirt(size, message);

// directly call the function
makeShirt("large", "for gents only");