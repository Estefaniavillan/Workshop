console.log("| P | Q | NOT P | NOT P AND Q |");
console.log("| T | T |   F   |     " + !true + "   |");
console.log("| T | F |   F   |     " + !false + "    |");
console.log("| F | T |   T   |     " + !false+ "    |");
console.log("| F | F |   T   |     " + !false + "    |");

console.log("| P | Q | NOT P | NOT Q | NOT P AND NOT Q |");
console.log("| T | T |   F   |   F   |  " + (!false && !false) + "           |");
console.log("| T | F |   F   |   T   |  " + (!false && !true) + "          |");
console.log("| F | T |   T   |   F   |  " + (!true && !false) + "          |");
console.log("| F | F |   T   |   T   |  " + (!true && !true) + "          |");
