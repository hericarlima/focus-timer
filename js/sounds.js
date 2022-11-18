export default function Sounds () {

    //trocar pelos sons originais
    const forest = new Audio("../sounds/forest.wav")
    const rain = new Audio("../sounds/rain.wav")
    const coffeshop = new Audio("../sounds/coffeshop.wav")
    const fire = new Audio("../sounds/fire.wav")

    return {
        forest,
        rain,
        coffeshop,
        fire
    }
}

