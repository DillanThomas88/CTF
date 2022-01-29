const boardEL = document.querySelector('.board')

const board = document.createElement('div')
const rows = 9
const cols = 9
let gap = 1


class Game {

    init = () => {
        board.classList.add('grid', `grid-cols-9`, `grid-rows-9`)
    
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const div = document.createElement('div')
                div.setAttribute('row', i)
                div.setAttribute('col', j)
                div.classList.add('cell', 'h-20', 'w-20', 'col-span-1', 'row-span-1','bg-zinc-400', 'border')
                board.append(div)
                div.style.borderColor = '#0f0f0f'
            }
        }

        boardEL.append(board)
        let r = Array.from(document.querySelectorAll(`[row='0']`))
        let c = Array.from(document.querySelectorAll(`[row='${rows - 1}']`))
        r[0].classList.add('rounded-tl-lg')
        r[rows - 1].classList.add('rounded-tr-lg')
        c[0].classList.add('rounded-bl-lg')
        c[rows - 1].classList.add('rounded-br-lg')
    }

    get = (type, int) => {
        if(type === 'row'){return Array.from(document.querySelectorAll(`[row='${int}']`))}
        else if(type === 'col'){return Array.from(document.querySelectorAll(`[col='${int}']`))}        
    }
}



let game = new Game()

game.init()
board.addEventListener('click', (e) => {
    let target = e.target
    // console.log(target);
    if(!target.classList.contains('cell')){ return }
    else {
        document.querySelectorAll('.bg-transparent').forEach(element => {
            element.classList.toggle('bg-transparent')
            target.classList.toggle('bg-zinc-400')
        });
        target.classList.toggle('bg-zinc-400')
        target.classList.toggle('bg-bg-transparent')
        // let r = parseInt(target.getAttribute('row'))
        // let c = parseInt(target.getAttribute('col'))

        // let rowArr = game.get('row', r)
        // let colArr = game.get('col', c)

        // if(rowArr[c-1]){rowArr[c-1].classList.toggle('opacity-90'); }
        // if(rowArr[c+1]){rowArr[c+1].classList.toggle('opacity-90'); }
        // if(colArr[r-1]){colArr[r-1].classList.toggle('opacity-90'); }  
        // if(colArr[r+1]){colArr[r+1].classList.toggle('opacity-90'); }
    }
})



