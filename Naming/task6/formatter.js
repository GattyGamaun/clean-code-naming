const os = require('os');

const PLUS = '+';
const PIPE = '|';
const MINUS = '-';
const UNDERSCORE = ' _ ';

function repeatMinuses(symbol, length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += symbol;
    }
    return result;
}

function makeFrameWithContent(key, value) {
    const content = key + UNDERSCORE + value;
    const border = repeatMinuses(MINUS, content.length);

    return PLUS + border + PLUS + os.EOL
         + PIPE + content + PIPE + os.EOL
         + PLUS + border + PLUS + os.EOL;
}

function showFrame() {
    console.log(makeFrameWithContent('enable', 'true'));
    console.log(makeFrameWithContent('name', 'Bob'));
}

showFrame();
