import itemsSchema from '../../models/item.js';

export const getAllItems = async (req,res,next) => {
    try {
        const items = await itemsSchema.find({}).lean();
        req.items = items;
    } catch (error) {
        console.log(error);
    }
    next();
}
