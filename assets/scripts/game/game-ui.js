'use strict'

const store = require('../store')
const api = require('./game-api')

const signUpSuccess = (data) => {
  $('.auth').text('You successully signed up!')
  $('#signUp')[0].reset()
}

const signUpFailure = (error) => {
  (error)
  $('.auth').text('Sign up failed!')
  $('#signUp')[0].reset()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#needsSignIn').show()
  $('.auth').text('You successully signed in!')
  setTimeout(function () {
    $('.auth').text('')
  }, 3000)
  $('#signIn')[0].reset()
  processSuccessfulLogin()
  api.getGames(data).then(populateGames)
}

const signInFailure = (error) => {
  (error)
  $('.auth').text('Sign in failed!')
  $('#signIn')[0].reset()
}

const changePasswordSuccess = function () {
  $('.auth').text('Password changed!')
  $('#changePassword')[0].reset()
}

const changePasswordFailure = function (error) {
  (error)
  $('.auth').text('Incorrect password!')
  $('#changePassword')[0].reset()
}

const signOutSuccess = function () {
  $('.auth').text('You have been signed out!')
}

const signOutFailure = function (error) {
  $('.auth').text('Sign out failed!', error)
}

const onNewGameSuccess = function () {
  store.gameEnded = false
  $('#theWinnerIs').text('')
  $('.box').text('')
}

const processSuccessfulLogin = function () {
  $('#signIn').hide()
  $('#signUp').hide()
  $('#needsSignIn').show()
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
  onNewGameSuccess
}
