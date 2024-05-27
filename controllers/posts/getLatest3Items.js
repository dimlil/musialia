import itemsSchema from '../../models/item.js';

export const getLatest3Items = async (req,res,next) => {
    const items = await itemsSchema.find({}).sort({ _id: -1 }).limit(3).lean();
    req.items = items;
    next();
}
