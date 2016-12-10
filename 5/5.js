'use strict'

var md5 = require('crypto-js/md5')
var ProgressBar = require('progress')

var bar = new ProgressBar('Finding Hashes [:bar] :elapsed', {
  total: 40,
  complete: '=',
  incomplete: ' ',
})

var inp = 'ugkcyxxp'
var password = ''
var password2 = [ '_', '_', '_', '_', '_', '_', '_', '_' ]
var numFound = 0

var i = 0
while (true) {
  if (i % 980000 === 0) {
    bar.tick()
  }
  var hash = md5(inp + i).toString()
  if (hash.substring(0, 5) === '00000') {
    if (password.length < 8) {
      password += hash[ 5 ]
    }
    var index = parseInt(hash[ 5 ])
    if (index <= 7 && index >= 0 && password2[ index ] === '_') {
      numFound += 1
      password2[ index ] = hash[ 6 ]
      if (numFound === 8) {
        break
      }
    }
  }
  i += 1
}
console.log('\n')
console.log('Searched ' + i + ' hashes...')
console.log('Part 1:', password)
console.log('Part 2:', password2.join(''))
