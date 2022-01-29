const boardEL = document.querySelector('.board')

const board = document.createElement('div')
const size = 11
const cellSize = 14

class Game {

    init = () => {
        board.classList.add('grid', `grid-cols-${size}`, `grid-rows-${size}`)
        boardEL.append(board)

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement('div')
                div.setAttribute('row', i)
                div.setAttribute('col', j)
                div.classList.add('cell', `h-${cellSize}`, `w-${cellSize}`, 'col-span-1', 'row-span-1', 'bg-zinc-400', 'border')
                board.append(div)
                div.style.borderColor = '#0f0f0f'
            }
        }

        let r = Array.from(document.querySelectorAll(`[row='0']`))
        let c = Array.from(document.querySelectorAll(`[row='${size - 1}']`))
        r[0].classList.add('rounded-tl-lg')
        r[size - 1].classList.add('rounded-tr-lg')
        c[0].classList.add('rounded-bl-lg')
        c[size - 1].classList.add('rounded-br-lg')
    }

    get = (type, int) => {
        if (type === 'row') { return Array.from(document.querySelectorAll(`[row='${int}']`)) }
        else if (type === 'col') { return Array.from(document.querySelectorAll(`[col='${int}']`)) }
    }
}



let game = new Game()

game.init()
board.addEventListener('click', (e) => {
    let target = e.target
    highlightMovableCells(target)

})



const highlightMovableCells = (target) => {
    if (!target.classList.contains('cell')) { return }
    else {
        document.querySelectorAll('.bg-slate-500').forEach(element => {
            element.classList.toggle('bg-slate-500')
        });

        let r = parseInt(target.getAttribute('row'))
        let c = parseInt(target.getAttribute('col'))

        let rowArr = game.get('row', r)
        let colArr = game.get('col', c)

        // row selectables
        for (let i = c + 1; i < rowArr.length; i++) {
            const element = rowArr[i];
            if (!element) { return }
            else {
                element.classList.toggle('bg-slate-500');
            }
        }
        for (let i = c - 1; i >= 0; i--) {
            const element = rowArr[i];
            if (!element) { return }
            else {
                element.classList.toggle('bg-slate-500');
            }
        }
        // col selectables
        for (let i = r + 1; i < colArr.length; i++) {
            const element = colArr[i];
            if (!element) { return }
            else {
                element.classList.toggle('bg-slate-500');
            }
        }
        for (let i = r - 1; i >= 0; i--) {
            const element = colArr[i];
            if (!element) { return }
            else {
                element.classList.toggle('bg-slate-500');
            }
        }
    }
}