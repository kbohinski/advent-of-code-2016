'use strict'

let md5 = require('crypto-js/md5')
let ProgressBar = require('progress')

let bar = new ProgressBar('Finding Hashes [:bar] :elapsed', {
  total: 40,
  complete: '=',
  incomplete: ' '
})

let inp = 'ugkcyxxp'
let password = ''
let password2 = ['_', '_', '_', '_', '_', '_', '_', '_']
let numFound = 0

let i = 0
while (true) {
  if (i % 980000 === 0) {
    bar.tick()
  }
  let hash = md5(inp + i).toString()
  if (hash.substring(0, 5) === '00000') {
    if (password.length < 8) {
      password += hash[5]
    }
    let index = parseInt(hash[5])
    if (index <= 7 && index >= 0 && password2[index] === '_') {
      numFound += 1
      password2[index] = hash[6]
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
