import itemsSchema from '../../models/item.js';

export const getAllItems = async (req,res,next) => {
    const items = await itemsSchema.find({}).lean();
    req.items = items;
    next();
}
