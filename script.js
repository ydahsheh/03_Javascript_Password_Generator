// Assignment Code

//variable declaration
var onlyNumbers;
var specialCharacters;
var upperCase;
var lowerCase;
var alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var alphabetsLower = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var chars = "[!#$%&\'()*+,-.\:\"<=>?@[\\]^_`{|}~"
var generateBtn = document.querySelector("#generate");
var pass;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//calling generatepassword function for password generation
function generatePassword() {

  //prompt for choosing the characters for the password
  num = prompt("How many characters do you wish to have in the password ? Please choose between 8 and 128")

  //re prompt if the number is not inbetween 8 and 128
  if (num <= 8 || num > 128) {
    alert("The password should be in between 8 and 128")
    num = prompt("How many characters do you wish to have in the password ? Please choose between 8 and 128")

  }
  // re - prompt if the number is not typed
  else if (!num) {
    alert("Please enter a value")
    num = prompt("How many characters do you wish to have in the password ? Please choose between 8 and 128")
  }

  // series of prompts for password type including numbers, special characters, uppercase and lowercase
  else {
    onlyNumbers = confirm("Do you want the password to have Numbers?");
    specialCharacters = confirm("Do you want the password to have Special Characters?");
    upperCase = confirm("Do you want the password to have Upper Case letters?");
    lowerCase = confirm("Do you want the password to have Lower Case letters?");
  };

  //if No options choosen re prompting the series of prompts
  if (!onlyNumbers && !specialCharacters && !upperCase && !lowerCase) {
    alert("Please choose alteast one option");
    onlyNumbers = confirm("Do you want the password to have Numbers?");
    specialCharacters = confirm("Do you want the password to have Special Characters?");
    upperCase = confirm("Do you want the password to have Upper Case letters?");
    lowerCase = confirm("Do you want the password to have Lower Case letters?");

  }
  //  if All 4 types of prompts are chosen (concatinate all strings)
  else if (onlyNumbers && specialCharacters && upperCase && lowerCase) {
    pass = numbers.concat(alphabetsLower, alphabetsUpper, chars)
  }

  //************** */ Only three types of prompts  among 4 **********
  else if (onlyNumbers && specialCharacters && upperCase) {
    pass = numbers.concat(alphabetsUpper, chars)
  }
  else if (specialCharacters && lowerCase && onlyNumbers) {
    pass = numbers.concat(alphabetsLower, chars)
  }
  else if (onlyNumbers && lowerCase && upperCase) {
    pass = numbers.concat(alphabetsLower, alphabetsUpper)
  }
  else if (upperCase && lowerCase && specialCharacters) {
    pass = chars.concat(alphabetsLower, alphabetsUpper)

    //.................if only 2 types of prompts among 4.............
  }
  else if (lowerCase && onlyNumbers) {
    pass = numbers.concat(alphabetsLower)
  }
  else if (specialCharacters && onlyNumbers) {
    pass = numbers.concat(chars)
  }
  else if (onlyNumbers && upperCase) {
    pass = numbers.concat(alphabetsUpper)
  }
  else if (specialCharacters && lowerCase) {
    pass = chars.concat(alphabetsLower)
  }
  else if (specialCharacters && upperCase) {
    pass = chars.concat(alphabetsUpper)
  }
  else if (lowerCase && upperCase) {
    pass = alphabetsLower.concat(alphabetsUpper)
  }
  //----------------------choosing 1 option among 4 ------------------
  else if (onlyNumbers) {
    pass = numbers;
  }
  else if (upperCase) {
    pass = alphabetsUpper;
  }
  else if (lowerCase) {
    pass = alphabetsLower;
  }
  else if (specialCharacters) {
    pass = chars;
  }

  // choosing the random password from the string created using concatination using map and join
  var randPassword =
    Array.from(crypto.getRandomValues(new Uint32Array(num)))
      .map((x) => pass[x % pass.length])
      .join('')

  //returning the password generated
  return randPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
