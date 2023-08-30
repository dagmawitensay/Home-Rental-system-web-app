/// <reference types="multer" />
import { PhotoService } from "./Photo.service";
import { CreatePhoto } from "./dto/photo.create.dto";
import { Response } from "express";
import { Home_Photo } from "@prisma/client";
export declare class PhotoController {
    private photo;
    constructor(photo: PhotoService);
    GetHousePhotoById(houseId: number): Promise<Home_Photo[]>;
    CreatePhoto(houseId: number, photo: CreatePhoto): Promise<Home_Photo>;
    uploadFile(houseId: number, body: any, file: Array<Express.Multer.File>): Promise<Home_Photo>;
    GetImage(image: string, res: Response): any;
}
