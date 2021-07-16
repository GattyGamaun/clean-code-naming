class HarshadNumbers {
    static printNumbers() {
        const limit = 1000;
        for (let i = 1; i <= limit; i++) {
            if (i % HarshadNumbers.findDigitsSum(i) === 0) {
                console.log(i);
            }
        }
    }

    static findDigitsSum(number) {
        let digit = 0;
        while (number > 0) {
            let lastDigit = number % 10;
            digit += lastDigit;
            number = (number - lastDigit) / 10;
        }
        console.log('digit', digit)
        return digit;
    }
}

HarshadNumbers.printNumbers();
