// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var guestList = [
    "Zia Khan",
    "Jahanzaib",
    "Umaiz"
];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello ".concat(guest, ", We found a bigger dinner table."));
}
// 2nd step Add a new guest to the beginning of Array
var newGuestAtBeginning = "Mustafa";
guestList.unshift(newGuestAtBeginning);
// console.log(guestList)
//3rd step Add one guest to the middle of Array
var newGuestInMiddle = "zain";
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// console.log(guestList)
// 4th step use append() to add new guest to the end of your list
var newGuestAtEnd = "ahmed";
guestList.push(newGuestAtEnd);
console.log(guestList);
// Final Step Print a new set of invitation messages
console.log("New set of invitations messages:");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to Dinner"));
}
