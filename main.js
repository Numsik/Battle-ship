import Ship from "./ship.js";
import Player from "./player.js";

const player = new Player("Ty");
const computer = new Player("Počítač");

player.board.placeShip(new Ship(3), 0, 0, "horizontal");
player.board.placeShip(new Ship(2), 3, 4, "vertical");

computer.board.placeShip(new Ship(3), 1, 1, "horizontal");
computer.board.placeShip(new Ship(2), 5, 5, "vertical");

function renderBoard(board, tableId, showShips = false) {
  const table = document.getElementById(tableId);
  table.innerHTML = "";

  for (let y = 0; y < 10; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("td");
      const content = board.board[y][x];

      if (content !== null && showShips && content !== "hit" && content !== "miss") {
        cell.classList.add("ship");
      }

      if (content === "hit") {
        cell.classList.add("hit");
      }

      if (content === "miss") {
        cell.classList.add("miss");
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}


renderBoard(player.board, "playerBoard", true);
renderBoard(computer.board, "computerBoard", false);


const computerTable = document.getElementById("computerBoard");
computerTable.addEventListener("click", (e) => {
  if (e.target.tagName !== "TD") return;

  const cell = e.target;
  const y = cell.parentNode.rowIndex;
  const x = cell.cellIndex;

  const target = computer.board.board[y][x];

 
  if (target === "hit" || target === "miss") return;

  
  if (target) {
    target.hit();
    computer.board.board[y][x] = "hit";
  } else {
    computer.board.board[y][x] = "miss";
  }

  renderBoard(computer.board, "computerBoard", false);

  if (computer.board.allShipsSunk()) {
    setTimeout(() => alert("🎉 Vyhrál jsi!"), 100);
    return;
  }


  setTimeout(() => {
    let px, py;
    let playerTarget;


    do {
      px = Math.floor(Math.random() * 10);
      py = Math.floor(Math.random() * 10);
      playerTarget = player.board.board[py][px];
    } while (playerTarget === "hit" || playerTarget === "miss");


    if (playerTarget) {
      playerTarget.hit();
      player.board.board[py][px] = "hit";
    } else {
      player.board.board[py][px] = "miss";
    }

   
    renderBoard(player.board, "playerBoard", true);

    if (player.board.allShipsSunk()) {
      setTimeout(() => alert("💀 Počítač vyhrál!"), 100);
    }
  }, 400); 
});
