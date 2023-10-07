// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Array of magician Names
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
