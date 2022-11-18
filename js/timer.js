export default function Timer({ 
    minutesDisplay, 
    secondsDisplay, 
    resetControls
  }) {
  
    let timerTimeOut 
    let minutes = Number(minutesDisplay.textContent) 
  
    //atualiza display
    function updateDisplay(newMinutes, seconds) {
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined ? 0 : seconds

      minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
  
    //reseta o display (atualiza + para contador)
    function reset() {
      updateDisplay(minutes, 0)
      clearTimeout(timerTimeOut)
    }
  
    //contador
    function countdown(){
      timerTimeOut = setTimeout(function() {
        let seconds =  Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        let isFinished = minutes <= 0 && seconds <= 0
  
        updateDisplay(minutes, 0)
  
        if ( isFinished ) {
          resetControls()
          updateDisplay()
          return
        }
  
        if( seconds <= 0 ) {
          seconds = 60
          --minutes
        }
  
        updateDisplay(minutes, String(seconds - 1))
  
        countdown()
      }, 1000)
    }
  
    //atualiza os minutos
    function updateMinutes(newMinutes) {
      minutes = newMinutes
    }
  
    //parar o setTimeout
    function hold() {
      clearTimeout(timerTimeOut)
    }
  
    return {
      countdown,
      reset,
      updateDisplay,
      updateMinutes,
      hold
    }
  }