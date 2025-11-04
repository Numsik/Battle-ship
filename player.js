import GameBoard from "./gameboard.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
  }

  makeMove(opponentBoard, x, y) {
    opponentBoard.receiveAttack(x, y);
  }
}

export default Player;
