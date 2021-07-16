const path = require('path');
const fs = require('fs');

const PropertyUtil = require('./thirdparty/property-util');
const InvalidFileTypeError = require('./thirdparty/invalid-file-type-error');
const InvalidDirectoryException = require('./thirdparty/invalid-directory-exception');
const FileExtensionPredicator = require('./file-extension');

const ALLOWED_IMAGES_EXTENSIONS = ['jpg', 'png'];
const ALLOWED_DOCUMENTS_EXTENSIONS = ['pdf', 'doc'];

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
        return this.getFiles(this.baseFileProperty, ALLOWED_IMAGES_EXTENSIONS);
    }

    listAllDocumentFiles() {
        return this.getFiles(this.baseFileProperty, ALLOWED_DOCUMENTS_EXTENSIONS);
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
        const image = new FileExtensionPredicator(ALLOWED_IMAGES_EXTENSIONS);
        return !image.checkExtension(file);
    }

    isInvalidDocument(file) {
        const document = new FileExtensionPredicator(ALLOWED_DOCUMENTS_EXTENSIONS);
        return !document.checkExtension(file);
    }

    getFiles(path, extension) {
        const file = new FileExtensionPredicator(extension);
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
