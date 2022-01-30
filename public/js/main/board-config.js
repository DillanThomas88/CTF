const boardContainer = document.querySelector('.board')
const bodyEL = document.querySelector('body')

const boardEL = document.createElement('div')
const size = 11
const cellSize = 14
const selectableColor = 'bg-neutral-300'
const cellColor = 'bg-neutral-400'

class Board {

    init = () => {
        boardEL.classList.add('grid', `grid-cols-11`, `grid-rows-11`, 'scale-110','pb-16')
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

    resetSelectables = () => {
        const reset = (direction) => {
            let d = Array.from(document.querySelectorAll('.' + direction))
            console.log(d);
            for (let i = 0; i < d.length; i++) {
                const element = d[i];
                element.classList.toggle(direction)
            }

        }
        reset('top')
        reset('bottom')
        reset('left')
        reset('right')
    }

}

let board = new Board()

board.init()
