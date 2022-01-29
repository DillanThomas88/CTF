const boardContainer = document.querySelector('.board')

const boardEL = document.createElement('div')
const size = 11
const cellSize = 14
const selectableColor = 'bg-slate-500'
const cellColor = 'bg-zinc-400'

class Board {

    init = () => {
        boardEL.classList.add('grid', `grid-cols-11`, `grid-rows-11`, 'scale-110')
        boardContainer.append(boardEL)
        let data = 0
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement('div')
                div.setAttribute('row', i)
                div.setAttribute('col', j)
                div.setAttribute('data',data)
                data++
                div.classList.add('cell', `h-14`, `w-14`, 'col-span-1', 'row-span-1', cellColor, 'border', 'flex','justify-center','items-center')
                boardEL.append(div)
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

    setStorage = () => {
        let boardData = Array.from(document.querySelectorAll('[data]'))
        let bpackage = []

        for (let i = 0; i < boardData.length; i++) {
            const element = boardData[i];
            bpackage.push(element)
        }
        window.localStorage.setItem('board',JSON.stringify(boardData))
    }
}

let board = new Board()

board.init()
board.setStorage()
boardEL.addEventListener('click', (e) => {
    let target = e.target
    highlightMovableCells(target)

})


const highlightMovableCells = (target) => {
    if (!target.classList.contains('cell')) { return }
    else {
        document.querySelectorAll('.' + selectableColor).forEach(element => {
            element.classList.toggle(selectableColor)
            element.classList.toggle(cellColor)
            console.log(element);
        });

        let r = parseInt(target.getAttribute('row'))
        let c = parseInt(target.getAttribute('col'))

        let rowArr = board.get('row', r)
        let colArr = board.get('col', c)

        // row selectables
        for (let i = c + 1; i < rowArr.length; i++) {
            const element = rowArr[i];
            if (!element) { return }
            else {
                element.classList.toggle(cellColor)
                element.classList.toggle(selectableColor);
            }
        }
        for (let i = c - 1; i >= 0; i--) {
            const element = rowArr[i];
            if (!element) { return }
            else {
                element.classList.toggle(cellColor)
                element.classList.toggle(selectableColor);
            }
        }
        // col selectables
        for (let i = r + 1; i < colArr.length; i++) {
            const element = colArr[i];
            if (!element) { return }
            else {
                element.classList.toggle(cellColor)
                element.classList.toggle(selectableColor);
            }
        }
        for (let i = r - 1; i >= 0; i--) {
            const element = colArr[i];
            if (!element) { return }
            else {
                element.classList.toggle(cellColor)
                element.classList.toggle(selectableColor);
            }
        }
    }
}