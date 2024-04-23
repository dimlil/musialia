import itemsSchema from '../../models/item.js';

export const createItem = async (req, res) => {
    const { name, imageUrl, manufacturer, description, type, price, quantity } = req.body;

    const item = new itemsSchema({
        name,
        imageUrl,
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