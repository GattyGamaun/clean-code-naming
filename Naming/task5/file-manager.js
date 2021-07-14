const path = require('path');
const fs = require('fs');

const PropertyUtil = require('./thirdparty/property-util');
const InvalidFileTypeError = require('./thirdparty/invalid-file-type-error');
const InvalidDirectoryException = require('./thirdparty/invalid-directory-exception');
const FileExtension = require('./file-extension');

const LIST_OF_IMAGE_FILE_TYPES = ['jpg', 'png'];
const LIST_OF_TEXT_FILE_TYPES = ['pdf', 'doc'];

module.exports = class FileManager {
    constructor() {
        this.baseFileProperty = PropertyUtil.loadProperty('basePath');
    }

    retrieveFile(file) {
        this.validateFileType(file);
        const directory = this.baseFileProperty + path.sep;
        return path.resolve(directory, file);
    }

    listAllImages() {
        return this.getFiles(this.baseFileProperty, LIST_OF_IMAGE_FILE_TYPES);
    }

    listAllDocumentFiles() {
        return this.getFiles(this.baseFileProperty, LIST_OF_TEXT_FILE_TYPES);
    }

    validateFileType(file) {
        if (this.isInvalidFileType(file)) {
            throw new InvalidFileTypeError('File type not Supported: ' + file);
        }
    }

    isInvalidFileType(file) {
        return this.isInvalidImage(file) && this.isInvalidDocument(file);
    }

    isInvalidImage(file) {
        const image = new FileExtension(LIST_OF_IMAGE_FILE_TYPES);
        return !image.checkExtension(file);
    }

    isInvalidDocument(file) {
        const document = new FileExtension(LIST_OF_TEXT_FILE_TYPES);
        return !document.checkExtension(file);
    }

    getFiles(path, extension) {
        const file = new FileExtension(extension);
        return this.getDirectory(path).filter((name) => {
            return file.checkExtension(name);
        });
    }

    getDirectory(path) {
        const directory = fs.statSync(path);
        this.validateDirectory(directory, path);
        return fs.readdirSync(path);
    }

    validateDirectory(stats, path) {
        if (this.isNotDirectory(stats)) {
            throw new InvalidDirectoryException('Invalid directory found: ' + path);
        }
    }

    isNotDirectory(stats) {
        return !stats.isDirectory();
    }
};
