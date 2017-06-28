'use strict'
//
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const events = require('./events')
// const events = require('./events')

// // $(() => {
// //   setAPIOrigin(location, config)
// //   $('#sign-up-form').on('submit', events.onSubmit)
// // })
// //
// // require('./example')

// make an x appear in a box when clicked
$('#game-board').on('click', function (event) {
  $(event.target).text('X', event.target)
})

// change every other x to an o
// end the game when there are no more spaces left
// declare a winner
// reset the game
