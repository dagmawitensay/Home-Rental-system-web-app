export class Helper{
   static customFileName(req,file,cb){
        let customFile=file.originalname.split(".")[0];
        customFile=customFile+Date.now() +'-'+Math.round(Math.random()*1e9);
        let fileExtention=""
        if(file.mimetype.indexOf("jpg")>-1){
            fileExtention=".jpg";
        }
        else if(file.mimetype.indexOf("png")>-1){
            fileExtention=".png";
        }
        customFile=customFile+fileExtention;
        cb(null,customFile);
    }
}