import Ship from "./ship.js";
import Player from "./player.js";


const player1 = new Player("You");
const player2 = new Player("PC");

const ship1 = new Ship(3);
player1.board.placeShip(ship1, 0, 0, "horizontal");

const ship2 = new Ship(2);
player2.board.placeShip(ship2, 1, 1, "vertical");

player1.makeMove(player2.board, 1,1);
player1.makeMove(player2.board, 1, 2);
player1.makeMove(player2.board, 1, 3);

console.log(`${player2.board.allShipsSunk()}`)