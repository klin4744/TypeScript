import TickTackToe from './game';
var table = document.querySelector('table');
var cells = document.querySelectorAll('td');
var game = new TickTackToe();
var h3 = document.querySelector('h3');
// Event listeners
table.addEventListener('click', function (evt) {
    playMove(evt);
    paintBoard();
});
// functions
function playMove(evt) {
    var target = evt.target;
    if (target.tagName === 'TD') {
        var position = void 0;
        var id = parseInt(target.id);
        if (id <= 2) {
            position = [0, id];
        }
        else if (id <= 5) {
            position = [1, id - 3];
        }
        else {
            position = [2, id - 6];
        }
        h3.innerText = game.makeMove(position);
    }
}
function paintBoard() {
    var board = game.getBoard();
    var currentPosition = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1) {
                cells[currentPosition].innerText = 'X';
            }
            else if (board[i][j] === 2) {
                cells[currentPosition].innerText = 'O';
            }
            currentPosition++;
        }
    }
}
