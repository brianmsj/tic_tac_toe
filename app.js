
const state = {
board: [0,0,0,0,0,0,0,0,0],
turn: 0,
winConditions: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
winner: "",
count: 0
}

function changeTurns(state) {
  if(state.turn === 0) {
    state.turn = 1
  }
  else if (state.turn === 1) {
    state.turn = 0
  }
}
function flipBoard(state,value) {
  if(state.turn === 0) {
     state.board[value] = 1
  }
  if(state.turn === 1) {
    state.board[value] = 2
  }
}
function checkWinner(state) {
  state.winConditions.forEach(function(array) {
    if (winnerOne(array)) {
      state.winner = "X Wins !";
    } else if (winnerTwo(array)) {
      state.winner = "O Wins !";
    }
  });
}
function winnerOne(array) {
  var count = 0;
  var hello = array.forEach(function(gridNumber) {
    if (state.board[gridNumber - 1] === 1) {
      count += 1;
    }
  });

  if (count === 3) {
      return true;
    } else {
      return false;
    }
}
function winnerTwo(array) {
  var count = 0;
  var hello = array.forEach(function(gridNumber) {
    if (state.board[gridNumber - 1] === 2) {
      count += 1;
    }
  });

  if (count === 3) {
      return true;
    } else {
      return false;
    }
}
var stopProp = function (event) {
  event.stopPropogation();
}
function lockButtons(state,stopProp) {
  if(state.winner !=='') {
  $('.square').on('click',stopProp)
  $('.square').off('click');
  }
}

function tieGame(state) {
  if(state.count >= 9 && state.winner === "")
  $('.playerWins').append('<h2 class=statewinner>Tie Game</h2>')
}
function displayWinner(state) {
  if(state.winner !== "") {
  $('.playerWins').append('<h2 class=statewinner>' + state.winner + '</h2>')
  }
}

function eventListeners() {
 $('.square').click(function(event) {
   if(state.turn === 0) {
     state.count++
     $(event.currentTarget).removeClass('white')
     $(event.currentTarget).addClass('red')
     $(event.currentTarget).append('<h1 class=gamepiece>X</h1>')
     let index = $(event.currentTarget).attr('value')
     $(event.currentTarget).on('click',stopProp)
     $(event.currentTarget).off('click')
     flipBoard(state, index)
     changeTurns(state)
     checkWinner(state)
     displayWinner(state)
     tieGame(state)
     lockButtons(state,stopProp)

   }
   else if(state.turn === 1) {
     state.count++
     $(event.currentTarget).removeClass('white')
     $(event.currentTarget).addClass('blue')
     $(event.currentTarget).append('<h1 class=gamepiece>O</h1>')
     let index = $(event.currentTarget).attr('value')
     $(event.currentTarget).on('click',stopProp)
     $(event.currentTarget).off('click');
     flipBoard(state, index)
     changeTurns(state)
     checkWinner(state)
     displayWinner(state)
     tieGame(state)
     lockButtons(state,stopProp)
   }
 })
 $('.reset').click(function(event) {
   location.reload()
 })
}$(eventListeners)
