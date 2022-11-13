// Assignment code here
let generateBtn = document.querySelector("#generate");

//This is my database. Numbers, Lowercase letters, Uppercase letters, and Special characters
let characters = {
  lowerCase =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special =["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\\", ":", ";", "'", "<", ",", ">", ".", "?", "/"],
};
let input;
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
  input = Number(
    prompt("Please enter how many characters your password is. (8-128 characters)")
  );
  if (!input) {
    alert("You need to have a password length.");
  }
  return password;//predefined password
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//let passwordLength = prompt('How many characters is your password?');
//console.log(passwordLength);
//let hasSpecialCharacters = confirm('Do you want special Characters?');
//console.log(hasSpecialCharacters);



function getRandomUL(upperLetters) {
  let upperLettersIndex = Math.floor(Math.random() * upperLetters.length);
  let rUpperLetter = upperLetters[upperLettersIndex];
  return rUpperLetter;
}

function getRandomNC(numberCharacters) {
  let upperLettersIndex = Math.floor(Math.random() * numberCharacters.length);
  let rUpperLetter = lowerLetters[upperLettersIndex];
  return rUpperLetter;
}

function getRandomArbitrary(max) {
  return Math.floor(Math.random() * max);
}