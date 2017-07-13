'use strict'

const store = require('../store')
const api = require('./game-api')

const signUpSuccess = (data) => {
  $('.auth').text('You successully signed up!')
  $('#sign-up')[0].reset()
}

const signUpFailure = (error) => {
  (error)
  $('.auth').text('Sign up failed, incorrect username/password or username already taken!')
  $('#sign-up')[0].reset()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#needsSignIn').show()
  $('.auth').text('You successully signed in!')
  setTimeout(function () {
    $('.auth').text('')
  }, 3000)
  $('#sign-in')[0].reset()
  api.getGames(data).then(populateGames)
  processSuccessfulLogin()
}

const signInFailure = (error) => {
  (error)
  $('.auth').text('Sign in failed!')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function () {
  $('.auth').text('Password changed!')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function (error) {
  (error)
  $('.auth').text('Incorrect password!')
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  $('.auth').text('See you next time!')
  processSuccessfulSignOut()
  setTimeout(function () {
    $('.auth').text('')
  }, 3000)
}

const signOutFailure = function (error) {
  $('.auth').text('Sign out failed!', error)
}

const onNewGameSuccess = function (data) {
  store.gameEnded = false
  $('#theWinnerIs').text('')
  $('.box').text('')
  api.getGames(data).then(populateGames)
}

const processSuccessfulLogin = function () {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#needsSignIn').show()
  $('#needsSignInSuccess').hide()
}

const processSuccessfulSignOut = function () {
  $('#sign-in').show()
  $('#sign-up').show()
  $('#needsSignIn').hide()
  $('#needsSignInSuccess').show()
}

const populateGames = function (data) {
  $('.games-played').text(data.games.length)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  processSuccessfulLogin,
  populateGames,
  onNewGameSuccess,
  processSuccessfulSignOut
}
