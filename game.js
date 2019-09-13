var Move;
(function (Move) {
    Move[Move["Empty"] = 0] = "Empty";
    Move[Move["X"] = 1] = "X";
    Move[Move["O"] = 2] = "O";
})(Move || (Move = {}));
var TickTacToe = /** @class */ (function () {
    function TickTacToe() {
        this.won = [false, ''];
        this.board = [
            [Move.Empty, Move.Empty, Move.Empty],
            [Move.Empty, Move.Empty, Move.Empty],
            [Move.Empty, Move.Empty, Move.Empty],
        ];
        this.currentPlayer = Move.X;
    }
    TickTacToe.prototype.getBoard = function () {
        return this.board;
    };
    TickTacToe.prototype.getGameState = function () {
        if (this.won[0]) {
            return "The " + this.won[1] + " player has won!";
        }
        return "No one has won yet";
    };
    TickTacToe.prototype.makeMove = function (position) {
        try {
            if (this.won[0])
                return "No more moves can be made. Player " + this.won[1] + " has won!";
            if (this.board[position[0]][position[1]])
                throw new Error('That spot is occupied! Please Make a different move');
            this.board[position[0]][position[1]] = this.currentPlayer;
            if (this.checkWon()) {
                this.won[1] = this.currentPlayer === Move.X ? 'X' : 'O';
            }
            this.currentPlayer === Move.X
                ? (this.currentPlayer = Move.O)
                : (this.currentPlayer = Move.X);
            if (this.won[1])
                return "Player " + this.won[1] + " has won!";
            return "Move made! by " + this.currentPlayer;
        }
        catch (error) {
            console.log(error.message);
        }
    };
    TickTacToe.prototype.checkWon = function () {
        var arrStr = this.board.join('\n').replace(/,/g, '');
        var winRegex = /1{3}|2{3}|1.{2}\n.1.\n.{2}1|2.{2}\n.2.\n.{2}2|1.{2}\n1.{2}\n1.{2}|2.{2}\n2.{2}\n2.{2}|.1.\n.1.\n.1.|.2.\n.2.\n.2.|.{2}1\n.{2}1\n.{2}1|.{2}2\n.{2}2\n.{2}2/;
        var matches = arrStr.match(winRegex);
        if (matches) {
            this.won[0] = true;
        }
        return this.won[0];
    };
    return TickTacToe;
}());
export default TickTacToe;
