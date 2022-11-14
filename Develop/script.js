// Assignment code here
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);
//This is my database. Numbers, Lowercase letters, Uppercase letters, and Special characters
let characters = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\\", ":", ";", "'", "<", ",", ">", ".", "?", "/"],
};
let userInput = '';
let choices = '';
let hasLowerCase = '';
let hasUpperCase = '';
let hasNumbers = '';
let hasSpecial = '';


//function getRandomLL(lowerLetters) {
//  let lowerLettersIndex = Math.floor(Math.random() * lowerLetters.length);
//  let rLowerLetter = lowerLetters[lowerLettersIndex];
//  return rLowerLetter;
//}

// Get references to the #generate element


//This function will generat eht password and retunr it to the correct password
function generatePassword() {
  password = [];
  userInput = Number(
    prompt("Please enter how many characters your password is. (8-128 characters)")
  );
  if (!userInput) {
    alert("You need to have a password length.");
  } else if (userInput < 8 || userInput > 128) {
    alert("Your password does not meet the length criteria");
  } else {
    hasLowerCase = confirm("Do you want lower case characters?");
    hasUpperCase = confirm("Do you want upper case characters?");
    hasNumbers = confirm("Do you want numeric characters?");
    hasSpecial = confirm("Do you want special characters?");
  }
  //Has 4 +
  if (hasLowerCase && hasUpperCase && hasNumbers && hasSpecial) {
    choices = characters.lowerCase.concat(
      characters.upperCase,
      characters.numbers,
      characters.special
    );
  }
  //Has 4 -
  else if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecial) {
    alert(`You must choose a criteria`);
  }
  else if (!hasLowerCase && hasUpperCase && hasNumbers && hasSpecial) { choices = characters.upperCase.concat(characters.numbers, characters.special); }
  else if (hasLowerCase && !hasUpperCase && hasNumbers && hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase, characters.special); }
  else if (hasLowerCase && hasUpperCase && !hasNumbers && hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase, characters.special); }
  else if (hasLowerCase && hasUpperCase && hasNumbers && !hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase, characters.numbers); }
  //2+, 2-
  else if (!hasLowerCase && !hasUpperCase && hasNumbers && hasSpecial) { choices = characters.numbers.concat(characters.special); }
  else if (!hasLowerCase && hasUpperCase && !hasNumbers && hasSpecial) { choices = characters.upperCase.concat(characters.special); }
  else if (!hasLowerCase && hasUpperCase && hasNumbers && !hasSpecial) { choices = characters.upperCase.concat(characters.numbers); }
  else if (hasLowerCase && !hasUpperCase && !hasNumbers && hasSpecial) { choices = characters.lowerCase.concat(characters.special); }
  else if (hasLowerCase && !hasUpperCase && hasNumbers && !hasSpecial) { choices = characters.lowerCase.concat(characters.numbers); }
  else if (hasLowerCase && hasUpperCase && !hasNumbers && !hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase); }
  //1+, 3-
  else if (!hasLowerCase && hasUpperCase && !hasNumbers && !hasSpecial) { choices = characters.upperCase; }
  else if (!hasLowerCase && !hasUpperCase && hasNumbers && !hasSpecial) { choices = characters.numbers; }
  else if (!hasLowerCase && !hasUpperCase && !hasNumbers && hasSpecial) { choices = characters.special; }
  else if (hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecial) { choices = characters.lowerCase; }
  else {
    choices = charset.special;
  }

  for (let i = 0; i < userInput; i++) {
    let finalChoice = choices[Math.floor(Math.random() * choices.length)];
    password.push(finalChoice);
  }

  let passwordString = password.join("");


  document.querySelector("#password").textContent = passwordString;
}

// Write password to the #password input
