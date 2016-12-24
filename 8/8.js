'use strict'

function print (msg) {
  process.stdout.write(msg)
}

function println (msg) {
  process.stdout.write(msg + '\n')
}

Array.prototype.rot = function (i) {
  while (i--) {
    this.unshift(this.pop())
  }
}

class Screen {
  constructor (w, h) {
    this.width = w
    this.height = h
    this.screen = []
  }

  init () {
    for (let i = 0; i < this.height; i++) {
      this.screen[i] = []
      for (let j = 0; j < this.width; j++) {
        this.screen[i][j] = '.'
      }
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        print(this.screen[i][j] + ' ')
      }
      println('')
    }
    println('')
  }

  lightRangeFromCorner (x, y) {
    for (let w = 0; w < x; w++) {
      for (let h = 0; h < y; h++) {
        this.screen[h][w] = '#'
      }
    }
  }

  rotateRow (y, i) {
    this.screen[y].rot(i)
  }

  rotateCol (x, i) {
    let col = []
    for (let k = 0; k < this.height; k++) {
      col.push(this.screen[k][x])
    }
    col.rot(i)
    for (let k = 0; k < this.height; k++) {
      this.screen[k][x] = col[k]
    }
  }

  getNumLit () {
    let num = 0
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.screen[i][j] === '#') {
          num += 1
        }
      }
    }
    return num
  }
}

let inp = 'rect 1x1-rotate row y=0 by 5-rect 1x1-rotate row y=0 by 6-rect 1x1-rotate row y=0 by 5-rect 1x1-rotate row y=0 by 2-rect 1x1-rotate row y=0 by 5-rect 2x1-rotate row y=0 by 2-rect 1x1-rotate row y=0 by 4-rect 1x1-rotate row y=0 by 3-rect 2x1-rotate row y=0 by 7-rect 3x1-rotate row y=0 by 3-rect 1x1-rotate row y=0 by 3-rect 1x2-rotate row y=1 by 13-rotate column x=0 by 1-rect 2x1-rotate row y=0 by 5-rotate column x=0 by 1-rect 3x1-rotate row y=0 by 18-rotate column x=13 by 1-rotate column x=7 by 2-rotate column x=2 by 3-rotate column x=0 by 1-rect 17x1-rotate row y=3 by 13-rotate row y=1 by 37-rotate row y=0 by 11-rotate column x=7 by 1-rotate column x=6 by 1-rotate column x=4 by 1-rotate column x=0 by 1-rect 10x1-rotate row y=2 by 37-rotate column x=19 by 2-rotate column x=9 by 2-rotate row y=3 by 5-rotate row y=2 by 1-rotate row y=1 by 4-rotate row y=0 by 4-rect 1x4-rotate column x=25 by 3-rotate row y=3 by 5-rotate row y=2 by 2-rotate row y=1 by 1-rotate row y=0 by 1-rect 1x5-rotate row y=2 by 10-rotate column x=39 by 1-rotate column x=35 by 1-rotate column x=29 by 1-rotate column x=19 by 1-rotate column x=7 by 2-rotate row y=4 by 22-rotate row y=3 by 5-rotate row y=1 by 21-rotate row y=0 by 10-rotate column x=2 by 2-rotate column x=0 by 2-rect 4x2-rotate column x=46 by 2-rotate column x=44 by 2-rotate column x=42 by 1-rotate column x=41 by 1-rotate column x=40 by 2-rotate column x=38 by 2-rotate column x=37 by 3-rotate column x=35 by 1-rotate column x=33 by 2-rotate column x=32 by 1-rotate column x=31 by 2-rotate column x=30 by 1-rotate column x=28 by 1-rotate column x=27 by 3-rotate column x=26 by 1-rotate column x=23 by 2-rotate column x=22 by 1-rotate column x=21 by 1-rotate column x=20 by 1-rotate column x=19 by 1-rotate column x=18 by 2-rotate column x=16 by 2-rotate column x=15 by 1-rotate column x=13 by 1-rotate column x=12 by 1-rotate column x=11 by 1-rotate column x=10 by 1-rotate column x=7 by 1-rotate column x=6 by 1-rotate column x=5 by 1-rotate column x=3 by 2-rotate column x=2 by 1-rotate column x=1 by 1-rotate column x=0 by 1-rect 49x1-rotate row y=2 by 34-rotate column x=44 by 1-rotate column x=40 by 2-rotate column x=39 by 1-rotate column x=35 by 4-rotate column x=34 by 1-rotate column x=30 by 4-rotate column x=29 by 1-rotate column x=24 by 1-rotate column x=15 by 4-rotate column x=14 by 1-rotate column x=13 by 3-rotate column x=10 by 4-rotate column x=9 by 1-rotate column x=5 by 4-rotate column x=4 by 3-rotate row y=5 by 20-rotate row y=4 by 20-rotate row y=3 by 48-rotate row y=2 by 20-rotate row y=1 by 41-rotate column x=47 by 5-rotate column x=46 by 5-rotate column x=45 by 4-rotate column x=43 by 5-rotate column x=41 by 5-rotate column x=33 by 1-rotate column x=32 by 3-rotate column x=23 by 5-rotate column x=22 by 1-rotate column x=21 by 2-rotate column x=18 by 2-rotate column x=17 by 3-rotate column x=16 by 2-rotate column x=13 by 5-rotate column x=12 by 5-rotate column x=11 by 5-rotate column x=3 by 5-rotate column x=2 by 5-rotate column x=1 by 5'
//let test = 'rect 3x2-rotate column x=1 by 1-rotate row y=0 by 4-rotate column x=1 by 1'

// TEST
//let screen = new Screen(7, 3)
//let cmds = test.split('-')

// NORMAL
let screen = new Screen(50, 6)
let cmds = inp.split('-')

screen.init()

for (let i = 0; i < cmds.length; i++) {
  let cmd = cmds[i].split(' ')

  if (cmd[0] === 'rect') {
    let xy = cmd[1].split('x')
    screen.lightRangeFromCorner(parseInt(xy[0]), parseInt(xy[1]))
  }

  if (cmd[0] === 'rotate') {
    let xy = parseInt(cmd[2].split('=')[1])
    let by = parseInt(cmd[4])

    if (cmd[1] === 'row') {
      screen.rotateRow(xy, by)
    } else if (cmd[1] === 'column') {
      screen.rotateCol(xy, by)
    }
  }
}

console.log('Part 1:', screen.getNumLit())
console.log('Part 2:')
screen.print()
