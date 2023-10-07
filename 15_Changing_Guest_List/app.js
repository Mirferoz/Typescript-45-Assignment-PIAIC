"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = [
    "Zia Khan",
    "Jahanzaib",
    "Umaiz",
    "Mustafa"
];
exports.guestList = guestList;
var guestHowCantMakeIt = "Umaiz";
console.log("".concat(guestHowCantMakeIt, " can't make it to Dinner"));
var newGuest = "zain";
var indexOfGuestHowCantMakeIt = guestList.indexOf(guestHowCantMakeIt);
console.log(indexOfGuestHowCantMakeIt);
if (indexOfGuestHowCantMakeIt !== -1) {
    guestList[indexOfGuestHowCantMakeIt] = newGuest;
}
console.log("second set of invitation messages:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to Dinner"));
});
