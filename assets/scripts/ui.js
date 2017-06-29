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
  console.log('Password changed!')
}

const changePasswordFailure = function (error) {
  console.log('Password change failed', error)
}

const signOutSuccess = function () {
  console.log('You have been signed out!')
}

const signOutFailure = function (error) {
  console.log('Sign out failed!', error)
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
