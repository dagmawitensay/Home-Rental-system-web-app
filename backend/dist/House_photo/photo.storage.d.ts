/// <reference types="multer" />
export declare const ImageStorage: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, cb: any) => void;
    limits: {
        fileSize: number;
        files: number;
    };
};
