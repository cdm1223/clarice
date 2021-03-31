let interval
function Start() {
    console.log("clicou!")
    let startButton = document.getElementById('start')
    startButton.classList.toggle('hide')
    let stopButton = document.getElementById('stop')
    stopButton.classList.toggle('hide')
    let timeInterval = document.getElementById('time-interval').value
    if(timeInterval === '' || timeInterval <=20) timeInterval=1000

    interval = setInterval(() => {
        let squares = document.querySelectorAll("[data-square]")

        let squareActive = document.getElementsByClassName("active")
        squareActive = Array.from(squareActive)[0]
        console.log('interval')

        if (squareActive) {
            squareActive.classList.toggle("active")
        }
        squares = Array.from(squares)
        let randomIndex = Math.floor(Math.random() * squares.length)
        let randomSquare = squares[randomIndex]
        randomSquare.classList.toggle("active")
    }, timeInterval)
}
function Stop() {
    let squareActive = document.getElementsByClassName("active")
    squareActive = Array.from(squareActive)[0]
    if (squareActive) {
        squareActive.classList.toggle("active")
    }
    clearInterval(interval)
    let startButton = document.getElementById('start')
    startButton.classList.toggle('hide')
    let stopButton = document.getElementById('stop')
    stopButton.classList.toggle('hide')
}
let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")

startButton.addEventListener("click", Start)
stopButton.addEventListener("click", Stop)
