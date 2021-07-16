class HarshadNumbers {
    static printNumbers() {
        const limit = 1000;
        for (let i = 1; i <= limit; i++) {
            if (i % HarshadNumbers.findSumOfDigits(i) === 0) {
                console.log(i);
            }
        }
    }

    static findSumOfDigits(number) {
        let digit = 0;
        while (number > 0) {
            let lastDigit = number % 10;
            digit += lastDigit;
            number = (number - lastDigit) / 10;
        }
        return digit;
    }
}

HarshadNumbers.printNumbers();
