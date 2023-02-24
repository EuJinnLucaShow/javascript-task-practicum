// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// Use conditional (ternary) operator condition ? exprIfTrue : exprIfFalse
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') + " banjo"; 
}

// function areYouPlayingBanjo(name) {
//   if(name.charAt(0) === 'R' || name.charAt(0) === 'r') {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

console.log(areYouPlayingBanjo("Adam")); 
console.log(areYouPlayingBanjo("Paul")); 
console.log(areYouPlayingBanjo("Ringo")); 
console.log(areYouPlayingBanjo("bravo")); 
console.log(areYouPlayingBanjo("rolf")); 