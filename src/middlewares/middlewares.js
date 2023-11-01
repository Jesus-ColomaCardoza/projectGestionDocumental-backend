import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const diskStorage= multer.diskStorage({
    destination:path.join(__dirname,'../assets/media/profile_photos'),
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
})
const photoUpload=multer({
    storage:diskStorage
}).single('profile_photo')

export{
    photoUpload
}