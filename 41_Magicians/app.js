// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Array of magician Names
var magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbleedore", "Ron Weasley"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// call the function to show the magician's names
// show_magicians(magicianNames);
show_magicians(magicianNames);
