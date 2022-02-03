const size = 11
const cellSize = 14
const selectableColor = 'bg-neutral-300'
const cellColor = 'bg-neutral-400'
const winColor = 'bg-yellow-400'

const black = 'fill-stone-700'
const white = 'fill-emerald-200'
const opacity = 'opacity-10'

let isWhitesTurn = true
let bBarrier
let wBarrier
let blackStarData
let whiteStarData

let isPlayerOneReady = false
let isPlayerTwoReady = false



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

        document.querySelector('.black-barrier').classList.toggle('hidden')
    }

    if(document.querySelector('.white-barrier')){

        document.querySelector('.white-barrier').classList.toggle('hidden')
    }



}