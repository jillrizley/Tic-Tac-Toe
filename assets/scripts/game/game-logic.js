'use strict'
const store = require('../store')

store.clickCounter = store.clickCounter || 0
store.gameEnded = store.gameEnded || false
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

$('.box').on('click', function (event) {
  if (store.gameEnded) {
    return false
  }
  if (!($(event.target).text())) {
    store.clickCounter++
    if (store.clickCounter % 2 === 0) {
      $(event.target).text('O')
    } else {
      $(event.target).text('X')
    }
    if (isWinner()) {
      const winner = $(event.target).text()
      store.gameEnded = true
      $('#theWinnerIs').text('Player ' + winner + ' ' + 'you are the winner!!!')
    } else if (store.clickCounter >= 9) {
      $('#theWinnerIs').text('It\'s a Draw!!!')
    }
  }
})
