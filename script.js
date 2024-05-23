const inputValue = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const formattedInput = (input) =>{
  const regex = /[\s\W_]+/gmi;
  return input.replace(regex, "").toLowerCase();
}

const isPalyndrome = (input) => {
  const word = formattedInput(input);
  const wordCharacters = word.length;
  const middleCharacterIndex = Math.floor(wordCharacters/2) + 1

  for(let i= 0; i <= middleCharacterIndex; i++){
    if (word[i] !== word[wordCharacters - 1 - i ]){
      return false;
    }
  }
  return true;

}

button.addEventListener("click",()=> {
  if(inputValue.value === ""){
    alert("Please input a value");
  } 
  if(isPalyndrome(inputValue.value)){
    result.innerHTML = `<span class="right">${inputValue.value}</span> is a palindrome`;
  } else {
    result.innerHTML = `<span class="wrong">${inputValue.value}</span> is not a palindrome`;
  }
})