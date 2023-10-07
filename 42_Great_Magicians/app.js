// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Array of magician Names
var magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbleedore", "Ron Weasley"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// modify the aarray to add "the Great" to each magician's name
var greatMagicians = makeGreat(magicianNames);
// call the function to show the great magician's names
console.log("\n Great Magicians:");
show_magicians(greatMagicians);
