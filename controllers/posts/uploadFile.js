import { v2 as cloudinary } from 'cloudinary';
export const uploadFile = async (req, res) => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        if (!req.file) {
            return 'No file uploaded'
        }
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'musicalia'
        });

        // Send the Cloudinary URL in the response
        return result.secure_url;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
}