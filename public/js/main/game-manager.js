const size = 11
const cellSize = 14
const selectableColor = 'bg-neutral-300'
const cellColor = 'bg-neutral-400'
const winColor = 'bg-yellow-400'

const wall = 'fill-neutral-800'
const black = 'fill-neutral-800'
const white = 'fill-white'
const opacity = 'opacity-20'

const winQuote = 'You Won'
const loseQuote = 'You Lost'
const flagAway = 'Your flag is away!'

let isWhitesTurn = true
let bBarrier
let wBarrier
let blackStarData
let whiteStarData

let isPlayerOneReady = false
let isPlayerTwoReady = false

const notSlected = 'bg-neutral-800'
const selected = 'bg-neutral-100'

const nextTurn = () => {
    isWhitesTurn = !isWhitesTurn
    piece.setScoreZone()

    document.querySelectorAll('.white-marker').forEach(element => {
        element.classList.toggle('opacity-50')
    });
    document.querySelectorAll('.black-marker').forEach(element => {
        element.classList.toggle('opacity-50')
    });

    if(document.querySelector('.black-barrier')){

        // document.querySelector('.black-barrier').classList.toggle('hidden')
    }

    if(document.querySelector('.white-barrier')){

        // document.querySelector('.white-barrier').classList.toggle('hidden')
    }



}

const whoWon = (index) => {
    if(index.children[0].classList.contains('white')){
        playerOneResults.innerHTML = winQuote
        playerTwoResults.innerHTML = loseQuote
    } else {
        playerOneResults.innerHTML = loseQuote
        playerTwoResults.innerHTML = winQuote
    }
}

const fadeInResults = () => {
    // debugger
    overlayResults.style.opacity = 0
    document.querySelector('.replay').innerHTML = replay
    overlayResults.classList.toggle('hidden')
    let duration = 500
    let incriment = 0
    let timer = setInterval(() => {
        incriment++
        if(incriment > duration){
            clearInterval(timer)
            overlayResults.classList.toggle('pointer-events-none')
        }
        overlayResults.style.opacity = incriment/duration
    }, 1);
}

const findActiveBtnsAndReset = () => {
    layoutBtns.forEach(element => {
        if(element.classList.contains('active')){ 
            element.classList.toggle('active')
            element.classList.toggle(selected)
            element.classList.toggle(notSlected)
            element.classList.toggle('text-neutral-800')
        }
    })
}

const toggleLayouts = (e) => {
    findActiveBtnsAndReset()
    let element = e.target
    element.classList.toggle('active')
    element.classList.toggle(notSlected)
    element.classList.toggle(selected)
    element.classList.toggle('text-neutral-800')
}

const toggleFlagStatus = (x) => {
    let away = document.querySelector(x)
    away.innerHTML = flagAway
    away.classList.toggle('text-blue-100')
    away.classList.toggle('text-amber-100')
    away.classList.toggle('animate-pulse')
    away.parentElement.classList.toggle('border-blue-500')
    away.parentElement.classList.toggle('border-amber-500')
}