import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder: `SkyMount/${req.body.homestayName}`,
      allowedFormats: ["jpg", "png", "jpeg", "webp"],
      public_id: `${req.body.homestayName}_${Date.now()}_${file.originalname}`,
    };
  },
});

export const upload = multer({ storage: storage });
