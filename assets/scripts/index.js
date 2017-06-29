'use strict'
//
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  events.addHandlers()
})

$(() => {
  setAPIOrigin(location, config)
  $('#sign-up-form').on('submit', events.onSubmit)
})

let clickCounter = 0
const isWinner = function () {
  if (($('#1').text() === $('#2').text() && $('#1').text() === $('#3').text() && $('#1').text() !== '') ||
  (($('#4').text() === $('#5').text() && $('#4').text() === $('#6').text() && $('#4').text() !== '')) ||
  (($('#7').text() === $('#8').text() && $('#7').text() === $('#9').text() && $('#7').text() !== '')) ||
  (($('#1').text() === $('#4').text() && $('#1').text() === $('#7').text() && $('#1').text() !== '')) ||
  (($('#2').text() === $('#5').text() && $('#2').text() === $('#8').text() && $('#2').text() !== '')) ||
  (($('#3').text() === $('#6').text() && $('#3').text() === $('#9').text() && $('#3').text() !== '')) ||
  (($('#1').text() === $('#5').text() && $('#1').text() === $('#9').text() && $('#1').text() !== '')) ||
  (($('#3').text() === $('#5').text() && $('#3').text() === $('#7').text() && $('#3').text() !== ''))
) {
    return true
  } else {
    return false
  }
}

// if that all has a value or x or has a value of o, winner

$('.box').on('click', function (event) {
  if (!($(event.target).text())) {
    clickCounter++
    // console.log(clickCounter)
    if (clickCounter % 2 === 0) {
      $(event.target).text('O')
      // console.log(event.target)
    } else {
      $(event.target).text('X')
      // console.log(event.target)
    }
    if (isWinner()) {
// say who wins
      const winner = $(event.target).text()
      console.log(winner)
      $('#theWinnerIs').text('Player ' + winner + ' ' + 'you are the winner!!!')
    }
  }
}
)
// if there is a value in all 3, theres a winner!
// else keep playing
