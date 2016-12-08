'use strict';

let inp = 'RRLUDDLDUDUDUDRDDDRDDRLUUUDRUDURURURLRDDULLLDRRRRULDDRDDURDLURLURRUULRURDDDDLDDRRLDUDUUDURURDLDRRURDLLLDLLRUDRLDDRUULLLLLRRLDUDLUUDRUULLRLLLRLUURDLDLLDDRULDLUURRURLUUURLLDDULRDULULRULDDLRDDUUDLRRURLLURURLDDLURRLUURRRRLDRDLDUDRUDDRULLDUDDLRRLUUUUUDDLLDRLURDDRLLUDULDRDDLLUURUUUURDRLRLLULUULULLRRDLULRUDURDLRLRDDDRULLUULRURULLLUDUURUUUURUULDURDRRRULRLULDLRRULULUUDDDRDURLLURLLDUUUUDULRDLRDUUDDLDUDRLLRLRRRLULUDDDURLRRURUDDDRDRDRLLRDRDLDDRRDRDLLRLLLRRULRDDURRDUDRURDLDULLRRLURLRLLDURRRLLDRRURRRUULDRLDUULRDLDLURUDLLDLLUUDDDUUUDRL-DLRRDRRDDRRDURLUDDDDDULDDLLDRLURDDDDDDRDDDRDDDLLRRULLLRUDULLDURULRRDLURURUDRUURDRLUURRUDRUULUURULULDDLLDDRLDUDDRDRDDUULDULDDLUDUDDUDLULLUDLLLLLRRRUURLUUUULRURULUDDULLLRLRDRUUULULRUUUULRDLLDLDRDRDRDRRUUURULDUUDLDRDRURRUDDRLDULDDRULRRRLRDDUUDRUDLDULDURRDUDDLULULLDULLLRRRDULLLRRURDUURULDRDURRURRRRDLDRRUDDLLLDRDRDRURLUURURRUUURRUDLDDULDRDRRURDLUULDDUUUURLRUULRUURLUUUDLUDRLURUDLDLDLURUURLDURDDDDRURULLULLDRDLLRRLDLRRRDURDULLLDLRLDR-URURLLDRDLULULRDRRDDUUUDDRDUURULLULDRLUDLRUDDDLDRRLURLURUUDRLDUULDRDURRLLUDLDURRRRLURLDDRULRLDULDDRRLURDDRLUDDULUDULRLDULDLDUDRLLDDRRRDULLDLRRLDRLURLUULDDDDURULLDLLLDRRLRRLLRDDRDLDRURRUURLLDDDLRRRRRDLRRDRLDDDLULULRLUURULURUUDRULRLLRDLDULDRLLLDLRRRUDURLUURRUDURLDDDRDRURURRLRRLDDRURULDRUURRLULDLUDUULDLUULUDURRDDRLLLRLRRLUUURRDRUULLLRUUURLLDDRDRULDULURRDRURLRRLRDURRURRDLDUDRURUULULDDUDUULDRDURRRDLURRLRLDUDRDULLURLRRUDLUDRRRULRURDUDDDURLRULRRUDUUDDLLLURLLRLLDRDUURDDLUDLURDRRDLLRLURRUURRLDUUUUDUD-DRRDRRRLDDLDUDRDLRUUDRDUDRRDUDRDURRDDRLLURUUDRLRDDULLUULRUUDDRLDLRULDLRLDUDULUULLLRDLURDRDURURDUDUDDDRRLRRLLRULLLLRDRDLRRDDDLULDLLUUULRDURRULDDUDDDURRDRDRDRULRRRDRUDLLDDDRULRRLUDRDLDLDDDLRLRLRLDULRLLRLRDUUULLRRDLLRDULURRLDUDDULDDRLUDLULLRLDUDLULRDURLRULLRRDRDDLUULUUUULDRLLDRDLUDURRLLDURLLDDLLUULLDURULULDLUUDLRURRRULUDRLDRDURLDUDDULRDRRDDRLRRDDRUDRURULDRRLUURUDULDDDLRRRRDRRRLLURUURLRLULUULLRLRDLRRLLUULLDURDLULURDLRUUDUUURURUURDDRLULUUULRDRDRUUDDDRDRL-RLRUDDUUDDDDRRLRUUDLLDRUUUDRRDLDRLRLLDRLUDDURDLDUDRRUURULLRRLUULLUDRDRUDDULRLLUDLULRLRRUUDLDLRDDDRDDDUDLULDLRRLUDUDDRRRRDRDRUUDDURLRDLLDLDLRRDURULDRLRRURULRDDLLLRULLRUUUDLDUURDUUDDRRRDDRLDDRULRRRDRRLUDDDRUURRDRRDURDRUDRRDLUDDURRLUDUDLLRUURLRLLLDDURUDLDRLRLLDLLULLDRULUURLDDULDDRDDDURULLDRDDLURRDDRRRLDLRLRRLLDLLLRDUDDULRLUDDUULUDLDDDULULDLRDDLDLLLDUUDLRRLRDRRUUUURLDLRRLDULURLDRDURDDRURLDLDULURRRLRUDLDURDLLUDULDDU';
let tests = ['ULL\nRRDDD\nLURDL\nUUUUD'];

let rules = inp.split('-');
let code = '';

class NumberPad {
    constructor() {
        this.curr = 5;
    }

    getCurr() {
        return this.curr;
    }

    left() {
        if (this.curr === 1 || this.curr === 4 || this.curr === 7) {
        } else {
            this.curr -= 1;
        }
    }

    right() {
        if (this.curr === 3 || this.curr === 6 || this.curr === 9) {
        } else {
            this.curr += 1;
        }
    }

    up() {
        if (this.curr === 1 || this.curr === 2 || this.curr === 3) {
        } else {
            this.curr -= 3;
        }
    }

    down() {
        if (this.curr === 7 || this.curr === 8 || this.curr === 9) {
        } else {
            this.curr += 3;
        }
    }
}

let pad = new NumberPad();

for (let i = 0; i < rules.length; i++) {
    for (let j = 0; j < rules[i].length; j++) {
        let x = rules[i][j];
        if (x === 'U') {
            pad.up();
        } else if (x === 'D') {
            pad.down();
        } else if (x === 'L') {
            pad.left();
        } else if (x === 'R') {
            pad.right();
        }
    }
    code += pad.getCurr();
}

console.log('Part 1:', code);

/*
 *     1
 *   2 3 4
 * 5 6 7 8 9
 *   A B C
 *     D
 */

class GrossPad {
    constructor() {
        this.curr = 5;
    }

    getCurr() {
        return this.curr;
    }

    left() {
        if (this.curr === 1 || this.curr === 2 || this.curr === 5 || this.curr === 'A' || this.curr === 'D') {
        } else if (this.curr === 3 || this.curr === 4 || this.curr === 6 || this.curr === 7 || this.curr === 8 || this.curr === 9) {
            this.curr -= 1;
        } else if (this.curr === 'B') {
            this.curr = 'A';
        } else if (this.curr === 'C') {
            this.curr = 'B';
        }
    }

    right() {
        if (this.curr === 1 || this.curr === 4 || this.curr === 9 || this.curr === 'C' || this.curr === 'D') {
        } else if (this.curr === 2 || this.curr === 3 || this.curr === 5 || this.curr === 6 || this.curr === 7 || this.curr === 8) {
            this.curr += 1;
        } else if (this.curr === 'A') {
            this.curr = 'B';
        } else if (this.curr === 'B') {
            this.curr = 'C';
        }
    }

    up() {
        if (this.curr === 1 || this.curr === 4 || this.curr === 2 || this.curr === 5 || this.curr === 9) {
        } else if (this.curr === 6 || this.curr === 7 || this.curr === 8) {
            this.curr -= 4;
        } else if (this.curr === 3) {
            this.curr = 1;
        } else if (this.curr === 'A') {
            this.curr = 6;
        } else if (this.curr === 'B') {
            this.curr = 7;
        } else if (this.curr === 'C') {
            this.curr = 8;
        } else if (this.curr === 'D') {
            this.curr = 'B';
        }
    }

    down() {
        if (this.curr === 5 || this.curr === 'A' || this.curr === 'D' || this.curr === 'C' || this.curr === 9) {
        } else if (this.curr === 1) {
            this.curr = 3;
        } else if (this.curr === 2 || this.curr === 3 || this.curr === 4) {
            this.curr += 4;
        } else if (this.curr === 6) {
            this.curr = 'A';
        } else if (this.curr === 7) {
            this.curr = 'B';
        } else if (this.curr === 8) {
            this.curr = 'C';
        } else if (this.curr === 'B') {
            this.curr = 'D';
        }
    }
}

pad = new GrossPad();
code = '';

for (let i = 0; i < rules.length; i++) {
    for (let j = 0; j < rules[i].length; j++) {
        let x = rules[i][j];
        if (x === 'U') {
            pad.up();
        } else if (x === 'D') {
            pad.down();
        } else if (x === 'L') {
            pad.left();
        } else if (x === 'R') {
            pad.right();
        }
    }
    code += pad.getCurr();
}

console.log('Part 2:', code);
