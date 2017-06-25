
var state = {
board: [0,0,0,0,0,0,0,0,0],
turn: 0
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


function eventListeners() {
 $('.square').click(function(event) {
   if(state.turn === 0) {
     $(event.currentTarget).removeClass('white')
     $(event.currentTarget).addClass('red')
     let index = $(event.currentTarget).attr('value')
     flipBoard(state, index)
     changeTurns(state)
     console.log(state)
   }
   else if(state.turn === 1) {
     $(event.currentTarget).removeClass('white')
     $(event.currentTarget).addClass('blue')
     let index = $(event.currentTarget).attr('value')
     flipBoard(state, index)
     changeTurns(state)
     console.log(state)
   }
 })


// if(state.turn === 0) {
// $('.square').click(function(event) {
//   $(event.currentTarget).addClass('red')
//   changeTurns(state)
// })
// }
//
// else if(state.turn === 1) {
//   $('.square').click(function(event) {
//   $(event.currentTarget).addClass('blue')
//   changeTurns(state)
// })
// }

}$(eventListeners)
