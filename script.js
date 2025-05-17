let hunger = 10;
let happiness = 10;

function updateDisplay() {
  document.getElementById("hungerText").innerText = `🍗 Fullness: ${hunger}`;
  document.getElementById("happinessText").innerText = `🎉 Happiness: ${happiness}`;

const status = document.getElementById("statusMessage");

if (hunger === 0 && happiness === 0) {
  status.innerText = "Mochi is starving and heartbroken... 😿 Please help!";
} else if (hunger <= 2 && happiness <= 3) {
  status.innerText = "Mochi is weak, lonely, and very hungry... 🥺💔";
} else if (hunger <= 2) {
  status.innerText = "Mochi’s tummy is rumbling... 🍽️ Feed me, please!";
} else if (happiness <= 2) {
  status.innerText = "Mochi is feeling really down and ignored... 😔";
} else if (hunger >= 8 && happiness >= 8) {
  status.innerText = "Mochi is full of joy and snacks! 😻 Life is purrfect!";
} else if (hunger >= 6 && happiness >= 6) {
  status.innerText = "Mochi is doing great! Let’s keep it that way! 🐾💖";
} else if (hunger <= 4 && happiness >= 7) {
  status.innerText = "I’m a happy kitty but I could use a snack... 😸🍪";
} else if (hunger >= 7 && happiness <= 4) {
  status.innerText = "I'm well-fed but kinda bored... wanna play? 🎾😐";
} else {
  status.innerText = "Mochi is feeling okay. Maybe a cuddle would help? 🐱";
}
}

function feedPet() {
  hunger = Math.min(10, hunger + 2);
  happiness = Math.min(10, happiness + 1);
  updateDisplay();
}

function playWithPet() {
  hunger = Math.max(0, hunger - 1);
  happiness = Math.min(10, happiness + 2);
  updateDisplay();
}

function sleepPet() {
  happiness = 10; // Fully restore happiness
  hunger = Math.max(0, hunger - 1); // Sleep still uses a little energy

  const petImg = document.getElementById("petMood");
  petImg.src = "sleeping.png";

  // Optional: show sleeping image for 2 seconds then update
  setTimeout(updateDisplay, 2000);
}

// Hunger decreases by 1 every 10 seconds
setInterval(() => {
  hunger = Math.max(0, hunger - 1);
  updateDisplay();
}, 10000); // 10000 ms = 10 seconds

// Happiness decreases by 1 every 5 seconds
setInterval(() => {
  happiness = Math.max(0, happiness - 1);
  updateDisplay();
}, 5000); // 5000 ms = 5 seconds


// Call once on page load
updateDisplay();
