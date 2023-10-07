var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Step 1: Create an array to store Travel destination
var travelDestinations = ["istanbul", "london", "berlin", "sheeraz", "mashad", "najaf"];
// Step 2:  Print your array its original order
console.log("Original Order:");
console.log(travelDestinations);
// Step 3: Print your array in allphabatical order without modifying the actual List.
console.log("\nAllphabatical Order without modifying the actual List");
console.log(__spreadArray([], travelDestinations, true).sort());
// Step 4: Show that your array is still in its original order by printing it.
console.log("Show that your array is still in its original order by printing it.");
console.log(travelDestinations);
// Step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical Order without modifying the original list");
console.log(__spreadArray([], travelDestinations, true).sort().reverse());
// Step 6: Show that your array is still in its original order by printing it.
console.log("\n Showing Array in still in its original order");
console.log(travelDestinations);
// Step 7: Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reverse Order");
travelDestinations.reverse();
console.log(travelDestinations);
// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to Original Order");
travelDestinations.reverse();
console.log(travelDestinations);
// Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to Alphabatical Order");
travelDestinations.sort();
console.log(travelDestinations);
// Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Change to Reverse Alphabatical Order");
travelDestinations.sort().reverse();
console.log(travelDestinations);
