// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestList: Array<string> = [
    "Zia Khan", 
    "Jahanzaib",
    "Umaiz",
    "Mustafa"
];

let guestHowCantMakeIt: string = "Umaiz"
console.log(`${guestHowCantMakeIt} can't make it to Dinner`);


let newGuest: string = "zain";
let indexOfGuestHowCantMakeIt: number = guestList.indexOf(guestHowCantMakeIt);
console.log(indexOfGuestHowCantMakeIt);

if (indexOfGuestHowCantMakeIt !== -1) 
{
    guestList[indexOfGuestHowCantMakeIt] = newGuest
}

console.log("second set of invitation messages:")
guestList.forEach((guest: string) => 
{
    console.log(`Dear ${guest}, you are invited to Dinner`)
});

export{guestList};