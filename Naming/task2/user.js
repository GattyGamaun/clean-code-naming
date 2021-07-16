module.exports = class User {
    constructor(name, date, subordinates = [], isAdmin = false) {
        this.name = name;
        this.birthDate = date;
        this.isAdmin = isAdmin;
        this.subordinateList = subordinates;
        this.rating = 0;
    }

    toString() {
        return 'User [dateOfBirth=' + this.birthDate + ', name=' + this.name + ', isAdmin=' + this.isAdmin + ', subordinates=['
            + this.subordinateList.map(subordinate => subordinate.toString()).join(', ') + '], rating=' + this.rating + ']';
    }

    setSubordinateRating(rating) {
        this.rating = rating;
    }
}
