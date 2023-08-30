import { diskStorage } from "multer";
import {
  Body,
  Controller,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
  ParseIntPipe,
  Res,
  Get,
  Req,
  UploadedFiles,
  ParseFilePipe,
} from "@nestjs/common";
import { PhotoService } from "./Photo.service";
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from "@nestjs/platform-express";
import { CreatePhoto } from "./dto/photo.create.dto";
import { ImageStorage } from "./photo.storage";
import path, { join } from "path";
import { Response, Request } from "express";
import { Home_Photo } from "@prisma/client";
import { Helper } from "./helper/helper.photo";
import { Observable, of } from "rxjs";

@Controller("housePhoto")
export class PhotoController {
  constructor(private photo: PhotoService) {}

  @Get(":id/photo")
  GetHousePhotoById(@Param("id", ParseIntPipe) houseId: number) {
    return this.photo.GetHousePhotoById(houseId);
  }

  @Post(":id/image")
  CreatePhoto(
    @Param("id", ParseIntPipe) houseId: number,
    @Body() photo: CreatePhoto
  ) {
    return this.photo.CreatePhoto(houseId, photo);
  }

  @Post(":id/")
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: "toilet" },
        { name: "kitchen", maxCount: 1 },
        { name: "shower", maxCount: 1 },
        { name: "door", maxCount: 1 },
        { name: "floor", maxCount: 1 },
        { name: "roof", maxCount: 1 },
        { name: "wall", maxCount: 1 },
        { name: "licenses", maxCount: 1 },
      ],
      
      ImageStorage
    )
  )
  uploadFile(
    @Param("id", ParseIntPipe) houseId: number,
    @Body() body,
    @UploadedFiles() file: Array<Express.Multer.File>
  ) {
    

    body.Wall = `http://localhost:3336/housePhoto/${file["wall"][0].filename}`;
    body.Door = `http://localhost:3336/housePhoto/${file["door"][0].filename}`;
    body.Shower = `http://localhost:3336/housePhoto/${file["shower"][0].filename}`;
    body.Floor = `http://localhost:3336/housePhoto/${file["floor"][0].filename}`;
    body.Roof = `http://localhost:3336/housePhoto/${file["roof"][0].filename}`;
    body.Toilet = `http://localhost:3336/housePhoto/${file["toilet"][0].filename}`;
    body.Kitchen = `http://localhost:3336/housePhoto/${file["kitchen"][0].filename}`;
    body.Home_license = `http://localhost:3336/housePhoto/${file["licenses"][0].filename}`;

    return this.photo.CreatePhoto(houseId, body);
    
  }
  @Get(":image")
  GetImage(@Param("image",ParseFilePipe) image:string, @Res() res:Response):any{
  return of(res.sendFile(image,{root:'./House_photos'}));
  }
}
