const os = require('os');

const PLUS = '+';
const PIPE = '|';
const MINUS = '-';
const DIVIDER_BETWEEN_KEY_VALUE = ' _ ';

function repeat(symbol, length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += symbol;
    }
    return result;
}

function makeFrameWithContent(key, value) {
    const content = key + DIVIDER_BETWEEN_KEY_VALUE + value;
    const border = repeat(MINUS, content.length);

    return PLUS + border + PLUS + os.EOL
         + PIPE + content + PIPE + os.EOL
         + PLUS + border + PLUS + os.EOL;
}

function showFrames() {
    console.log(makeFrameWithContent('enable', 'true'));
    console.log(makeFrameWithContent('name', 'Bob'));
}

showFrames();
