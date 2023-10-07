
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.



let guestList: Array <string> = [
    "Zia Khan",
    "Jahanzaib",
    "Umaiz"
];

// 1st step informing people that you found a bigger dinner table
for (let guest of guestList) {
    console.log(`Hello ${guest}, We found a bigger dinner table.`);
}

// 2nd step Add a new guest to the beginning of Array
let newGuestAtBeginning: string = "Mustafa"
guestList.unshift(newGuestAtBeginning)


//3rd step Add one guest to the middle of Array
let newGuestInMiddle: string = "zain"
let middleIndex: number = Math.floor(guestList.length / 2)
guestList.splice(middleIndex, 0, newGuestInMiddle)


// 4th step use append() to add new guest to the end of your list
let newGuestAtEnd: string = "ahmed"
guestList.push(newGuestAtEnd)

console.log(guestList)

// Final Step Print a new set of invitation messages
console.log("New set of invitations messages:")

for (let guest of guestList)
{
    console.log(`Dear ${guest}, you are invited to Dinner`)
}