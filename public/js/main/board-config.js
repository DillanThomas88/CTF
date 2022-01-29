const boardContainer = document.querySelector('.board')

const boardEL = document.createElement('div')
const size = 11
const cellSize = 14
const selectableColor = 'bg-neutral-300'
const cellColor = 'bg-neutral-400'

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
        });

        let r = parseInt(target.getAttribute('row'))
        let c = parseInt(target.getAttribute('col'))

        let rowArr = board.get('row', r)
        let colArr = board.get('col', c)

        // row selectables
        const getSelectables = (arr, key) => {
            if
            (key === 'up'){
                for (let i = r + 1; i < arr.length; i++) {
                    const element = arr[i];
                    if (!element) { return }
                    else {
                        if(element.children[0]){return}
                        else {
                            element.classList.toggle(cellColor)
                            element.classList.toggle(selectableColor);
                        }
                    }
                }
            }
            else if
            (key === 'down'){
                for (let i = r - 1; i >= 0; i--) {
                    const element = arr[i];
                    if (!element) { return }
                    else {
                        if(element.children[0]){return}
                        else {
                            element.classList.toggle(cellColor)
                            element.classList.toggle(selectableColor);
                        }
                    }
                }
            }
            else if 
            (key === 'right'){
                for (let i = c + 1; i < arr.length; i++) {
                    const element = arr[i];
                    if (!element) { return }
                    else {
                        if(element.children[0]){return}
                        else {
                            element.classList.toggle(cellColor)
                            element.classList.toggle(selectableColor);
                        }
                    }
                }
            }
            else if
            (key === 'left'){
                for (let i = c - 1; i >= 0; i--) {
                    const element = arr[i];
                    if (!element) { return }
                    else {
                        if(element.children[0]){return}
                        else {
                            element.classList.toggle(cellColor)
                            element.classList.toggle(selectableColor);
                        }
                    }
                }
            }

        }
        
        getSelectables(rowArr, 'right')
        getSelectables(rowArr, 'left')
        getSelectables(colArr, 'up')
        getSelectables(colArr, 'down')

    }
}