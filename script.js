$(function() { 
  // Runs when page is ready

  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.sleep-button').click(clickedSleepButton); // new button

});

// PET OBJECT
var pet_info = {
  name: "Buddy",
  weight: 20,
  happiness: 50
};

// BUTTON FUNCTIONS

function clickedTreatButton() {
  // Increase happiness and weight
  pet_info.happiness += 5;
  pet_info.weight += 2;

  showMessage("Yum! That was tasty 🦴");
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Increase happiness, decrease weight
  pet_info.happiness += 8;
  pet_info.weight -= 1;

  showMessage("That was fun! 🎾");
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease happiness and weight
  pet_info.happiness -= 3;
  pet_info.weight -= 2;

  showMessage("I'm tired... 🐾");
  checkAndUpdatePetInfoInHtml();
}

// NEW BUTTON BEHAVIOR
function clickedSleepButton() {
  // Increase happiness
  pet_info.happiness += 3;

  showMessage("Zzz... I feel better 😴");
  checkAndUpdatePetInfoInHtml();
}

// MAIN UPDATE FUNCTIONS

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

// PREVENT NEGATIVE VALUES + BONUS FEATURE
function checkWeightAndHappinessBeforeUpdating() {

  // Prevent weight below 0
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  // Prevent happiness below 0
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  // Bonus: cap happiness at 100 and show special message
  if (pet_info.happiness > 100) {
    pet_info.happiness = 100;
    showMessage("I'm SUPER happy!!! 🐕💨");
  }
}

// UPDATE HTML
function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
}

// VISUAL MESSAGE FUNCTION (no alert or console)
function showMessage(message) {

  /*
    jQuery Method #1: fadeOut()
    - Smoothly hides the message before updating text
  */
  $('.pet-message').stop().fadeOut(200, function() {

    // Update text after fade out
    $(this).text(message);

    /*
      jQuery Method #2: fadeIn()
      - Smoothly shows the new message
    */
    $(this).fadeIn(400);
  });
}