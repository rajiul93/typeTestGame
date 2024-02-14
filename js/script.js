function playNow(){
    hideScreen('home')
    showScreen('play')
    getRandomWord()
    setResult("mistake-result",5)
    setResult("good-score",0)
}


function gameOver(){
    hideScreen('home')
    showScreen('play')
    hideScreen("result")
    setResult("mistake-result",5)
    setResult("good-score",0)
}