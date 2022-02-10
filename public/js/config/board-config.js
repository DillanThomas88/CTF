const boardContainer = document.querySelector('.board')


const boardEL = document.createElement('div')


class Board {

    init = () => {
        boardEL.classList.add('grid', `grid-cols-11`, `grid-rows-11`,)
        boardContainer.append(boardEL)
        let data = 0
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement('div')
                div.setAttribute('row', i)
                div.setAttribute('col', j)
                div.setAttribute('data', data)
                data++
                div.classList.add('cell', `h-14`, `w-14`, 'col-span-1', 'row-span-1', cellColor, 'border', 'flex', 'justify-center', 'items-center')
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
            // console.log(d);
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

    resetColors = () => {
        let arr = document.querySelectorAll('.' + selectableColor)
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            element.classList.toggle(selectableColor)
            element.classList.toggle(cellColor)
        }
    }

    info = (target) => {
        let t
        if (!target.children[0]) { return }
        else { t = target.children[0] }
        let deleted = document.querySelectorAll('.modal')
        if (deleted.length > 0) {
            deleted.forEach(element => {
                element.remove()
            });
            return
        }

        if (t.classList.contains('white-star')) {
            let modal = document.createElement('div')
            modal.classList.add('modal', 'absolute', 'bg-blue-100', 'whitespace-nowrap', 'h-10', 'bottom-44', 'pointer-events-none', 'text-xs', 'flex', 'p-2', 'justify-center', 'items-center', 'shadow-xl', 'shadow-neutral-800', 'text-blue-800', 'border-l-8', 'border-blue-400', 'rounded-sm', 'z-30',)
            modal.textContent = 'This is your Star, keep it safe!'
            target.append(modal)
        }
        if (t.classList.contains('black-star')) {
            let modal = document.createElement('div')
            modal.classList.add('modal', 'absolute', 'bg-blue-100', 'whitespace-nowrap', 'h-10', 'top-4', 'pointer-events-none', 'text-xs', 'flex', 'p-2', 'justify-center', 'items-center', 'shadow-xl', 'shadow-neutral-800', 'text-blue-800', 'border-l-8', 'border-blue-400', 'rounded-sm', 'z-30',)
            modal.textContent = 'Bring the enemy star to home base!'
            target.append(modal)
        }
    }

    checkForFlags = (target, color) => {
        let c = undefined
        if (color == undefined) { return }
        else if (color == 'black') { c = 'white-carrier' }
        else if (color == 'white') { c = 'black-carrier' }
        else { return console.log('error') }

        let arr = this.getNeighbors(target)
        arr.forEach(element => {
            if (!element) { }
            else if (element.children[0]) {

                if (element.children[0].classList.contains(c)) {
                    let flagCarrierNeighbors = this.getNeighbors(element)
                    let total = 0
                    for (let i = 0; i < flagCarrierNeighbors.length; i++) {
                        const e = flagCarrierNeighbors[i];
                        if (e) {
                            if (e.children[0]) {
                                if (e.children[0].classList.contains(color)) {
                                    total++
                                }
                            }

                        }

                    }
                    console.log(`flag carrier has ${total} enemies nearby`);
                    if (total >= 2) {
                        console.log(`${c} has been killed`);
                        if (c == 'black-carrier') {
                            let whitehome = document.querySelector(`[data='${whiteStarData}']`)
                            element.innerHTML = blackMarker
                            whitehome.innerHTML = `${whiteStar}`
                            toggleFlagStatus('.white-away')
                        } else {
                            let blackhome = document.querySelector(`[data='${blackStarData}']`)
                            element.innerHTML = whiteMarker
                            blackhome.innerHTML = `${blackStar}`
                            toggleFlagStatus('.black-away')
                        }
                        element.children[0].classList.toggle('opacity-50')
                    }
                }
            }
        });
        nextTurn()


    }
    getNeighbors = (target) => {
        let rNum = parseInt(target.getAttribute('row'))
        let cNum = parseInt(target.getAttribute('col'))
        let row = this.get('row', rNum)
        let col = this.get('col', cNum)
        let arr = [row[cNum - 1], row[cNum + 1], col[rNum - 1], col[rNum + 1]]
        return arr
    }

    checkSuffocation = () => {
        // unfinished 
        let wCarrier = document.querySelector('.white-carrier')
        let bCarrier = document.querySelector('.black-carrier')

        if(wCarrier){
            let count = 0
            let neighbors = this.getNeighbors(wCarrier.parentElement)
            neighbors.forEach(element => {
                if(!element || element.classList.contains('wall')){count++}
                else if(element.children[0]){
                    if(element.children[0].classList.contains('piece')){count++}
                }

                if(count === 4){
                    let home = document.querySelector(`[data='${blackStarData}']`)
                    wCarrier.innerHTML = whiteMarker
                    wCarrier.children[0].classList.toggle('white-carrier')
                    wCarrier.children[0].classList.toggle('white-marker')
                    home.innerHTML = `${blackStar}`
                    toggleFlagStatus('.black-away')
                }
            });
        }
        if(bCarrier){
            let count = 0
            let neighbors = this.getNeighbors(bCarrier.parentElement)
            neighbors.forEach(element => {
                if(!element || element.classList.contains('wall')){count++}
                else if(element.children[0]){
                    if(element.children[0].classList.contains('piece')){count++}
                }

                console.log(count, 'black-carrier');
            });
        }
    }

}



