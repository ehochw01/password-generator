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


//prompt for the length of the password. Must be between 8 and 128 characters
function passwordPrompt() {
  // initialize a password criteria object that will contain all of the criteria the user chooses
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
   // at least one character type muse be selected by the user
  while (!atLeastOneCharacterTypeSelected){
      //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    if (confirm("Do you want to include lowercase characters?")) {
      criteria.lowercase = true;
      atLeastOneCharacterTypeSelected = true;
    }
    if (confirm("Do you want to include uppercase characters?")) {
      criteria.uppercase = true;
      atLeastOneCharacterTypeSelected = true;
    }
    if (confirm("Do you want to include numeric characters?")) {
      criteria.numeric = true;
      atLeastOneCharacterTypeSelected = true;
    }
    if (confirm("Do you want to include special characters?")) {
      criteria.special = true;
      atLeastOneCharacterTypeSelected = true;
    }
    if (!atLeastOneCharacterTypeSelected) {
      alert("You must select at least one type of character");
    }
  }

  return criteria;
}

function generatePassword(passCriteria) {
  var charSet = "";
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '123456789';
  // weird things were happening with the quotation marks so needed to concatenate 
  var specialFirstpart = ' !"#$%&';
  var specialSecondpart = "')*+,-./:;<=>?@[\]^_`{|}~";
  const special =  specialFirstpart + specialSecondpart;

  // create a string that contains the set of possible characters for the password based on the user-confirmed criteria
  if (passCriteria.lowercase) {
    charSet += lowerCase;
  }
  if (passCriteria.uppercase) {
    charSet += upperCase;
  }
  if (passCriteria.numeric) {
    charSet += numbers;
  }
  if (passCriteria.special) {
    charSet += special;
  }

  // convert concatenated string to an array
  var charSetarray = charSet.split('');
  var n = charSetarray.length;  
  //start building the password out of random characters from the charSet
  var passwordArray = [];
  for (var i = 0; i < passCriteria.length; i++) {
    var j = getRandomNum(n);
    var char = charSetarray[j];
    passwordArray[i] = char;
  }
  //turn the password char array into a string and return
  return passwordArray.join('');
}

// a random number generation function found from the internet https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
function getRandomNum(n) {
  return Math.floor(Math.random() * n);
}

