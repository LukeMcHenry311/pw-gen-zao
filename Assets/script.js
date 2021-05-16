// DOM elements
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


generateEl.addEventListener('click', () => {
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  var newPassword = generatedPassword(hasLower,hasUpper,hasNumber,hasSymbol,length);
  resultEl.innerText = newPassword
});


// generate password function
function generatedPassword(lower, upper, number, symbol, length) {
  //1. Init pw var
  //2. Filter out unchecked types
  //3. Loop over length call generator function for each type
  //4. Add final pw to the pw var and return 


  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  // console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  // console.log('typesArr: ', typesArr);


  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type) [0];
      console.log('funcName: ', funcName)

      generatedPassword += randomFunc[funcName] ();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
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

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatedPassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);

// var password = generatedPassword();