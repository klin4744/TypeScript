"use strict";
var Move;
(function (Move) {
    Move[Move["Empty"] = 0] = "Empty";
    Move[Move["X"] = 1] = "X";
    Move[Move["O"] = 2] = "O";
})(Move || (Move = {}));
var TickTacToe = /** @class */ (function () {
    function TickTacToe() {
        this.won = false;
        this.board = [
            [Move.Empty, Move.Empty, Move.Empty],
            [Move.Empty, Move.Empty, Move.Empty],
            [Move.Empty, Move.Empty, Move.Empty],
        ];
    }
    TickTacToe.getBoard = function () {
        return this.board;
    };
    return TickTacToe;
}());
