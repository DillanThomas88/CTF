
const blackMarker = `<div class="black black-marker pointer-events-none h-full w-full flex justify-center items-center">
<svg class="h-13 w-13 fill-black animate-spin" viewBox="0 0 128 128">
    <path
        d="m7.4062 57.902h10.809c3.0625-22.461 22.309-39.77 45.609-39.77 25.43 0 46.043 20.613 46.043 46.043 0.003906 25.43-20.613 46.047-46.043 46.047-23.301 0-42.547-17.309-45.609-39.77h-10.809c3.125 28.398 27.188 50.492 56.418 50.492 31.352 0 56.77-25.418 56.77-56.77 0-31.355-25.418-56.77-56.77-56.77-29.23 0-53.293 22.098-56.418 50.496z" />
</svg>
<svg class="absolute w-6 h-6  fill-black rotate-180" viewBox="0 0 128 128">
    <path d="m64 3.1992c-23.426 0-42.496 19.07-42.496 42.496 0 36.609 39.168 76.672 40.832 78.336 0.38281 0.38281 1.0234 0.64062 1.6641 0.64062s1.2812-0.25781 1.6641-0.64062c1.6641-1.6641 40.832-41.727 40.832-78.336 0-23.422-19.07-42.496-42.496-42.496zm0 64.129c-11.902 0-21.504-9.6016-21.504-21.504 0-11.902 9.6016-21.504 21.504-21.504s21.504 9.6016 21.504 21.504c0 11.777-9.6016 21.504-21.504 21.504z"/>
</svg>
</div> `
const whiteMarker = `<div class="white white-marker pointer-events-none h-full w-full flex justify-center items-center">
<svg class="h-13 w-13 fill-white animate-spin" viewBox="0 0 128 128">
    <path
        d="m7.4062 57.902h10.809c3.0625-22.461 22.309-39.77 45.609-39.77 25.43 0 46.043 20.613 46.043 46.043 0.003906 25.43-20.613 46.047-46.043 46.047-23.301 0-42.547-17.309-45.609-39.77h-10.809c3.125 28.398 27.188 50.492 56.418 50.492 31.352 0 56.77-25.418 56.77-56.77 0-31.355-25.418-56.77-56.77-56.77-29.23 0-53.293 22.098-56.418 50.496z" />
</svg>
<svg class="absolute w-6 h-6  fill-white " viewBox="0 0 128 128">
    <path d="m64 3.1992c-23.426 0-42.496 19.07-42.496 42.496 0 36.609 39.168 76.672 40.832 78.336 0.38281 0.38281 1.0234 0.64062 1.6641 0.64062s1.2812-0.25781 1.6641-0.64062c1.6641-1.6641 40.832-41.727 40.832-78.336 0-23.422-19.07-42.496-42.496-42.496zm0 64.129c-11.902 0-21.504-9.6016-21.504-21.504 0-11.902 9.6016-21.504 21.504-21.504s21.504 9.6016 21.504 21.504c0 11.777-9.6016 21.504-21.504 21.504z"/>
</svg>
</div> `

class Piece {

    setSpawns = (key, arr, piece,) => {
        if
        (key === 'white'){
            for (let i = size - 2; i > size - 5; i--) {
                const element = arr[i];
                let div = document.createElement('div')
                element.innerHTML = piece
               
            }
        } 
        else if 
        (key === 'black'){
            for (let i = 1; i < 4; i++) {
                const element = arr[i];
                let div = document.createElement('div')
                element.innerHTML = piece
               
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
        this.setSpawns('white', whiteSpawn.two, whiteMarker)
        this.setSpawns('white', whiteSpawn.three, whiteMarker)
        
        this.setSpawns('black', blackSpawn.one, blackMarker)
        this.setSpawns('black', blackSpawn.two, blackMarker)
        this.setSpawns('black', blackSpawn.three, blackMarker)

        
    }


    
}

const piece = new Piece

piece.init()

document.querySelectorAll('.king').forEach(element => {
    console.log(element);
    element.classList.add('animate-bounce')
});



