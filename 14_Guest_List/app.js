// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = [
    "Zia Khan",
    "Jahanzaib",
    "Mustafa",
    "Umaiz",
    "Zain"
];
guestList.forEach(function (guestName) {
    console.log("".concat(guestName, ", Your are invited to dinner please join us."));
});
