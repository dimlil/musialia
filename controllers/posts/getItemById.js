import itemsSchema from '../../models/item.js';

export const getItemById = async (req, res, next) => {
    try {
        const items = await itemsSchema.findOne({ _id: req.params.id }).lean();
        req.items = items;
    } catch (error) {
        console.log(error);
    }
    next();
}