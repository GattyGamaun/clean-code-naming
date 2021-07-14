class HarshadNumbers {
    static main() {
        const harshadLimitNumber = 1000;
        for (let i = 1; i <= harshadLimitNumber; i++) {
            if (i % HarshadNumbers.loop(i) === 0) {
                console.log(i);
            }
        }
    }

    static loop(number) {
        let sequence = 0;
        while (number > 0) {
            let unit = number % 10;
            sequence += unit;
            number = (number - unit) / 10;
        }
        return sequence;
    }
}

HarshadNumbers.main();
