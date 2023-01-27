export default function Sounds () {

    const forest = new Audio("../sounds/forest.wav")
    const rain = new Audio("../sounds/rain.wav")
    const coffeshop = new Audio("../sounds/coffeshop.wav")
    const fire = new Audio("../sounds/fire.wav")

    forest.loop = true
    rain.loop = true
    coffeshop.loop = true
    fire.loop = true

    return {
        forest,
        rain,
        coffeshop,
        fire
    }
}

