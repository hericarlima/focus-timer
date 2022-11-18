import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    soundForest,
    soundSelectForest,
    soundRain,
    soundSelectRain,
    soundCoffeshop,
    soundSelectCoffeshop,
    soundFire,
    soundSelectFire
} from "./elements.js"

export default function Events ({
    controls,
    timer,
    sound
}) {

    buttonPlay.addEventListener('click', function() {
        controls.play()
        timer.countdown()
    })
    
    buttonPause.addEventListener('click', function() {
        controls.pause()
        timer.hold()
    })
    
    buttonStop.addEventListener('click', function(){
        controls.reset() 
        timer.reset()
    })
    
    buttonSet.addEventListener('click', function(){
        let newMinutes = controls.getMinutes() 
    
        if (!newMinutes) { 
        timer.reset() 
        return
        }
    
        timer.updateDisplay(newMinutes, 0) 
        timer.updateMinutes(newMinutes) 
    })
    
    buttonIncrease.addEventListener('click', function() {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
    })

    buttonDecrease.addEventListener('click', function() {
        let minutes = minutesDisplay.textContent
        
        if(minutes <= 0 || minutes <= 5){
            return
        } 
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    })

    soundForest.addEventListener('click', function(){
        soundForest.classList.add('hide')
        soundSelectForest.classList.remove('hide')
        sound.forest.play()
    })
    
    soundSelectForest.addEventListener('click', function(){
        soundForest.classList.remove('hide')
        soundSelectForest.classList.add('hide')
        sound.forest.pause()
    })
    
    soundRain.addEventListener('click', function(){
        soundRain.classList.add('hide')
        soundSelectRain.classList.remove('hide')
        sound.rain.play()
    })
    
    soundSelectRain.addEventListener('click', function(){
        soundRain.classList.remove('hide')
        soundSelectRain.classList.add('hide')
        sound.rain.pause()
    })
    
    soundCoffeshop.addEventListener('click', function(){
        soundCoffeshop.classList.add('hide')
        soundSelectCoffeshop.classList.remove('hide')
        sound.coffeshop.play()
    })
    
    soundSelectCoffeshop.addEventListener('click', function(){
        soundCoffeshop.classList.remove('hide')
        soundSelectCoffeshop.classList.add('hide')
        sound.coffeshop.pause()
    })
    
    soundFire.addEventListener('click', function(){
        soundFire.classList.add('hide')
        soundSelectFire.classList.remove('hide')
        sound.fire.play()
    })
    
    soundSelectFire.addEventListener('click', function(){
        soundFire.classList.remove('hide')
        soundSelectFire.classList.add('hide')
        sound.fire.pause()
    })
}