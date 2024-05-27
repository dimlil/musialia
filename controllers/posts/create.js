import itemsSchema from '../../models/item.js';
import { uploadFile } from './uploadFile.js';

export const createItem = async (req, res) => {
    const { name, manufacturer, description, type, price, quantity } = req.body;
    
    const imgLink = await uploadFile(req, res);
    const item = new itemsSchema({
        name,
        imageUrl: imgLink,
        manufacturer,
        description,
        type,
        price,
        quantity
    })
    try {
        await item.save();
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}