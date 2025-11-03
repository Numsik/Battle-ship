import Ship from "./ship";

class GameBoard {
  constructor() {
    this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(ship, startX, startY, direction) {
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        this.board[startY][startX + i] = ship;
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        this.board[startY + i][startX] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    const target = this.board[y][x];
    if (target instanceof Ship) {
      target.hit();
      console.log(`Hit! Ship has ${target.hits} hits`);
    } else {
      this.missedAttacks.push([x, y]);
      console.log("Miss");
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}

export default GameBoard;