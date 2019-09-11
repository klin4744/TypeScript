enum Move {
   Empty,
   X,
   O,
}
class TickTacToe {
   private won: [boolean, string];
   private board: Move[][];
   private currentPlayer: Move;
   constructor() {
      this.won = [false, ''];
      this.board = [
         [Move.Empty, Move.Empty, Move.Empty],
         [Move.Empty, Move.Empty, Move.Empty],
         [Move.Empty, Move.Empty, Move.Empty],
      ];
      this.currentPlayer = Move.X;
   }
   public getBoard(): Move[][] {
      return this.board;
   }
   public getGameState(): string {
      if (this.won[0]) {
         return `The ${this.won[1]} player has won!`;
      }
      return `No one has won yet`;
   }
   public makeMove(player: Move, position: [number, number]): void {
      try {
         if (this.board[position[0]][position[1]])
            throw new Error(
               'That spot is occupied! Please Make a different move',
            );
         this.board[position[0]][position[1]] === player;
         if (this.checkWon()) {
            this.won[1] = player === Move.X ? 'X' : 'O';
            this.getGameState();
         }
         console.log(`Move made! by ${player}`);
         player === Move.X
            ? (this.currentPlayer = Move.O)
            : (this.currentPlayer = Move.X);
      } catch (error) {
         console.log(error.message);
      }
   }
   public checkWon(): boolean {
      let arrStr: string = this.board.join('\n').replace(/,/g, '');
      let winRegex = /1{3}|2{3}|1.{2}\n.1.\n.{2}1|2.{2}\n.2.\n.{2}2|1.{2}\n1.{2}\n1.{2}|2.{2}\n2.{2}\n2.{2}|.1.\n.1.\n.1.|.2.\n.2.\n.2.|.{2}1\n.{2}1\n.{2}1|.{2}2\n.{2}2\n.{2}2/;
      let matches: any = arrStr.match(winRegex);
      if (matches) {
         this.won[0] = true;
      }
      return true;
   }
}

const game: TickTacToe = new TickTacToe();
console.log(game.getBoard());
console.log(game.checkWon());
