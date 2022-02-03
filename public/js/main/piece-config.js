
const blackMarker = `<div class="z-30 relative piece black black-marker pointer-events-none h-full w-full flex justify-center items-center">
<svg class="absolute w-12 h-12  ${black}" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
</div> `
const whiteMarker = `<div class="z-30 relative piece white white-marker pointer-events-none h-12 w-12 flex justify-center items-center" >
<svg class="absolute w-13 h-13  ${white}" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
</div> `
const blackCarrier = `<div class="z-30 relative piece black black-carrier pointer-events-none h-14 w-14 flex justify-center items-center">
<svg class="black-marker absolute w-13 h-13  ${black}" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
<svg class="absolute w-8 h-8  ${white}" viewBox="0 0 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const whiteCarrier = `<div class="z-30 relative piece white white-carrier pointer-events-none h-14 w-14 flex justify-center items-center">
<svg class="white-marker absolute w-13 h-13  ${white}" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
<svg class="absolute w-8 h-8  ${black} rotate-180" viewBox="0 5 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const blackStar = `<div class="z-0 relative black black-star pointer-events-none h-full w-full flex justify-center items-center">
<div class="z-0 black-barrier absolute w-40 h-40">
<svg class="rotate-90 pointer-events-none w-full h-full fill-neutral-900 ${opacity}" version="1.1" viewBox="0 0 128 128" >
<g>
 <path d="m6.3984 6.3984v25.602l25.602-25.602z"/>
 <path d="m6.3984 57.602v25.598l76.801-76.801h-25.598"/>
 <path d="m121.6 6.3984h-12.801l-102.4 102.4v12.801h12.801l102.4-102.4z"/>
 <path d="m121.6 44.801-76.801 76.801h25.598l51.203-51.203z"/>
 <path d="m96 121.6h25.602v-25.602z"/>
</g>
</svg>
</div>
<svg class="absolute w-8 h-8  ${black} rotate-180" viewBox="0 5 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const whiteStar = `<div class="relative white white-star pointer-events-none h-14 w-14 flex justify-center items-center ">
<div class="white-barrier absolute w-40 h-40">
<svg class="rotate-90 pointer-events-none w-full h-full fill-neutral-900 ${opacity}" version="1.1" viewBox="0 0 128 128" >
<g>
 <path d="m6.3984 6.3984v25.602l25.602-25.602z"/>
 <path d="m6.3984 57.602v25.598l76.801-76.801h-25.598"/>
 <path d="m121.6 6.3984h-12.801l-102.4 102.4v12.801h12.801l102.4-102.4z"/>
 <path d="m121.6 44.801-76.801 76.801h25.598l51.203-51.203z"/>
 <path d="m96 121.6h25.602v-25.602z"/>
</g>
</svg>
</div>
<svg class="absolute w-8 h-8  ${white}" viewBox="0 0 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const barrier = `<div class="pointer-events-none z-0 absolute w-40 h-40">
<svg class="rotate-90 pointer-events-none w-full h-full fill-neutral-900 ${opacity}" version="1.1" viewBox="0 0 128 128" >
<g>
 <path d="m6.3984 6.3984v25.602l25.602-25.602z"/>
 <path d="m6.3984 57.602v25.598l76.801-76.801h-25.598"/>
 <path d="m121.6 6.3984h-12.801l-102.4 102.4v12.801h12.801l102.4-102.4z"/>
 <path d="m121.6 44.801-76.801 76.801h25.598l51.203-51.203z"/>
 <path d="m96 121.6h25.602v-25.602z"/>
</g>
</svg>
</div>`


class Piece {

    setPiece = (arr, piece, startingInt, amount, type) => {
        if (amount === 1) {
            arr[startingInt].innerHTML = piece
            arr[startingInt].classList.add(type)
            if(type === 'black-score'){
                bBarrier = arr[startingInt]
                blackStarData = arr[startingInt].getAttribute('data')
            } else {
                wBarrier = arr[startingInt]
                whiteStarData = arr[startingInt].getAttribute('data')
            }
        } else {

            for (let i = startingInt - 1; i < amount + startingInt - 1; i++) {
                const element = arr[i];
                element.innerHTML = piece

            }
        }

    }

    setScoreZone = () => {
        let walls = document.querySelectorAll('.wall')
        let arr = [document.querySelector('.white-score'), document.querySelector('.black-score')]
        let t

        if (isWhitesTurn) {
            t = 0
        }
        else {
            t = 1
        }
        walls.forEach(element => {
            element.classList.toggle('wall')
        });
        const element = arr[t];
        let r = parseInt(element.getAttribute('row'))
        let c = parseInt(element.getAttribute('col'))
        let newArr = board.get('row', r)
        let newArr2 = board.get('row', r + 1)
        let newArr3 = board.get('row', r - 1)
        newArr[c + 1].classList.toggle('wall')
        newArr[c - 1].classList.toggle('wall')
        newArr2[c + 1].classList.toggle('wall')
        newArr2[c - 1].classList.toggle('wall')
        newArr2[c].classList.toggle('wall')
        newArr3[c + 1].classList.toggle('wall')
        newArr3[c - 1].classList.toggle('wall')
        newArr3[c].classList.toggle('wall')
    }

    init = () => {

        this.setPiece(board.get('col', 0), whiteMarker, 7, 2)
        this.setPiece(board.get('col', 1), whiteMarker, 7, 2)
        this.setPiece(board.get('row', 10), whiteMarker, 4, 2)
        this.setPiece(board.get('row', 9), whiteMarker, 4, 2)
        this.setPiece(board.get('row', 9), whiteStar, 1, 1, 'white-score')

        this.setPiece(board.get('col', 10), blackMarker, 4, 2)
        this.setPiece(board.get('col', 9), blackMarker, 4, 2)
        this.setPiece(board.get('row', 0), blackMarker, 7, 2)
        this.setPiece(board.get('row', 1), blackMarker, 7, 2)
        this.setPiece(board.get('row', 1), blackStar, 9, 1, 'black-score')
        this.setScoreZone()

        document.querySelectorAll('.black-marker').forEach(element => {
            element.classList.toggle('opacity-50')
            // console.log(element);
        })
        document.querySelector('.black-barrier').classList.toggle('hidden')
    }



}

const piece = new Piece

piece.init()




