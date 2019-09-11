enum Move {
   Empty,
   X,
   O,
}
class TickTacToe {
   private won: [boolean, string];
   private board: Move[][];
   constructor() {
      this.won = [false, ''];
      this.board = [
         [Move.Empty, Move.Empty, Move.Empty],
         [Move.Empty, Move.Empty, Move.Empty],
         [Move.Empty, Move.Empty, Move.Empty],
      ];
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
   public makeMove(player: Move, position: [number, number]) {
      this.board[position[0]][position[1]] === player;
   }
}
