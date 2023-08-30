/* eslint-disable prettier/prettier */
import { diskStorage } from "multer";
import {v4 as uuidv4 } from "uuid";
const fs =require("fs");
// const FileType=require('file-type');
import path = require("path");

type ValidFileExtension = 'png'|'gif'|'jpg'|'jpeg';
type ValidMimeType = 'image/png'|'image/gif'|'image/jpg'|'image/jpeg';
const ValidFileExtensions:ValidFileExtension[]=['png','gif','jpg','jpeg']
const ValidmimeTypes:ValidMimeType[]=['image/png','image/gif','image/jpg','image/jpeg']

export const ImageStorage={
    storage:diskStorage({
        destination:'./House_photos',
        filename:(req,file,cb)=>{
            const fileExtension:string =path.extname(file.originalname);
            const FileName=uuidv4() + fileExtension;
            cb(null,FileName);

        
       
        },
    }),
    fileFilter:(req,file,cb)=>{
    const allowedMimeTypes:ValidMimeType[]=ValidmimeTypes
    allowedMimeTypes.includes(file.mimetype) ? cb(null,true) : cb(null,false);
    },
    limits: {
        fileSize: 104857600,
        files: 100
      },
}