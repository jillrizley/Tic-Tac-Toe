// 'use strict'
//
// const config = require('./config')
// const store = require('./store')
//
// const signUp = function (data) {
//   console.log('api data list is: ', data)
//   return $.ajax({
//     url: config.apiOrigins.production + '/sign-up/',
//     method: 'POST',
//     data
//   })
// }
//
// const signIn = function (data) {
//   console.log('api data list is: ', data)
//   return $.ajax({
//     url: config.apiOrigins.production + '/sign-in/',
//     method: 'POST',
//     data
//   })
// }
//
// const changePassword = function (data) {
//   console.log('api data list is: ', data)
//   console.log('api store list is: ', store.user.token)
//   return $.ajax({
//     url: config.apiOrigins.production + '/change-password/' + store.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const signOut = function () {
//   console.log('api store is', store.user.token)
//   return $.ajax({
//     url: config.apiOrigins.production + '/sign-out/' + store.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// module.exports = {
//   signUp,
//   signIn,
//   changePassword,
//   signOut
// }
