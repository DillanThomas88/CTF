
let layout = 1

playerOneBtn.addEventListener('click', toggleReady)
playerTwoBtn.addEventListener('click', toggleReady)
layoutBtns.forEach(element => {
    element.addEventListener('click',function(e){
        layout = parseInt(e.target.getAttribute('layout'))
         
    })
});


let board = new Board
let piece = new Piece

board.init()

const spawnLayout = (layout) => {
    piece.init(layout)
}




