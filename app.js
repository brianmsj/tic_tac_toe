
var state = {
board: ["","","","","","","","",""],
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


function eventListeners() {
 $('.square').click(function(event) {
   if(state.turn === 0) {
     $(event.currentTarget).removeClass('white')
     $(event.currentTarget).addClass('red')
     changeTurns(state)
   }
   else if(state.turn === 1) {
     $(event.currentTarget).removeClass('white')
     $(event.currentTarget).addClass('blue')
     changeTurns(state)
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
