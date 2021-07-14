module.exports = class FileExtension {
    constructor(extension) {
        this.fileExstension = extension;
    }

    checkExtension(name) {
        return this.fileExstension.some((extension) => {
            return name.toLowerCase().endsWith(extension);
        });
    }
};
