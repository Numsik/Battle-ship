import Ship from "./ship";

class GameBoard{
    constructor(){
        this.board = Array(10).fill(null).map(() =>{ Array(10).fill(null)});
        this.ships = [];
        this.missedAtacks = [];
    }
    placeship(ship, startX, startY, direction){
        if (direction === "horizontal"){
            for (let i = 0;i < ship.length; i++){
                this.board[startY][startX + i] = ship
            }
        }
    }
}