'use strict'
const api = require('./game-api')
const ui = require('./game-ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutSuccess)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.onNewGame()
      .then(ui.onNewGameSuccess)
      .catch(ui.onNewGameError)
  $(this).attr('class')
}

const addHandlers = () => {
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#changePassword').on('submit', onChangePassword)
  $('#signOut').on('submit', onSignOut)
  $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
