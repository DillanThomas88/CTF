
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
<svg class="w-8 h-8 ${white} rotate-180" viewBox="0 0 128 128">
 <path d="m77 29.301c-3.2852-1.1602-5.2578-4.1328-7.5391-7.5742-2.3984-3.6211-5.1211-7.7266-9.8984-9.8711-10.02-4.5078-21.625 1.2344-30.098 5.4258-0.98828 0.49219-1.9453 0.96094-2.8555 1.3984-5.4648 2.6133-7.9102 2.9805-8.7578 3.0117l-3.4688-12.707c-0.50781-1.8672-2.4297-2.9688-4.3047-2.4609-1.8672 0.51172-2.9648 2.4375-2.457 4.3047l14.695 53.855 1.1797 4.6445 0.24219 0.57031 13.402 49.117c0.42578 1.5586 1.8398 2.5859 3.3789 2.5859 0.30469 0 0.61719-0.039062 0.92578-0.125 1.8672-0.50781 2.9688-2.4375 2.457-4.3047l-12.055-44.176c8.5664-5.9062 22.555-13.984 29.102-13.984 0.14453 0 0.28906 0.003906 0.42578 0.011719 1.6133 0.09375 1.7773 0.28906 2.5508 2.9922 2.0273 7.0898 6.0273 10.699 19.68 6.8164 23.172-6.5977 34.109-37.484 34.566-38.797l2.3281-6.7227-6.75 2.25c-7.625 2.543-27.465 7.0117-36.75 3.7383zm-48.02 32.262c-0.0625 0.058594-0.11328 0.12891-0.17188 0.19531l-7.5938-29.914c5.6523 1.4648 10.59 5.9258 12.418 11.469 2.0625 6.25 0.14844 13.754-4.6523 18.25z" />
</svg>
</div> `
const whiteCarrier = `<div class="z-30 relative piece white white-carrier pointer-events-none h-14 w-14 flex justify-center items-center">
<svg class="white-marker absolute w-13 h-13  ${white}" viewBox="0 0 128 128" >
 <path d="m63.98 5.4297v0.003906c-32.336 0-58.578 26.238-58.578 58.566s26.242 58.57 58.578 58.57c32.336 0 58.578-26.242 58.578-58.574 0-32.328-26.246-58.566-58.578-58.566zm0 11.715c25.867 0 46.863 20.992 46.863 46.855 0 25.867-20.992 46.855-46.863 46.855-25.867 0-46.859-20.988-46.859-46.855 0-25.863 20.992-46.855 46.859-46.855z"/>
</svg>
<svg class="w-8 h-8 ${black}" viewBox="0 0 128 128">
 <path d="m77 29.301c-3.2852-1.1602-5.2578-4.1328-7.5391-7.5742-2.3984-3.6211-5.1211-7.7266-9.8984-9.8711-10.02-4.5078-21.625 1.2344-30.098 5.4258-0.98828 0.49219-1.9453 0.96094-2.8555 1.3984-5.4648 2.6133-7.9102 2.9805-8.7578 3.0117l-3.4688-12.707c-0.50781-1.8672-2.4297-2.9688-4.3047-2.4609-1.8672 0.51172-2.9648 2.4375-2.457 4.3047l14.695 53.855 1.1797 4.6445 0.24219 0.57031 13.402 49.117c0.42578 1.5586 1.8398 2.5859 3.3789 2.5859 0.30469 0 0.61719-0.039062 0.92578-0.125 1.8672-0.50781 2.9688-2.4375 2.457-4.3047l-12.055-44.176c8.5664-5.9062 22.555-13.984 29.102-13.984 0.14453 0 0.28906 0.003906 0.42578 0.011719 1.6133 0.09375 1.7773 0.28906 2.5508 2.9922 2.0273 7.0898 6.0273 10.699 19.68 6.8164 23.172-6.5977 34.109-37.484 34.566-38.797l2.3281-6.7227-6.75 2.25c-7.625 2.543-27.465 7.0117-36.75 3.7383zm-48.02 32.262c-0.0625 0.058594-0.11328 0.12891-0.17188 0.19531l-7.5938-29.914c5.6523 1.4648 10.59 5.9258 12.418 11.469 2.0625 6.25 0.14844 13.754-4.6523 18.25z" />
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

<svg class="w-8 h-8 ${black}" viewBox="0 0 128 128">
 <path d="m77 29.301c-3.2852-1.1602-5.2578-4.1328-7.5391-7.5742-2.3984-3.6211-5.1211-7.7266-9.8984-9.8711-10.02-4.5078-21.625 1.2344-30.098 5.4258-0.98828 0.49219-1.9453 0.96094-2.8555 1.3984-5.4648 2.6133-7.9102 2.9805-8.7578 3.0117l-3.4688-12.707c-0.50781-1.8672-2.4297-2.9688-4.3047-2.4609-1.8672 0.51172-2.9648 2.4375-2.457 4.3047l14.695 53.855 1.1797 4.6445 0.24219 0.57031 13.402 49.117c0.42578 1.5586 1.8398 2.5859 3.3789 2.5859 0.30469 0 0.61719-0.039062 0.92578-0.125 1.8672-0.50781 2.9688-2.4375 2.457-4.3047l-12.055-44.176c8.5664-5.9062 22.555-13.984 29.102-13.984 0.14453 0 0.28906 0.003906 0.42578 0.011719 1.6133 0.09375 1.7773 0.28906 2.5508 2.9922 2.0273 7.0898 6.0273 10.699 19.68 6.8164 23.172-6.5977 34.109-37.484 34.566-38.797l2.3281-6.7227-6.75 2.25c-7.625 2.543-27.465 7.0117-36.75 3.7383zm-48.02 32.262c-0.0625 0.058594-0.11328 0.12891-0.17188 0.19531l-7.5938-29.914c5.6523 1.4648 10.59 5.9258 12.418 11.469 2.0625 6.25 0.14844 13.754-4.6523 18.25z" />
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
<svg class="w-8 h-8 ${white} rotate-180" viewBox="0 0 128 128">
 <path d="m77 29.301c-3.2852-1.1602-5.2578-4.1328-7.5391-7.5742-2.3984-3.6211-5.1211-7.7266-9.8984-9.8711-10.02-4.5078-21.625 1.2344-30.098 5.4258-0.98828 0.49219-1.9453 0.96094-2.8555 1.3984-5.4648 2.6133-7.9102 2.9805-8.7578 3.0117l-3.4688-12.707c-0.50781-1.8672-2.4297-2.9688-4.3047-2.4609-1.8672 0.51172-2.9648 2.4375-2.457 4.3047l14.695 53.855 1.1797 4.6445 0.24219 0.57031 13.402 49.117c0.42578 1.5586 1.8398 2.5859 3.3789 2.5859 0.30469 0 0.61719-0.039062 0.92578-0.125 1.8672-0.50781 2.9688-2.4375 2.457-4.3047l-12.055-44.176c8.5664-5.9062 22.555-13.984 29.102-13.984 0.14453 0 0.28906 0.003906 0.42578 0.011719 1.6133 0.09375 1.7773 0.28906 2.5508 2.9922 2.0273 7.0898 6.0273 10.699 19.68 6.8164 23.172-6.5977 34.109-37.484 34.566-38.797l2.3281-6.7227-6.75 2.25c-7.625 2.543-27.465 7.0117-36.75 3.7383zm-48.02 32.262c-0.0625 0.058594-0.11328 0.12891-0.17188 0.19531l-7.5938-29.914c5.6523 1.4648 10.59 5.9258 12.418 11.469 2.0625 6.25 0.14844 13.754-4.6523 18.25z" />
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
const walls = `
<div class="h-full w-full z-30 ">
<svg class="${wall}" viewBox="0 0 128 128" >
 <path d="m12 8h104c2.2109 0 4 2.2109 4 4v104c0 2.2109-1.7891 4-4 4h-104c-2.2109 0-4-2.2109-4-4v-104c0-2.2109 1.7891-4 4-4z" />
</svg>
</div>`


class Piece {

    setPiece = (arr, piece, startingInt, amount, type) => {
        if (type) {
            arr[startingInt].innerHTML = piece
            arr[startingInt].classList.add(type)
            if (type === 'black-score') {
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

    setWall = (arr, startingInt, amount) => {
        for (let i = startingInt - 1; i < amount + startingInt - 1; i++) {
            const element = arr[i];
            // element.classList.toggle(cellColor)
            // element.classList.toggle(wall)
            element.classList.toggle('wall')
            // element.classList.toggle('rounded-xl')
            element.innerHTML = walls

        }
    }

    setScoreZone = () => {
        let zones = document.querySelectorAll('.zone')
        let arr = [document.querySelector('.white-score'), document.querySelector('.black-score')]
        let t

        if (isWhitesTurn) {
            t = 0
        }
        else {
            t = 1
        }
        zones.forEach(element => {
            element.classList.toggle('zone')
        });
        const element = arr[t];
        let r = parseInt(element.getAttribute('row'))
        let c = parseInt(element.getAttribute('col'))
        let newArr = board.get('row', r)
        let newArr2 = board.get('row', r + 1)
        let newArr3 = board.get('row', r - 1)
        let zone = [newArr[c + 1], newArr[c - 1], newArr2[c + 1], newArr2[c - 1], newArr2[c], newArr3[c + 1], newArr3[c - 1], newArr3[c]]
        zone.forEach(element => {
            element.classList.toggle('zone')
        });
    }



    init = (layout) => {

        switch (layout) {
            case 1:
                this.setPiece(board.get('row', 1), blackStar, 9, 1, 'black-score')
                this.setPiece(board.get('col', 10), blackMarker, 4, 2)
                this.setPiece(board.get('col', 9), blackMarker, 4, 2)
                this.setPiece(board.get('row', 0), blackMarker, 7, 2)
                this.setPiece(board.get('row', 1), blackMarker, 7, 2)

                this.setPiece(board.get('row', 9), whiteStar, 1, 1, 'white-score')
                this.setPiece(board.get('col', 0), whiteMarker, 7, 2)
                this.setPiece(board.get('col', 1), whiteMarker, 7, 2)
                this.setPiece(board.get('row', 10), whiteMarker, 4, 2)
                this.setPiece(board.get('row', 9), whiteMarker, 4, 2)

                this.setScoreZone()
                break;
            case 2:
                this.setPiece(board.get('row', 1), blackStar, 5, 1, 'black-score')
                this.setPiece(board.get('col', 2), blackMarker, 1, 3)
                this.setPiece(board.get('col', 8), blackMarker, 1, 3)


                this.setPiece(board.get('row', 9), whiteStar, 5, 1, 'white-score')
                this.setPiece(board.get('col', 2), whiteMarker, 9, 3)
                this.setPiece(board.get('col', 8), whiteMarker, 9, 3)


                this.setWall(board.get('row', 5), 3, 2)
                this.setWall(board.get('row', 5), 8, 2)



                this.setScoreZone()
                break;

            default:
                break;
        }



        document.querySelectorAll('.black-marker').forEach(element => {
            element.classList.toggle('opacity-50')
            // console.log(element);
        })
        // document.querySelector('.black-barrier').classList.toggle('hidden')
    }


    createLayouts = (parent) => {
        // let container = document.createElement
    }



}






