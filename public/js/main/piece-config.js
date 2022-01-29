
const blackMarker = `<div class="relative black black-marker pointer-events-none h-full w-full flex justify-center items-center">
<svg class="absolute h-13 w-13 fill-black" viewBox="0 0 128 128">
    <path
        d="m7.4062 57.902h10.809c3.0625-22.461 22.309-39.77 45.609-39.77 25.43 0 46.043 20.613 46.043 46.043 0.003906 25.43-20.613 46.047-46.043 46.047-23.301 0-42.547-17.309-45.609-39.77h-10.809c3.125 28.398 27.188 50.492 56.418 50.492 31.352 0 56.77-25.418 56.77-56.77 0-31.355-25.418-56.77-56.77-56.77-29.23 0-53.293 22.098-56.418 50.496z" />
</svg>

</div> `
const whiteMarker = `<div class="relative white white-marker pointer-events-none h-full w-full flex justify-center items-center">
<svg class="absolute h-13 w-13 fill-white animate-spin" viewBox="0 0 128 128">
    <path
        d="m7.4062 57.902h10.809c3.0625-22.461 22.309-39.77 45.609-39.77 25.43 0 46.043 20.613 46.043 46.043 0.003906 25.43-20.613 46.047-46.043 46.047-23.301 0-42.547-17.309-45.609-39.77h-10.809c3.125 28.398 27.188 50.492 56.418 50.492 31.352 0 56.77-25.418 56.77-56.77 0-31.355-25.418-56.77-56.77-56.77-29.23 0-53.293 22.098-56.418 50.496z" />
</svg>

</svg>
</div> `
const blackCarrier = `<div class="relative black black-marker pointer-events-none h-full w-full flex justify-center items-center animate-pulse">
<svg class="h-13 w-13 fill-black animate-spin" viewBox="0 0 128 128">
    <path
        d="m7.4062 57.902h10.809c3.0625-22.461 22.309-39.77 45.609-39.77 25.43 0 46.043 20.613 46.043 46.043 0.003906 25.43-20.613 46.047-46.043 46.047-23.301 0-42.547-17.309-45.609-39.77h-10.809c3.125 28.398 27.188 50.492 56.418 50.492 31.352 0 56.77-25.418 56.77-56.77 0-31.355-25.418-56.77-56.77-56.77-29.23 0-53.293 22.098-56.418 50.496z" />
</svg>
<svg class="absolute w-88 h-8  fill-black rotate-180" viewBox="0 5 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const whiteCarrier = `<div class="relative white white-marker pointer-events-none h-full w-full flex justify-center items-center animate-pulse">
<svg class="h-13 w-13 fill-white animate-spin " viewBox="0 0 128 128">
    <path
        d="m7.4062 57.902h10.809c3.0625-22.461 22.309-39.77 45.609-39.77 25.43 0 46.043 20.613 46.043 46.043 0.003906 25.43-20.613 46.047-46.043 46.047-23.301 0-42.547-17.309-45.609-39.77h-10.809c3.125 28.398 27.188 50.492 56.418 50.492 31.352 0 56.77-25.418 56.77-56.77 0-31.355-25.418-56.77-56.77-56.77-29.23 0-53.293 22.098-56.418 50.496z" />
</svg>
<svg class="absolute w-8 h-8   fill-white" viewBox="0 5 128 128">
<path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const blackStar = `<div class="relative black black-star pointer-events-none h-full w-full flex justify-center items-center animate-pulse">
<svg class="absolute w-88 h-8  fill-black rotate-180" viewBox="0 5 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `
const whiteStar = `<div class="relative white white-star pointer-events-none h-full w-full flex justify-center items-center animate-pulse">
<svg class="absolute w-8 h-8  fill-white" viewBox="0 0 128 128">
 <path d="m63.887 10.301c-1.0703 0.046875-2 0.75-2.3281 1.7695l-12.059 37.367-39.254-0.078125v0.003906c-1.1133 0-2.0977 0.71094-2.4414 1.7695-0.34375 1.0547 0.035156 2.2148 0.93359 2.8633l31.809 23.016-12.215 37.332h0.003907c-0.34766 1.0586 0.027343 2.2148 0.92578 2.8672 0.89844 0.65625 2.1172 0.65234 3.0156 0l31.719-23.148 31.73 23.148h-0.003906c0.89844 0.65234 2.1172 0.65625 3.0156 0 0.89844-0.65234 1.2734-1.8086 0.92578-2.8672l-12.215-37.332 31.809-23.016h0.003907c0.89844-0.64844 1.2773-1.8086 0.93359-2.8633-0.34375-1.0586-1.3281-1.7734-2.4414-1.7695l-39.254 0.078125-12.07-37.371c-0.35547-1.0938-1.3945-1.8164-2.543-1.7695z" fill-rule="evenodd"/>
</svg>
</div> `


class Piece {

    setSpawns = (key, arr, piece, star) => {
        if
        (key === 'white'){
            for (let i = size - 2; i > size - 5; i--) {
                const element = arr[i];
                let div = document.createElement('div')
                if(star && i === (size -3)){
                    element.innerHTML = star
                    element.classList.add('white-score')

                } else { 
                    element.innerHTML = piece
                }
               
            }
        } 
        else if 
        (key === 'black'){
            for (let i = 1; i < 4; i++) {
                const element = arr[i];
                let div = document.createElement('div')
                if(star && i === (2)){
                    element.innerHTML = star
                    element.classList.add('black-score')

                } else { 
                    element.innerHTML = piece
                }
               
            }
        }
        else { console.log('array error');}
    
    }

    init = () => {
        const whiteSpawn = {
            one: board.get('row', 1),
            two: board.get('row', 2),
            three: board.get('row', 3)
        }
        const blackSpawn = {
            one: board.get('row', size - 2),
            two: board.get('row', size - 3),
            three: board.get('row', size - 4)
        }

        this.setSpawns('white', whiteSpawn.one, whiteMarker)
        this.setSpawns('white', whiteSpawn.two, whiteMarker, whiteStar)
        this.setSpawns('white', whiteSpawn.three, whiteMarker)
        
        this.setSpawns('black', blackSpawn.one, blackMarker)
        this.setSpawns('black', blackSpawn.two, blackMarker, blackStar)
        this.setSpawns('black', blackSpawn.three, blackMarker)

        
    }


    
}

const piece = new Piece

piece.init()

document.querySelectorAll('.king').forEach(element => {
    console.log(element);
    element.classList.add('animate-bounce')
});



