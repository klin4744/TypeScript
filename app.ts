import TickTackToe from './game';

const table: HTMLTableElement = document.querySelector('table');
const cells: NodeListOf<HTMLTableDataCellElement> = document.querySelectorAll(
   'td',
);
const game: TickTackToe = new TickTackToe();
const h3: HTMLHeadingElement = document.querySelector('h3');

// Event listeners
table.addEventListener('click', evt => {
   playMove(evt);
   paintBoard();
});

// functions
function playMove(evt: Event) {
   let target = <HTMLTableDataCellElement>evt.target;
   if (target.tagName === 'TD') {
      let position: [number, number];
      let id = parseInt(target.id);
      if (id <= 2) {
         position = [0, id];
      } else if (id <= 5) {
         position = [1, id - 3];
      } else {
         position = [2, id - 6];
      }
      h3.innerText = game.makeMove(position);
   }
}
function paintBoard() {
   const board: number[][] = game.getBoard();
   let currentPosition: number = 0;
   for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
         if (board[i][j] === 1) {
            cells[currentPosition].innerText = 'X';
         } else if (board[i][j] === 2) {
            cells[currentPosition].innerText = 'O';
         }
         currentPosition++;
      }
   }
}
