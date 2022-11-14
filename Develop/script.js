// Assignment code here
let generateBtn = document.querySelector("#generate");

//This is my database. Numbers, Lowercase letters, Uppercase letters, and Special characters
let characters = {
  lowerCase =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special =["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\\", ":", ";", "'", "<", ",", ">", ".", "?", "/"],
};
let userInput;
let choices;
let hasLowerCase;
let hasUpperCase;
let hasNumeric;
let hasSpecialCharacters;

function generatePassword() { }

let passwordMinLength = 8;
let passwordMaxLength = 128;
let randomInt = getRandomNC(numberCharacters.length);
let password = [];
console.log(lowerLetters)
console.log(lowerLetters.length)


let lengthEntry = window.prompt('Your password must be between 8 and 128 characters. Please enter the desired length:');
console.log(lengthEntry);
if (lengthEntry < passwordMinLength || lengthEntry > passwordMaxLength) {
  let lengthCheckBad = window.alert('Oops, it looks like that is not an acceptable length. Please start over!');
  console.addEventListener(lengthCheckBad, ('click') => {
  })
}

//function getRandomLL(lowerLetters) {
//  let lowerLettersIndex = Math.floor(Math.random() * lowerLetters.length);
//  let rLowerLetter = lowerLetters[lowerLettersIndex];
//  return rLowerLetter;
//}

// Get references to the #generate element


//This function will generat eht password and retunr it to the correct password
function generatePassword() {
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
    hasNumeric = confirm("Do you want numeric characters?");
    hasSpecial = confirm("Do you want special characters?");
  }
  //Has 4 +
  if (hasLowerCase && hasUpperCase && hasNumeric && hasSpecial) {
    choise = characters.lowerCase.concat(
      characters.upperCase,
      characters.numbers,
      characters.special
    );
  }
  //Has 4 -
  else if (!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecial) {
    alert(`You must choose a criteria`);
  }
  else if (!hasLowerCase && hasUpperCase && hasNumeric && hasSpecial) { choices = characters.upperCase.concat(characters.numbers, characters.special); }
  else if (hasLowerCase && !hasUpperCase && hasNumeric && hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase, characters.special); }
  else if (hasLowerCase && hasUpperCase && !hasNumeric && hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase, characters.special); }
  else if (hasLowerCase && hasUpperCase && hasNumeric && !hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase, characters.numbers); }
  //2+, 2-
  else if (!hasLowerCase && !hasUpperCase && hasNumeric && hasSpecial) { choices = characters.numbers.concat(characters.special); }
  else if (!hasLowerCase && hasUpperCase && !hasNumeric && hasSpecial) { choices = characters.upperCase.concat(characters.special); }
  else if (!hasLowerCase && hasUpperCase && hasNumeric && !hasSpecial) { choices = characters.upperCase.concat(characters.numbers); }
  else if (hasLowerCase && !hasUpperCase && !hasNumeric && hasSpecial) { choices = characters.lowerCase.concat(characters.special); }
  else if (hasLowerCase && !hasUpperCase && hasNumeric && !hasSpecial) { choices = characters.lowerCase.concat(characters.numbers); }
  else if (hasLowerCase && hasUpperCase && !hasNumeric && !hasSpecial) { choices = characters.lowerCase.concat(characters.upperCase); }
  //1+, 3-
  else if (!hasLowerCase && hasUpperCase && !hasNumeric && !hasSpecial) { choices = characters.upperCase; }
  else if (!hasLowerCase && !hasUpperCase && hasNumeric && !hasSpecial) { choices = characters.numbers; }
  else if (!hasLowerCase && !hasUpperCase && !hasNumeric && hasSpecial) { choices = characters.special; }
  else if (hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecial) { choices = characters.lowerCase; }
  else {
    alert(`There has obviously been a mistake. Please reload the page.`);
    alert(`I am serious. Please reload.`);
    alert(`Dude spam escape c'mon did this error really break the page?`);
  }

  for (let i = 0; i < userInput; i++) {
    let finalChoice = choices[Math.floor(Math.random() * choices.length)];
    password.push(finalChoice);
  }

  let passwordString = password.join("");


  document.querySelector("#password").textContent = passwordString;
}

// Write password to the #password input
