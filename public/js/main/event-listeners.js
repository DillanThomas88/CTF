boardEL.addEventListener('click', (e) => {
    let target = e.target
    highlightMovableCells(target)
    if(document.querySelector('.selected')){
        ifSelctedMoveTo(target)
    }


})

const ifSelctedMoveTo = (target) => {
    if(!target.classList.contains(selectableColor)){return}
    else{        
        const getDirection = (target) => {
        
                    if(target.classList.contains('top')){return 'bottom'}
                    if(target.classList.contains('bottom')){return 'top'}
                    if(target.classList.contains('left')){return 'right'}
                    if(target.classList.contains('right')){return 'left'}
        }
        const getRowOrCol = (direction) => {
            if(direction === 'top' || direction === 'bottom'){return 'col'}
            else if (direction === 'left' || direction === 'right') {return 'row'}
        }
        let from = document.querySelector('.selected')
        let direction = getDirection(target)
        let rowCol = board.get(getRowOrCol(direction),from.getAttribute(getRowOrCol(direction)))
        let spaces;
        let fromINT;
        let p;
        if(from.children[0].classList.contains('black-marker')){p = blackMarker}
        if(from.children[0].classList.contains('white-marker')){p = whiteMarker}
        
        if(getRowOrCol(direction) === 'col'){
            fromINT = from.getAttribute('row')
            toINT = target.getAttribute('row')
            if(fromINT === undefined){fromINT = 0}
            if(toINT === undefined){toINT = 0}
            spaces = Math.abs(fromINT - toINT) 
        } else if (getRowOrCol(direction) === 'row'){            
            fromINT = from.getAttribute('col')
            toINT = target.getAttribute('col')
            spaces = Math.abs(fromINT - toINT) 
        } else {console.log('error');}


        console.log(direction);
        

        let arr = document.querySelectorAll('.' + selectableColor)
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.classList.toggle(selectableColor)
            element.classList.toggle(cellColor)
        }
        let space = 350
        let distance = space * spaces
        let margin = 0
        bodyEL.classList.toggle('pointer-events-none')
        let timer = setInterval(() => {
            margin+=5
            if(from.children[0]){

                from.children[0].style[direction] = `${margin/100}rem`
            }
            if(margin >= distance){
                clearInterval(timer)
                margin = distance; 
                from.children[0].style[direction] = `${margin/100}rem`
                rowCol[fromINT].innerHTML = ''
                rowCol[toINT].innerHTML = p
                bodyEL.classList.toggle('pointer-events-none')
                from.classList.toggle('selected')
                board.resetSelectables()
                return
            }
        }, 1);
    }
}

const highlightMovableCells = (target) => {
    if (!target.classList.contains('cell')) { return }
    else {
        if (!target.children[0]) { return }
        else if
        (target.children[0].classList.contains('white-marker') || target.children[0].classList.contains('black-marker')) {
            if(document.querySelector('.selected')){
                document.querySelector('.selected').classList.toggle('selected') 
            }


            document.querySelectorAll('.' + selectableColor).forEach(element => {
                element.classList.toggle(selectableColor)
                element.classList.toggle(cellColor)
            });

            target.classList.toggle('selected')

            let r = parseInt(target.getAttribute('row'))
            let c = parseInt(target.getAttribute('col'))

            let rowArr = board.get('row', r)
            let colArr = board.get('col', c)

            // row selectables
            const getSelectables = (arr, key) => {
                if
                    (key === 'bottom') {
                    for (let i = r + 1; i < arr.length; i++) {
                        const element = arr[i];
                        if (!element) { return }
                        else if (element.classList.contains('wall')) { return }
                        else {
                            if (element.children[0]) { return }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.toggle('bottom');
                            }
                        }
                    }
                }
                else if
                    (key === 'top') {
                    for (let i = r - 1; i >= 0; i--) {
                        const element = arr[i];
                        if (!element) { return }
                        else if (element.classList.contains('wall')) { return }
                        else {
                            if (element.children[0]) { return }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.toggle('top');
                            }
                        }
                    }
                }
                else if
                    (key === 'right') {
                    for (let i = c + 1; i < arr.length; i++) {
                        const element = arr[i];
                        if (!element) { return }
                        else if (element.classList.contains('wall')) { return }
                        else {
                            if (element.children[0]) { return }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.toggle('right');
                            }
                        }
                    }
                }
                else if
                    (key === 'left') {
                    for (let i = c - 1; i >= 0; i--) {
                        const element = arr[i];
                        if (!element) { return }
                        else if (element.classList.contains('wall')) { return }
                        else {
                            if (element.children[0]) { return }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.toggle('left');
                            }
                        }
                    }
                }

            }

            getSelectables(rowArr, 'right')
            getSelectables(rowArr, 'left')
            getSelectables(colArr, 'top')
            getSelectables(colArr, 'bottom')
        }
    }


}