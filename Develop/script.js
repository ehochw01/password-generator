// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var criteria = passwordPrompt();
  console.log(criteria);
  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//prompt for the length of the password. Must be between 8 and 128 characters
function passwordPrompt() {
  // creating a password criteria object that will contain all of the criteria the user chooses
  var criteria = {length:0, lowercase:false, uppercase:false, numeric:false, special:false};
  //prompt password length
  var length = prompt("How long do you want the password to be (choose a length between 8 and 128 characters");
  // makes sure user input is a number between 8 and 128
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please choose a password length of at least 8 characters and no more than 128 characters");
    return passwordPrompt();
  } else {
    criteria.length = length;
  }
  var atLeastOneCharacterTypeSelected = false;
  while (!atLeastOneCharacterTypeSelected){
      //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    if (confirm("Do you want to include lowercase characters?")) {
      criteria.lowercase = true;
      atLeastOneCharacterTypeSelected = true;
    }
    if (confirm("Do you want to include uppercase characters?")) {
      criteria.uppercase = true;
      atLeastOneCharacterTypeSelected = true
    }
    if (confirm("Do you want to include numeric characters?")) {
      criteria.numeric = true;
      atLeastOneCharacterTypeSelected = true
    }
    if (confirm("Do you want to include special characters?")) {
      criteria.special = true;
      atLeastOneCharacterTypeSelected = true;
    }

    if (!atLeastOneCharacterTypeSelected) {
      alert("You must select at least one type of character")
    }
  }

  return criteria;
}

function generatePassword(passCriteria) {


  // at least one character type muse be created
}

