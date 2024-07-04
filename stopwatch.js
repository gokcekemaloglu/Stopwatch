let isRunning = false
let centiSeconds = 0 // salise-split seconds
let timer;

const stopwatch = document.getElementById("stopwatch")
const startStopButton = document.getElementById("start-stop")
const resetButton = document.getElementById("reset")

//? Event Listeners

startStopButton.addEventListener("click", startStop)
resetButton.addEventListener("click", reset)
resetButton.textContent = "⏹️"

//* Function


function updateDisplay() {
    const minutes = Math.floor(centiSeconds/6000)
    const seconds = Math.floor((centiSeconds%6000)/100)
    const centi = centiSeconds % 100
    stopwatch.textContent = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${centi.toString().padStart(2,"0")}`
}

function startStop() {
    if (isRunning) {
        clearInterval(timer)
        startStopButton.textContent = "⏸️"
    } else {
        timer = setInterval(()=>{
            centiSeconds++
            updateDisplay()
        }, 10)
        startStopButton.textContent = "▶️"
    }
    isRunning = !isRunning
}

function reset() {
    clearInterval(timer)
    centiSeconds = 0
    isRunning = false
    resetButton.textContent = "⏹️"
    updateDisplay()
}

updateDisplay()

