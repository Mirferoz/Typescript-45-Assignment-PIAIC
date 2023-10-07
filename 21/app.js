// they think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var tShirt = {
    name: "Polo",
    color: "red",
    price: 2000,
};
var tShirts = [];
tShirts.push(tShirt);
tShirts.push({
    name: "polo",
    color: "black",
    price: 2500,
});
console.log(tShirts);
