const string = "abcdefghijklmnopqrstuvwxyz";
const singleWordArray = string.split("");

function hideScreen(id) {
  const home = document.getElementById(id);
  home.classList.add("hidden");
}
function showScreen(id) {
  const screen = document.getElementById(id);
  screen.classList.remove("hidden");
}

function getRandomWord() {
  const randomIndex = Math.random() * 25;
  let number = Math.round(randomIndex);
  let singleWord = singleWordArray[number];
  setBgColor(singleWord);
  const word = document.getElementById("word");

  word.innerText = singleWord;
}

function setBgColor(id) {
  const element = document.getElementById(id);
  element.classList.add("bg-yellow-500");
}
function removeBgColor(id) {
  const element = document.getElementById(id);
  element.classList.remove("bg-yellow-500");
}

function setResult(id, score ){
  const mistakeResult = document.getElementById(id);
  mistakeResult.innerText = score;
  return true
   

}

function getResult(event) {
  const pressWord = event.key;
  const targetWord = document.getElementById("word").innerText.toLowerCase();

  const mistakeResult = document.getElementById("mistake-result");
  const goodScore = document.getElementById("good-score");


  if (pressWord === targetWord) {
      const newScore = parseInt(goodScore.innerText) + 1; 
      getRandomWord();
      removeBgColor(pressWord);
      setResult("good-score", newScore) 
      setResult("score", newScore) 
  } else {
    const newScore = parseInt(mistakeResult.innerText) - 1;   
    if(newScore=== 0){
        hideScreen('play')
        showScreen('result')
    }
    else{
        setResult("mistake-result", newScore)
    }
  }
}

document.addEventListener("keyup", getResult);
