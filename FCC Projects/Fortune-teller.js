
let fortune1 = "fortune";
let fortune2 = "fortune2";
let fortune3 = "silver";
let fortune4 = "gold";
let fortune5 = "diamond";
console.log(Math.random());
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

let selectedFortune;
if (randomNumber === 1) {
    selectedFortune = fortune1;
} else if (randomNumber === 2) {
    selectedFortune = fortune2;
} else if (randomNumber === 3) {
    selectedFortune = fortune3;
} else if (randomNumber === 4) {
    selectedFortune = fortune4;
} else if (randomNumber === 5) {
    selectedFortune = fortune5;
}

// Step 4: Output the selected fortune to the console
console.log(selectedFortune);