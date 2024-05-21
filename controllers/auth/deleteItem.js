import itemsSchema from '../../models/item.js';

export const deleteItem = async (req,res) => {
    await itemsSchema.deleteOne({ _id: req.params.id });
    res.status(200).redirect('/products');
}
