import itemsSchema from '../../models/item.js';
import { uploadFile } from './uploadFile.js';
import { validateCreate } from './validations.js';

export const createItem = async (req, res) => {
    const { name, manufacturer, description, type, price, quantity } = req.body;
    const validationError = await validateCreate(name, manufacturer, description, type, price, quantity);
    if (validationError) {
        return res.render('create', {
            error: validationError
        })
    }
    const imgLink = await uploadFile(req, res);
    if (imgLink == 'No file uploaded') {
        return res.render('create', {
            error: 'Качете снимка'
        })
    }
    if (!imgLink) {
        return res.render('create', {
            error: 'Нещо се обърка при качването на изображението'
        })
    }
    const item = new itemsSchema({
        name,
        imageUrl: imgLink,
        manufacturer,
        description,
        type,
        price: Number(price),
        quantity: Number(quantity)
    })
    try {
        await item.save();
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}