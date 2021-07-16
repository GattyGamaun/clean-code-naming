const os = require('os');

const CORNER_BOX = '+';
const VERTICAL_SIDE_BOX = '|';
const HORIZONTAL_SIDE_BOX = '-';
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
    const border = repeat(HORIZONTAL_SIDE_BOX, content.length);

    return CORNER_BOX + border + CORNER_BOX + os.EOL
         + VERTICAL_SIDE_BOX + content + VERTICAL_SIDE_BOX + os.EOL
         + CORNER_BOX + border + CORNER_BOX + os.EOL;
}

function showFrames() {
    console.log(makeFrameWithContent('enable', 'true'));
    console.log(makeFrameWithContent('name', 'Bob'));
}

showFrames();
