module.exports = class User {
    constructor(name, date, subordinates = [], isAdmin = false) {
        this.sName = name;
        this.birthDate = date;
        this.isUserAdmin = isAdmin;
        this.subordinateList = subordinates;
        this.subordinateRating = 0;
    }

    getWholeUserDataInTheStringFormat() {
        return 'User [dateOfBirth=' + this.birthDate + ', name=' + this.sName + ', isAdmin=' + this.isUserAdmin + ', subordinates=['
            + this.subordinateList.map(subordinate => subordinate.getWholeUserDataInTheStringFormat()).join(', ') + '], rating=' + this.subordinateRating + ']';
    }

    setSubordinateRating(rating) {
        this.subordinateRating = rating;
    }
}
