const bodyEL = document.querySelector('body')
const boardContainer = document.querySelector('.board')
const playerOneBtn = document.querySelector('.player-one-ready')
const playerTwoBtn = document.querySelector('.player-two-ready')
const menu = document.querySelector('.overlay')
const overlayResults = document.querySelector('.overlay-results')
const playerOneResults = document.querySelector('.player-one-results')
const playerTwoResults = document.querySelector('.player-two-results')
const layoutBtns = document.querySelectorAll('.layout-btn')
const playerOneOpen = document.querySelector('.player-one-open')
const playerTwoOpen = document.querySelector('.player-two-open')
const backgroundEL = document.querySelector('.background-player2')
const gameBoard = document.querySelector('.game-active')
const loaderEL = document.querySelector('.loader')



let w = window.innerHeight
console.log(w);
bodyEL.style.height = `${w}px`
overlayResults.style.height = `${w}px`
menu.style.height = `${w}px`
gameBoard.style.height = `${w}px`
loaderEL.style.height = `${w}px`
backgroundEL.style.height = `${w/2}px`



const size = 11
const cellSize = 14
let playerColor;
const selectableColor = 'bg-stone-300'
const cellColor = 'bg-neutral-100'
// const selectedPieceColor = 'bg-yellow-200'
const winColor = 'bg-neutral-400'
const updateColor = 'orange'

const wall = 'fill-neutral-800'
const black = 'fill-neutral-800'
const white = 'fill-emerald-500'
const opacity = 'opacity-20'

const winQuote = 'You Won'
const loseQuote = 'You Lost'
const flagAway = 'Your flag is taken!'
const flagHome = 'Your flag is home'

let isWhitesTurn = true
let bBarrier
let wBarrier
let blackStarData
let whiteStarData

let isPlayerOneReady = false
let isPlayerTwoReady = false

const notSlected = 'bg-neutral-100'
const selected = 'bg-emerald-500'

// loaderEL.classList.toggle(selected)

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
    // if(index.children[0].classList.contains('white')){
    //     playerOneResults.innerHTML = winQuote
    //     playerTwoResults.innerHTML = loseQuote
    // } else {
    //     playerOneResults.innerHTML = loseQuote
    //     playerTwoResults.innerHTML = winQuote
    // }
}

const fadeInResults = () => {
    // debugger
    playerOneOpen.innerHTML = open
    playerTwoOpen.innerHTML = open
    playerOneOpen.classList.add('open')
    playerTwoOpen.classList.add('open')
    playerOneOpen.addEventListener('click', togglePlayerModals)
    playerTwoOpen.addEventListener('click', togglePlayerModals)
    overlayResults.style.opacity = 0
    // document.querySelector('.replay').innerHTML = replay
    overlayResults.classList.toggle('hidden')
    let duration = 100
    let incriment = 0
    let timer = setInterval(() => {
        incriment++
        if(incriment > duration){
            clearInterval(timer)
            // overlayResults.classList.toggle('pointer-events-none')
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
            element.classList.toggle('text-neutral-100')
            element.classList.toggle('text-neutral-400')
        }
    })
}

const toggleLayouts = (e) => {
    
    findActiveBtnsAndReset()
    let element = e.target
    element.classList.toggle('active')
    element.classList.toggle(notSlected)
    element.classList.toggle(selected)
    element.classList.toggle('text-neutral-400')
    element.classList.toggle('text-neutral-100')
}

const toggleFlagStatus = (x) => {
    let away = document.querySelector(x)
    let whitecolor = 'text-white'
    let whiteborder = 'border-stone-100'
    let blackcolor = 'text-black'
    let blackborder = 'border-black'
    let bgWhite = 'bg-white'
    // flashElement(away,bgWhite,bgWhite)
    if(away.innerHTML === flagAway){

        // if flag has been returned

        if(x === '.white-away'){

            // white
            away.classList.toggle('text-yellow-500')
            away.classList.toggle(whitecolor)
            away.classList.toggle('animate-pulse')
            away.classList.toggle('opacity-50')
            // away.parentElement.classList.toggle('border-yellow-500')
            // away.parentElement.classList.toggle(whiteborder)

        } else {

            // black
            away.classList.toggle('text-yellow-500')
            away.classList.toggle(whitecolor)
            away.classList.toggle('animate-pulse')
            away.classList.toggle('opacity-50')
            // away.parentElement.classList.toggle('border-yellow-500')
            // away.parentElement.classList.toggle(whiteborder)
        }
        away.innerHTML = flagHome
    } else {

        // if flag has been taken        
        if(x === '.white-away'){
            // white
            away.classList.toggle(whitecolor)
            away.classList.toggle('text-yellow-500')
            away.classList.toggle('animate-pulse')
            // away.parentElement.classList.toggle(whiteborder)
            // away.parentElement.classList.toggle('border-yellow-500')
            
        } else {
            // black
            away.classList.toggle(whitecolor)
            away.classList.toggle('text-yellow-500')
            away.classList.toggle('animate-pulse')
            // away.parentElement.classList.toggle(whiteborder)
            // away.parentElement.classList.toggle('border-yellow-500')
        }
        away.innerHTML = flagAway

    }
}