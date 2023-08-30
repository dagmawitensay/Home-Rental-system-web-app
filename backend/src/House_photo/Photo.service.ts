

import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/Prisma.service";
import { CreatePhoto } from './dto/photo.create.dto';

@Injectable()
export class PhotoService {
    constructor(private prisma:PrismaService){}










    async GetHouseById(
        
        houseId: number,
      ) {
        const findHouse= await this.prisma.house.findFirst({
          where: {
            id: houseId,
           
          },
          
        });
        return findHouse;
      }

   async  CreatePhoto(houseId:number,photo:CreatePhoto){
    

    const findHouse= await this.prisma.house.findFirst({
        where: {id:houseId},});
    

        if(!findHouse) throw new ForbiddenException("House is not found");



const NewPhoto=await this.prisma.home_Photo.create({
    data:{
        houseId,
        ...photo,}})

        NewPhoto.houseId=findHouse.id;
        return NewPhoto;

    }



//     async editBookmarkById(
//         housePhotoId: number,
        
//         dto: EditBookmarkDto,
//       ) {
//         // get the bookmark by id
//         const bookmark =
//           await this.prisma.bookmark.findUnique({
//             where: {
//               id: bookmarkId,
//             },
//           });
    






    
//   async  updateImageById(housePhotoId:number,floor){
// const floor=Home_Photo

//         const updatePhoto=await this.prisma.home_Photo.update({

//         })
//     }







async GetHousePhotoById(
        
  houseId: number,
) {
  const findHouse= await this.prisma.home_Photo.findMany({
    where: {
      houseId,
     
    },
    
  });
  return findHouse;
}

}
