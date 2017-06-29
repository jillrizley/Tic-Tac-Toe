'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store.user)
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = function () {
  console.log('Password has been changed!')
}

const changePasswordFailure = function (error) {
  console.log('You messed up!', error)
}

const signOutSuccess = function () {
  console.log('You have been signed out!')
}

const signOutFailure = function (error) {
  console.log('You messed up!', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
