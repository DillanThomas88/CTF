


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
            case 3:
                this.setPiece(board.get('row', 2), blackStar, 9, 1, 'black-score')
                this.setPiece(board.get('col', 0), blackMarker, 1, 5)


                this.setPiece(board.get('row', 8), whiteStar, 1, 1, 'white-score')
                this.setPiece(board.get('col', 10), whiteMarker, 7, 5)


                this.setWall(board.get('row', 5), 1, 2)
                this.setWall(board.get('row', 5), 10, 2)



                this.setScoreZone()
                break;
            case 4:
                this.setPiece(board.get('row', 3), blackStar, 3, 1, 'black-score')
                this.setPiece(board.get('row', 0), blackMarker, 1, 1)
                this.setPiece(board.get('row', 1), blackMarker, 2, 1)
                this.setPiece(board.get('row', 5), blackMarker, 3, 2)
                this.setPiece(board.get('col', 5), blackMarker, 3, 2)


                this.setPiece(board.get('row', 7), whiteStar, 7, 1, 'white-score')
                this.setPiece(board.get('row', 10), whiteMarker, 11, 1)
                this.setPiece(board.get('row', 9), whiteMarker, 10, 1)
                this.setPiece(board.get('row', 5), whiteMarker, 8, 2)
                this.setPiece(board.get('col', 5), whiteMarker, 8, 2)



                this.setWall(board.get('row', 5), 5, 3)
                this.setWall(board.get('col', 5), 5, 1)
                this.setWall(board.get('col', 5), 7, 1)



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






