import itemsSchema from '../../models/item.js';

export const getAllItemsById = async (req, res, next) => {
    const items = await itemsSchema.find().where('_id').in(req.session.cart).exec();
    req.cartItems = items;
    next();
}
