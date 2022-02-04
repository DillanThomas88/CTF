const size = 11
const cellSize = 14
const selectableColor = 'bg-neutral-300'
const cellColor = 'bg-neutral-400'
const winColor = 'bg-yellow-400'

const wall = 'fill-neutral-800'
const black = 'fill-stone-800'
const white = 'fill-stone-100'
const opacity = 'opacity-20'

const winQuote = 'You Won'
const loseQuote = 'You Lost'

let isWhitesTurn = true
let bBarrier
let wBarrier
let blackStarData
let whiteStarData

let isPlayerOneReady = false
let isPlayerTwoReady = false

const notReadyColor = 'bg-emerald-500'
const readyColor = 'bg-neutral-100'

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
    overlayResults.classList.toggle('hidden')
    overlay[1].classList.toggle('hidden')
    let duration = 200
    let incriment = 0
    let timer = setInterval(() => {
        incriment++
        if(incriment > duration){
            clearInterval(timer)

        }
        overlayResults.style.opacity = incriment/duration
        if(incriment <= duration * .8){

            overlay[1].style.opacity = incriment/duration
        }
    }, 1);
}

const findActiveBtnsAndReset = () => {
    layoutBtns.forEach(element => {
        if(element.classList.contains('active')){ 
            element.classList.toggle('active')
            element.classList.toggle(readyColor)
            element.classList.toggle(notReadyColor)
            element.classList.toggle('text-neutral-800')
        }
    })
}
const toggleLayouts = (e) => {
    findActiveBtnsAndReset()
    let element = e.target
    element.classList.toggle('active')
    element.classList.toggle(notReadyColor)
    element.classList.toggle(readyColor)
    element.classList.toggle('text-neutral-800')
}