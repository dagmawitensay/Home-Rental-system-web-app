"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStorage = void 0;
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const fs = require("fs");
const path = require("path");
const ValidFileExtensions = ['png', 'gif', 'jpg', 'jpeg'];
const ValidmimeTypes = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];
exports.ImageStorage = {
    storage: (0, multer_1.diskStorage)({
        destination: './House_photos',
        filename: (req, file, cb) => {
            const fileExtension = path.extname(file.originalname);
            const FileName = (0, uuid_1.v4)() + fileExtension;
            cb(null, FileName);
        },
    }),
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ValidmimeTypes;
        allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
    },
    limits: {
        fileSize: 104857600,
        files: 100
    },
};
//# sourceMappingURL=photo.storage.js.map