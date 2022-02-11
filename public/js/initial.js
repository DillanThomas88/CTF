
let layout = 1

playerOneBtn.addEventListener('click', toggleReady)
playerTwoBtn.addEventListener('click', toggleReady)
layoutBtns.forEach(element => {
    element.addEventListener('click',function(e){
        
        layout = parseInt(e.target.getAttribute('layout'))
         toggleLayouts(e)
    })
});

const p2Loader = document.querySelector('.loader-p2')
const p1Loader = document.querySelector('.loader-p1')
p2Loader.innerHTML = icon
p1Loader.innerHTML = icon
p1Loader.classList.toggle('rotate-180')

let count = 0



let board = new Board
let piece = new Piece

board.init()

const spawnLayout = (layout) => {
    piece.init(layout)
}





