import Ship from "./ship.js";

class GameBoard {
  constructor() {
    this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(ship, x, y, direction) {
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        this.board[y][x + i] = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[y + i][x] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    const target = this.board[y][x];
    if (target instanceof Ship) {
      target.hit();
      console.log(`Hit!`);
    } else {
      this.missedAttacks.push([x, y]);
      console.log(`Miss!`);
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}

export default GameBoard;
