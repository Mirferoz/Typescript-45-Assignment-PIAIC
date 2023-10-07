// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Array of magician Names
const magicianNames: String[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbleedore", "Ron Weasley"];

function show_magicians(magicians: string[]): void 
{
    for (const magician of magicians) {
        console.log(magician);
    }
}

// call the function to show the magician's names
// show_magicians(magicianNames);
show_magicians(magicianNames);