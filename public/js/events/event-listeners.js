

bodyEL.addEventListener('click', fadeoutTitleScreen)


function fadeoutTitleScreen() {
    bodyEL.removeEventListener('click', fadeoutTitleScreen)
    let element = document.querySelector('.title-screen')
    element.classList.toggle('animate-pulse')
    let em = 100
    let fadeDur = 100
    let timer = setInterval(() => {
        fadeDur--
        if (fadeDur < 0) {
            clearInterval(timer)
            element.classList.add('hidden')
            showMenu()
        }
        
        element.style.opacity = fadeDur / 100
    }, 1)
    let t = setInterval(() => {
        em--
        if(em <= 0){
            backgroundEL.style.transform = 'translateY(0em)'
            clearInterval(t)
        }
        backgroundEL.style.transform = `translateY(${(em /10) * -2.5}em)`
    }, 1);
}


// overlayResults.addEventListener('click', function () {
//     location.reload()
// })
let opac = .8

boardEL.addEventListener('click', (e) => {
    let target = e.target
    // board.checkSuffocation()
    // board.info(target)
    if (target.classList.contains('selected')) {

        board.resetSelectables()
        target.classList.toggle('selected')
        board.resetColors()
        return
    }
    highlightMovableCells(target)
    if (document.querySelector('.selected')) {
        ifSelctedMoveTo(target)
    }


})

const showMenu = () => {
    let element = document.querySelector('.overlay')
    element.style.opacity = 0
    element.classList.toggle('hidden')
    let fadeDur = 0
    let timer = setInterval(() => {
        fadeDur++
        if (fadeDur > 100) {
            clearInterval(timer)
        }
        element.style.opacity = `${fadeDur / 100}`
    }, 1);
}

const toggleReady = (e) => {
    let element = e.target
    if (element.classList.contains('player-one-ready')) {
        isPlayerOneReady = !isPlayerOneReady
        if (isPlayerOneReady) {
            playerOneBtn.textContent = 'Ready!'
            playerOneBtn.classList.toggle('bg-neutral-100')
            playerOneBtn.classList.toggle('bg-neutral-900')
            playerOneBtn.classList.toggle('text-neutral-900')
        } else {
            playerOneBtn.textContent = 'Ready?'
            playerOneBtn.classList.toggle('bg-neutral-900')
            playerOneBtn.classList.toggle('bg-neutral-100')
            playerOneBtn.classList.toggle('text-neutral-900')
        }
    } else if (element.classList.contains('player-two-ready')) {
        isPlayerTwoReady = !isPlayerTwoReady
        if (isPlayerTwoReady) {
            playerTwoBtn.textContent = 'Ready!'
            playerTwoBtn.classList.toggle('bg-neutral-100')
            playerTwoBtn.classList.toggle('bg-neutral-900')
            playerTwoBtn.classList.toggle('text-neutral-900')
        } else {
            playerTwoBtn.textContent = 'Ready?'
            playerTwoBtn.classList.toggle('bg-neutral-900')
            playerTwoBtn.classList.toggle('bg-neutral-100')
            playerTwoBtn.classList.toggle('text-neutral-900')
        }
    } else {
        console.log('btn error');
    }



    if (isPlayerOneReady && isPlayerTwoReady) {

        // instantiate board layout
        spawnLayout(layout)

        playerOneBtn.removeEventListener('click', toggleReady)
        // playerOneBtn.classList.toggle('opacity-10')

        playerTwoBtn.removeEventListener('click', toggleReady)
        // playerTwoBtn.classList.toggle('opacity-10')

        let t = setInterval(() => {
            clearInterval(t)
            menu.classList.toggle('pointer-events-none')
            let fadeDur = opac * 100
            let timer = setInterval(() => {
                fadeDur--
                if (fadeDur < 0) {
                    clearInterval(timer)
                    menu.classList.toggle('hidden')
                    showLoader()
                }
                menu.style.opacity = `${fadeDur / 100}`
            }, 1);
        }, 500);

    }


}

const showLoader = () => {
    let element = document.querySelector('.loader')
    element.style.opacity = 0
    element.classList.toggle('hidden')
    let fadeDur = 0
    let timer = setInterval(() => {
        fadeDur++
        if (fadeDur > 100) {
            clearInterval(timer)
            startLoading()
        }
        element.style.opacity = `${fadeDur / 100}`
    }, 1);

}

const startLoading = () => {
    let element = document.querySelector('.loader-bar')
    let length = Math.floor(window.innerWidth)
    let fadeDur = 0
    let timer = setInterval(() => {
        fadeDur += 5
        if (fadeDur > length) {
            clearInterval(timer)
            fadeOutLoader()
        }
        element.style.width = `${fadeDur}px`
    }, 1);

}

const fadeOutLoader = () => {
    let element = document.querySelector('.loader')
    let fadeDur = 100
    let timer = setInterval(() => {
        fadeDur--
        if (fadeDur < 0) {
            clearInterval(timer)
            element.classList.toggle('hidden')
            startGame()
        }
        element.style.opacity = `${fadeDur / 100}`
    }, 1);
}

const flashElement = (el, color1, color2) => {
    let opacity = 500
    el.classList.toggle(color1)
    el.classList.toggle(color2)
    el.style.opacity = opacity/1000
    let t = setInterval(() => {
        opacity--
        if(opacity <= 0){
            clearInterval(t)
        }
        el.style.opacity = opacity/1000
    }, 1);

}

const startGame = () => {
    let element = document.querySelector('.game-active')
    element.style.opacity = 0
    element.classList.toggle('hidden')
    let fadeDur = 0
    let timer = setInterval(() => {
        fadeDur++
        if (fadeDur > 100) {
            clearInterval(timer)
            element.classList.toggle('pointer-events-none')
            element.style.opacity = 1
            let t = setInterval(() => {
                flashElement(document.querySelector('.white-flash'),'bg-purple-500','bg-white')
                flashElement(document.querySelector('.black-flash'),'bg-white','bg-black')
                clearInterval(t)
            }, 1000);
        }
        element.style.opacity = `${fadeDur / 100}`
    }, 1);
}

const fadeOutBoard = () => {
    let el = document.querySelector('.game-active')
    let fadeDur = 500
    let incriment = fadeDur
    let time = setInterval(() => {
        incriment--
        if (incriment < 450) {
            clearInterval(time)
        }
        el.style.opacity = `${incriment / fadeDur}`
    }, 1);
}

const togglePlayerModals = (e) => {
    const el = e.target
    // console.log(el);
    let parent = el.parentElement.parentElement.parentElement
    if(el.classList.contains('open')){
        let em = 200
        let t = setInterval(() => {
            em -= 3
            if(em <= 8){ 
                clearInterval(t)
                if(parent.classList.contains('player-two-modal')){
                    parent.style.transform = `translateY(-.8em) scale(-1)`

                } else {
                    parent.style.transform = `translateY(1em)`
                }
                return
            }
            if(parent.classList.contains('player-two-modal')){
                parent.style.transform = `translateY(${(em/10)* -1}em) scale(-1)`
            } else {
                parent.style.transform = `translateY(${em/10}em)`
            }
        }, 1);
        el.innerHTML = collapse
        el.classList.toggle('open')
    } else {
        let em = 10
        let t = setInterval(() => {
            em += 5
            if(em >= 200){ 
                clearInterval(t)
                if(parent.classList.contains('player-two-modal')){
                    parent.style.transform = `translateY(-20em) scale(-1)`

                } else {
                    parent.style.transform = `translateY(20em)`
                }
                return
            }
            if(parent.classList.contains('player-two-modal')){
                parent.style.transform = `translateY(${(em/10)* -1}em)`
            } else {
                parent.style.transform = `translateY(${em/10}em)`
            }
        }, 1);
        el.innerHTML = open
        el.classList.toggle('open')
    }

}


const ifSelctedMoveTo = (target) => {
    if (target.classList.contains(cellColor)) { return }
    else {
        const getDirection = (target) => {

            if (target.classList.contains('top')) { return 'bottom' }
            if (target.classList.contains('bottom')) { return 'top' }
            if (target.classList.contains('left')) { return 'right' }
            if (target.classList.contains('right')) { return 'left' }
        }
        const getRowOrCol = (direction) => {
            if (direction === 'top' || direction === 'bottom') { return 'col' }
            else if (direction === 'left' || direction === 'right') { return 'row' }
        }
        let from = document.querySelector('.selected')
        let direction = getDirection(target)
        let rowCol = board.get(getRowOrCol(direction), from.getAttribute(getRowOrCol(direction)))
        let spaces;
        let fromINT;
        let toINT
        let p;
        let color = undefined
        if (from.children[0].classList.contains('black-marker')) { p = blackMarker; color = 'black' }
        if (from.children[0].classList.contains('white-marker')) { p = whiteMarker; color = 'white' }
        if (from.children[0].classList.contains('black-carrier')) { p = blackCarrier; color = 'black' }
        if (from.children[0].classList.contains('white-carrier')) { p = whiteCarrier; color = 'white' }

        if (getRowOrCol(direction) === 'col') {
            fromINT = from.getAttribute('row')
            toINT = target.getAttribute('row')
            if (fromINT === undefined) { fromINT = 0 }
            if (toINT === undefined) { toINT = 0 }
            spaces = Math.abs(fromINT - toINT)
        } else if (getRowOrCol(direction) === 'row') {
            fromINT = from.getAttribute('col')
            toINT = target.getAttribute('col')
            spaces = Math.abs(fromINT - toINT)
        } else {
            // target.classList.toggle('selected')
            // board.resetColors()
            return
        }


        board.resetColors()




        let space = 35
        let distance = space * spaces
        let margin = 0
        bodyEL.classList.toggle('pointer-events-none')
        let timer = setInterval(() => {
            margin += 1
            if (from.children[0]) {

                from.children[0].style[direction] = `${margin / 10}rem`
            }
            if (margin >= distance) {

                clearInterval(timer)
                margin = distance;
                from.children[0].style[direction] = `${margin / 10}rem`
                if (rowCol[fromINT].getAttribute('data') == blackStarData) {
                    rowCol[fromINT].innerHTML = barrier

                    rowCol[fromINT].children[0].classList.toggle('black-barrier')
                } else if (rowCol[fromINT].getAttribute('data') == whiteStarData) {
                    rowCol[fromINT].innerHTML = barrier

                    rowCol[fromINT].children[0].classList.toggle('white-barrier')
                } else {

                    rowCol[fromINT].innerHTML = null
                }
                if (rowCol[toINT].children[0]) {
                    if (rowCol[toINT].children[0].classList.contains('white-star')) {
                        rowCol[toINT].innerHTML = `${blackCarrier}\n${barrier}`
                        rowCol[toINT].children[1].classList.toggle('white-barrier')
                        flashElement(document.querySelector('.white-flash'),'bg-white','bg-purple-500')

                    } else if (rowCol[toINT].children[0].classList.contains('black-star')) {
                        rowCol[toINT].innerHTML = `${whiteCarrier}\n${barrier}`
                        rowCol[toINT].children[1].classList.toggle('black-barrier')
                        toggleFlagStatus('.black-away')
                    } else if (rowCol[toINT].classList.contains('white-score')) {
                        rowCol[toINT].innerHTML = `${blackCarrier}\n${barrier}`
                    } else if (rowCol[toINT].classList.contains('black-score')) {
                        rowCol[toINT].innerHTML = `${whiteCarrier}\n${barrier}`
                    } else { console.log('error'); }
                } else {
                    rowCol[toINT].innerHTML = p
                }
                bodyEL.classList.toggle('pointer-events-none')
                from.classList.toggle('selected')
                board.resetSelectables()
                if (target.classList.contains(winColor)) {
                    whoWon(rowCol[toINT])
                    fadeOutBoard()
                    fadeInResults()

                    // let ti = setInterval(() => {
                    //     clearInterval(ti)

                    // }, 100);

                    return
                }
                board.checkForFlags(target, color)
                return
            }
        }, 5);
    }
}

const highlightMovableCells = (target) => {
    let piece
    if (isWhitesTurn) { piece = ['white-marker', 'white-carrier'] }
    else { piece = ['black-marker', 'black-carrier'] }
    if (!target.classList.contains('cell')) { return }
    else {
        if (!target.children[0]) { return }
        else if
            (target.children[0].classList.contains(piece[0]) || target.children[0].classList.contains(piece[1])) {
            if (document.querySelector('.selected')) {
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
            const getSelectables = (arr, key, target) => {
                // console.log(key);
                if
                    (key === 'bottom') {
                    for (let i = r + 1; i < arr.length; i++) {
                        const element = arr[i];
                        if (!element) { return }
                        else if (element.classList.contains('wall')) { return }
                        else if (element.classList.contains('zone') && !element.children[0]) {
                            if (target.children[0].classList.contains('white-carrier') || target.children[0].classList.contains('black-carrier')) {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(winColor);
                                element.classList.add(key);
                            }
                            return
                        }
                        else {

                            if (element.children[0]) {
                                if (element.children[0].classList.contains('piece')) {
                                    return
                                }
                                else if (element.children[0].classList.contains('black-star') || element.children[0].classList.contains('white-star')) {
                                    if (isTheSame(element, target)) { return }
                                }
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
                            }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
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
                        else if (element.classList.contains('zone')  && !element.children[0]) {
                            if (target.children[0].classList.contains('white-carrier') || target.children[0].classList.contains('black-carrier')) {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(winColor);
                                element.classList.add(key);
                            }
                            return
                        }
                        else {
                            if (element.children[0]) {
                                if (element.children[0].classList.contains('piece')) {
                                    return
                                }
                                else if (element.children[0].classList.contains('black-star') || element.children[0].classList.contains('white-star')) {
                                    if (isTheSame(element, target)) { return }
                                }
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
                            }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
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
                        else if (element.classList.contains('zone') && !element.children[0]) {
                            // console.log(target);
                            if (target.children[0].classList.contains('white-carrier') || target.children[0].classList.contains('black-carrier')) {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(winColor);
                                element.classList.add(key);
                            }
                            return
                        }
                        else {
                            if (element.children[0]) {
                                if (element.children[0].classList.contains('piece')) {
                                    return
                                }
                                else if (element.children[0].classList.contains('black-star') || element.children[0].classList.contains('white-star')) {
                                    if (isTheSame(element, target)) { return }
                                }
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
                            }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
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
                        else if (element.classList.contains('zone') && !element.children[0]) {
                            if (target.children[0].classList.contains('white-carrier') || target.children[0].classList.contains('black-carrier')) {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(winColor);
                                element.classList.add(key);
                            }
                            return
                        }
                        else {
                            if (element.children[0]) {
                                if (element.children[0].classList.contains('piece')) {
                                    return
                                }
                                else if (element.children[0].classList.contains('black-star') || element.children[0].classList.contains('white-star')) {
                                    if (isTheSame(element, target)) { return }
                                }
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
                            }
                            else {
                                element.classList.toggle(cellColor)
                                element.classList.toggle(selectableColor);
                                element.classList.add(key);
                            }
                        }
                    }
                }


                function isTheSame(element, target) {
                    let pieceColor
                    let targetColor
                    if (target.children[0].classList.contains('black')) { pieceColor = 'black' }
                    if (target.children[0].classList.contains('white')) { pieceColor = 'white' }
                    if (element.children[0].classList.contains('black')) { targetColor = 'black' }
                    if (element.children[0].classList.contains('white')) { targetColor = 'white' }
                    // console.log(pieceColor, targetColor);
                    if (pieceColor === targetColor) { return true }
                    else { return false }
                }
            }

            getSelectables(rowArr, 'right', target)
            getSelectables(rowArr, 'left', target)
            getSelectables(colArr, 'top', target)
            getSelectables(colArr, 'bottom', target)
        }
    }


}


