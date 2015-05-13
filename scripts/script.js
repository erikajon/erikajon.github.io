var lastMove = '';
var board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var winningCombos;

function resetBoard(){
  $('li').removeClass('cross');
  $('li').removeClass('nought');
  board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  lastMove = '';
  $('#move').text('User1, please make your move');
}

function addMoveToBoard(lastMove, indexOfBoard) {
    board[indexOfBoard] = lastMove;
}

function checkWinner() {
  if (board[0] === board[1] && board[1] === board[2]) {
    winner = board[0];
  } else if (board[3] === board[4] && board[4] === board[5]) {
    winner = board[3];
  } else if (board[6] === board[7] && board[7] === board[8]) {
    winner = board[6];
  } else if (board[0] === board[4] && board[4] === board[8]) {
    winner = board[0];
  } else if (board[2] === board[4] && board[4] === board[6]) {
    winner = board[2];
  } else if (board[0] === board[3] && board[3] === board[6]) {
    winner = board[0];
  } else if (board[1] === board[4] && board[4] === board[7]) {
    winner = board[1];
  } else if (board[2] === board[5] && board[5] === board[8]) {
    winner = board[2];
  }
  if(winner === 'o' || winner === 'x') {
    alert('Winner is ' + winner);
    resetBoard();
  } else {
    if(lastMove === 'x') {
      $('#move').text('User2, please make your move');
    } else {
      $('#move').text('User1, please make your move');
    }
  }
}

$(document).ready(function() {
  $('#move').text('User1, please make your move');
  $('li').on('click', function(event) {
      if(lastMove === 'x') {
        event.stopPropagation();
        $(this).addClass('nought'); 
        lastMove = 'o';
        var indexOfBoard = Number($(this).attr('value'));
        addMoveToBoard(lastMove, indexOfBoard);
        checkWinner();
      } else {
        $(this).addClass('cross');
        lastMove = 'x';
        var indexOfBoard = Number($(this).attr('value'));
        addMoveToBoard(lastMove, indexOfBoard);
        checkWinner();
      } 
  })


  $('#reset').on('click', resetBoard);

})