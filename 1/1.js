'use strict'

var inp = 'R1, L3, R5, R5, R5, L4, R5, R1, R2, L1, L1, R5, R1, L3, L5, L2, R4, L1, R4, R5, L3, R5, L1, R3, L5, R1, L2, R1, L5, L1, R1, R4, R1, L1, L3, R3, R5, L3, R4, L4, R5, L5, L1, L2, R4, R3, R3, L185, R3, R4, L5, L4, R48, R1, R2, L1, R1, L4, L4, R77, R5, L2, R192, R2, R5, L4, L5, L3, R2, L4, R1, L5, R5, R4, R1, R2, L3, R4, R4, L2, L4, L3, R5, R4, L2, L1, L3, R1, R5, R5, R2, L5, L2, L3, L4, R2, R1, L4, L1, R1, R5, R3, R3, R4, L1, L4, R1, L2, R3, L3, L2, L1, L2, L2, L1, L2, R3, R1, L4, R1, L1, L4, R1, L2, L5, R3, L5, L2, L2, L3, R1, L4, R1, R1, R2, L1, L4, L4, R2, R2, R2, R2, R5, R1, L1, L4, L5, R2, R4, L3, L5, R2, R3, L4, L1, R2, R3, R5, L2, L3, R3, R1, R3'
var tests = [ 'R2, L3', 'R2, R2, R2', 'R5, L5, R5, R3' ]

var dirs = inp.split(', ')

var blocks = { 'R': 0, 'L': 0, 'U': 0, 'D': 0 }
var visited = { '0,0': true }
var x = 0
var y = 0

// Right turn, +1
// Left turn, -1
var turn = [ 'U', 'R', 'D', 'L' ]
var turnIndex = 0

var part2Solved = false

// Could likely do something more elegant with mod....
function turnLeft () {
  turnIndex -= 1
  if (turnIndex === -1) {
    turnIndex = 3
  }
}

function turnRight () {
  turnIndex += 1
  if (turnIndex === 4) {
    turnIndex = 0
  }
}

for (var i = 0; i < dirs.length; i++) {
  var n = parseInt(dirs[ i ].substring(1, dirs[ i ].length))

  if (dirs[ i ][ 0 ] === 'R') {
    turnRight()
    blocks[ turn[ turnIndex ] ] += n
  } else if (dirs[ i ][ 0 ] === 'L') {
    turnLeft()
    blocks[ turn[ turnIndex ] ] += n
  }

  if (!part2Solved) {
    for (var j = 1; j <= n; j++) {
      if (turn[ turnIndex ] === 'U') {
        y += 1
      } else if (turn[ turnIndex ] === 'R') {
        x += 1
      } else if (turn[ turnIndex ] === 'D') {
        y -= 1
      } else if (turn[ turnIndex ] === 'L') {
        x -= 1
      }

      if (visited[ '' + x + ',' + y ] === true) {
        console.log('Part 2:', Math.abs(x) + Math.abs(y))
        part2Solved = true
      } else {
        visited[ '' + x + ',' + y ] = true
      }
    }
  }
}

console.log('Part 1:', Math.abs(blocks[ 'R' ] - blocks[ 'L' ]) + Math.abs(blocks[ 'U' ] - blocks[ 'D' ]))
