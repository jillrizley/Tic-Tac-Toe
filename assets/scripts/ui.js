// 'use strict'
//
// const store = require('./store')
//
// const signUpSuccess = (data) => {
//   console.log(data)
//   $('.auth').text('You successully signed up!')
//   $('#sign-up')[0].reset()
// }
//
// const signUpFailure = (error) => {
//   console.error(error)
//   $('.auth').text('Sign up failed!')
//   $('#sign-up')[0].reset()
// }
//
// const signInSuccess = (data) => {
//   store.user = data.user
//   console.log(store.user)
//   $('#needsSignIn').show()
//   $('.auth').text('You successully signed in!')
//   $('#sign-in')[0].reset()
//   processSuccessfulLogin()
// }
//
// const signInFailure = (error) => {
//   console.error(error)
//   $('.auth').text('Sign in failed!')
//   $('#sign-in')[0].reset()
// }
//
// const changePasswordSuccess = function () {
//   console.log('Password changed!')
//   $('.auth').text('Password changed!')
//   $('#change-password')[0].reset()
// }
//
// const changePasswordFailure = function (error) {
//   console.log('Password change failed', error)
//   $('.auth').text('Incorrect password!')
//   $('#change-password')[0].reset()
// }
//
// const signOutSuccess = function () {
//   $('.auth').text('You have been signed out!')
// }
//
// const signOutFailure = function (error) {
//   $('.auth').text('Sign out failed!', error)
// }
//
// const processSuccessfulLogin = function () {
//   $('#sign-in').hide()
//   $('#sign-up').hide()
//   $('#needsSignIn').show()
// }
//
// module.exports = {
//   signUpSuccess,
//   signUpFailure,
//   signInSuccess,
//   signInFailure,
//   changePasswordSuccess,
//   changePasswordFailure,
//   signOutSuccess,
//   signOutFailure,
//   processSuccessfulLogin
// }
