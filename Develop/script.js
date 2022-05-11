// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var criteria = passwordPrompt();
  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordPrompt() {

}

function generatePassword(passCriteria) {
  //prompt for the length of the password. Must be between 8 and 128 characters

  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  // at least one character type muse be created
}

