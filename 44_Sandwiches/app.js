// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary");
    if (items.length === 0) {
        console.log("    - You ordered an emply sandwich. Please add some itmes.");
    }
    else {
        items.forEach(function (item, index) {
            console.log("     ".concat(item + 1, ". ").concat(index));
        });
    }
    console.log("\n");
}
// call the function with differnt numbers of arguments
makeSandwich();
makeSandwich("lettuce", "tomato", "mayonnaise");
makeSandwich("cheese", "ice burg");
makeSandwich("butter", "chile sauce");
