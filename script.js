// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  let capCheck = document.querySelector("#criteriaCap");
  let spcCheck = document.querySelector("#criteriaSpc");
  let numCheck = document.querySelector("#criteriaNum");
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let specials = '!#$%&()*+,-./:;<=>?@[]^_`{|}~"';
  let numbers = '0123456789'
  let password = ""
  let sizeInput = document.getElementById("fname");
  let passwordSize = sizeInput.value;
  let numbOfCaps = 0
  let indexOfCaps = []
  if (capCheck.checked){
    numbOfCaps = getNum(3)
    for (let i=0; i < numbOfCaps; i++){
      let x = getNum(passwordSize)
      indexOfCaps.push(x)
    }
  }
  let numbOfSpecials = 0
  let indexOfSpecials =[]
  if (spcCheck.checked){
    numbOfSpecials = getNum(3)
    for (let i=0; i < numbOfSpecials; i++){
      let x = getNum(passwordSize)
      while(indexOfCaps.includes(x)){
        x = getNum(passwordSize)
      }
      indexOfSpecials.push(x)
    }
  }
  let numbOfNumbers = 0
  let indexOfNumbers =[]
  if (numCheck.checked){
    numbOfNumbers = getNum(3)
    for (let i=0; i < numbOfNumbers; i++){
      let x = getNum(passwordSize)
      while(indexOfCaps.includes(x) || indexOfSpecials.includes(x)){
        x = getNum(passwordSize)
      }
      indexOfNumbers.push(x)
    }
  }
  for (let i=0; i < passwordSize; i++){
    let x = chooseChar(characters)
    if (indexOfCaps.includes(i)){
      x = x.toUpperCase()
    }
    if (indexOfSpecials.includes(i)){
      x = chooseChar(specials)
    }
    if (indexOfNumbers.includes(i)){
      x = chooseChar(numbers)
    }
    password = password + x
  }
  // var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for generating a random character from an array
function chooseChar(array){
  let x = array[Math.floor(Math.random()*array.length)]
  return x
}
function getNum(maxValue){
  let x = Math.ceil(Math.random()*maxValue)
  return x
}

