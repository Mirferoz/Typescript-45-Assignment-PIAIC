// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



// Array of Magician's names
const magicianNames: String[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbleedore", "Ron Weasley"];

function show_magicians(magicians: string[]): void 
{
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

// modify the aarray to add "the Great" to each magician's name
const greatMagicians: string[] = makeGreat(magicianNames);

// call the function to show the great magician's names
console.log("\n Great Magicians:");
show_magicians(greatMagicians);
