import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay,
    buttonIncrease,
    buttonDecrease,
    soundForest,
    soundSelectForest,
    soundRain,
    soundSelectRain,
    soundCoffeshop,
    soundSelectCoffeshop,
    soundFire,
    soundSelectFire
} from "./elements.js"


//injeção de dependências
const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})

const timer = Timer({ 
    minutesDisplay, 
    secondsDisplay, 
    resetControls: controls.reset()
})

const sound = Sounds()

Events ({
    controls, 
    timer,
    sound
})
