// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//  Sample array of names

let names: string[] =['Feroz', 'Jahanzaib', 'Umaiz', 'Mustafa'];


// Loop through the array and print personalized messages

for (let name of names) {

    console.log(`Hello! ${name}, Have a great day.`);
    
}