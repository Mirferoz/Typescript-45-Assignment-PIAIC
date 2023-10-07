// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Empty Array Case
var emptyUserNames = [];
// Non Empty Array Case
var userNames = ["Admin", "Feroz Hassan", "Mustafa", "Umaiz", "Jahanzaib"];
// Functional Case
function greetUser(usernames) {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for loggingg in again."));
        }
    }
}
console.log("For non empty username:\n");
greetUser(userNames);
// to make array empty we just assign an empty array to userNames
userNames = [];
console.log("\n\n For empty username:\n");
greetUser(userNames);
