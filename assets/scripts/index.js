'use strict'
//
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
  $('#sign-up-form').on('submit', events.onSubmit)
})

require('./example')

// make an x appear in a box when clicked
let clickCounter = 0

$('.box').on('click', function (event) {
  // const textValue = $(event.target).text('')
  clickCounter++
  console.log(clickCounter)
  if (clickCounter % 2 === 0) {
    $(event.target).text('O')
    console.log(event.target)
  } else {
    $(event.target).text('X')
    console.log(event.target)
  }
//   if $.box.text === 'X' || textValue === 'O') {
//   }
})
//
// $('.box').one('click', function () {
//   alert('This will be displayed only once.')
// })
// function gameOverQ () {
//   Game_Board.winner = '?' // Assume the outcome is in doubt, then check.
//   return winnerQ(1, 2, 3)  // check for 3-in-a-row horizontally
//        || winnerQ(4, 5, 6)
//        || winnerQ(7, 8, 9)
//        || winnerQ(1, 4, 7) // check for 3-in-a-row vertically
//        || winnerQ(2, 5, 8)
//        || winnerQ(3, 6, 9)
//        || winnerQ(1, 5, 9)  // check for 3-in-a-row diagonally
//        || winnerQ(7, 5, 3)
//        || stalemateQ ()   // check for win by 'cat'
// }
//
// function winnerQ (p1, p2, p3) {
//   const s = Game_Board.boardString
//   const c1 = s.charAt(p1)
//   if (c1 === '-') return false
//   const c2 = s.charAt(p2)
//   if (c1 !== c2) return false
//   const c3 = s.charAt(p3)
//   if (c1 !== c3) return false
//   Game_Board.winner = c1
//   return true
// }
//
// function stalemateQ () {
//   const s = Game_Board.boardString
//   for (let i = 0; i < 9; i++) {
//     if (s.charAt(i) === '-') return false
//   }
//   Game_Board.winner = 'C'
//   return true
// }
// $(() => {
//   event.addHandlers()
// })

// only click one square once
// only click until the game has been won
// end the damn game

// end the game when there are no more spaces left
// declare a winner
// reset the game
