const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
// Resource for generators https://net-comber.com/charset.html

// * 26 because thats the number of letters in the alphabet, + 97 because 97-122 are all lower-case characters in the browser character set
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// * 26 beacuse thats the number of letters in the alphabet, + 65 because 65-90 are all upper-case characters in the browser character set
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// * 10 because 0-9 are the 10 unique numbers we can use, + 48 because 48-57 are 1-9 in the browser character set
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// generate random number that's rounded and multiplied by the symbols length to get a random symbol (of the listed symbols)
function getRandomSymbol() {
  const symbols = '!"#$%&()*+,-./:;<=>?@^_|~'
  return symbols [Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);