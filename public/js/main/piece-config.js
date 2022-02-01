
const blackMarker = `<div class="relative piece black black-marker pointer-events-none h-full w-full flex justify-center items-center">
<svg class="absolute w-12 h-12  fill-black" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
</div> `
const whiteMarker = `<div class="relative piece white white-marker pointer-events-none h-12 w-12 flex justify-center items-center" >
<svg class="absolute w-13 h-13  fill-white" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
</div> `
const blackCarrier = `<div class="relative piece black black-marker pointer-events-none h-14 w-14 flex justify-center items-center animate-pulse">
<svg class="absolute w-13 h-13  fill-black" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
<svg class="absolute w-88 h-8  fill-black rotate-180" viewBox="0 5 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const whiteCarrier = `<div class="relative piece white white-marker pointer-events-none h-14 w-14 flex justify-center items-center animate-pulse">
<svg class="absolute w-13 h-13  fill-white" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
<svg class="absolute w-8 h-8   fill-white" viewBox="0 5 128 128">
<path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const blackStar = `<div class="relative black black-star pointer-events-none h-full w-full flex justify-center items-center">
<svg class="absolute w-8 h-8  fill-black rotate-180" viewBox="0 5 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const whiteStar = `<div class="relative white white-star pointer-events-none h-14 w-14 flex justify-center items-center ">
<svg class="absolute w-8 h-8  fill-white" viewBox="0 0 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `


class Piece {

    setPiece = (arr, piece, startingInt, amount, type) => {
        if (amount === 1) {
            arr[startingInt].innerHTML = piece
            arr[startingInt].classList.add(type)
        } else {

            for (let i = startingInt - 1; i < amount + startingInt - 1; i++) {
                const element = arr[i];
                element.innerHTML = piece

            }
        }

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



    }



}

const piece = new Piece

piece.init()

document.querySelectorAll('.king').forEach(element => {
    console.log(element);
    element.classList.add('animate-bounce')
});



