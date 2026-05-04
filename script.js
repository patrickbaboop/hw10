$(function() { 
  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.sleep-button').click(clickedSleepButton);
});

// PET OBJECT
var pet_info = {
  name: "Buddy",
  weight: 20,
  happiness: 50
};

// ===============================
// BUTTON FUNCTIONS (WITH LOGGING)
// ===============================

function clickedTreatButton() {
  console.log("Treat button clicked");

  pet_info.happiness += 5;
  pet_info.weight += 2;

  console.info("Updated pet:", pet_info);

  showMessage("Yum! That was tasty 🦴");
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  console.warn("Play button clicked");

  pet_info.happiness += 8;
  pet_info.weight -= 1;

  showMessage("That was fun! 🎾");
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  console.error("Exercise triggered error");

  triggerTypeError(); // TypeError

  pet_info.happiness -= 3;
  pet_info.weight -= 2;

  showMessage("I'm tired... 🐾");
  checkAndUpdatePetInfoInHtml();
}

function clickedSleepButton() {
  console.log("Sleep button clicked");

  triggerViolation(); // performance violation

  pet_info.happiness += 3;

  showMessage("Zzz... I feel better 😴");
  checkAndUpdatePetInfoInHtml();
}

// ===============================
// MAIN UPDATE FUNCTIONS
// ===============================

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {

  debugger; // BREAKPOINT FOR DEVTOOLS

  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  if (pet_info.happiness > 100) {
    pet_info.happiness = 100;
    showMessage("I'm SUPER happy!!! 🐕💨");
  }
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
}

// ===============================
// MESSAGE DISPLAY
// ===============================

function showMessage(message) {
  $('.pet-message').stop().fadeOut(200, function() {
    $(this).text(message);
    $(this).fadeIn(400);
  });
}

// ===============================
// DEVTOOLS FEATURES
// ===============================

// Logging
console.log("Pet initialized:", pet_info);
console.info("App loaded");
console.warn("Warning example");
console.error("Error example");

// Table
console.table([pet_info]);

// Group
console.group("Pet Info");
console.log(pet_info);
console.groupEnd();

// Custom
console.log("%cGiga Pet Running 🐶", "color: green; font-size: 16px;");

// 404 Error
fetch("https://example.com/not-found");

// TypeError
function triggerTypeError() {
  let x;
  x.toUpperCase();
}

// Violation
function triggerViolation() {
  setTimeout(() => {
    let start = Date.now();
    while (Date.now() - start < 200) {}
  }, 1000);
}

// BUG
function buggyAdd(a, b) {
  return a - b; // WRONG
}

console.log("Buggy result:", buggyAdd(5, 3));