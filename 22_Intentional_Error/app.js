// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Function to create a Array
function createCars(name, color, price) {
    return {
        name: name,
        color: color,
        price: price
    };
}
var cars = [
    createCars("civic", "white", 10199000),
    createCars("Corolla", "black", 7799000),
    createCars("Fortuner", "white", 21089000),
    createCars("Alto", "black", 2800000),
    createCars("Cultus", "black", 3700000)
];
// Access an Invalid Index
var InvalidIndex = 10; // thera are 5 elements in the array, so this will cause an error
console.log("Fruits at index ".concat(InvalidIndex, ":"), cars[InvalidIndex]);
// Print the Fruits
cars.forEach(function (car) {
    console.log("Name: ".concat(car.name, ", Color: ").concat(car.color, ", Price: ").concat(car.price));
});
