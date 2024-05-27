import itemsSchema from '../../models/item.js';

export const afterPay = async (req,res) => {
    const ids = req.query.ids.split(',');
    for (const id of ids) {
        const item = await itemsSchema.findById(id);
        if (item) {
            const newQuantity = item.quantity - 1;
            await itemsSchema.updateOne({ _id: id }, { $set: { quantity: newQuantity } });
        }
    }
    res.redirect('/');
}
