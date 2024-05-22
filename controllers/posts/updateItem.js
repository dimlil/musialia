import itemsSchema from '../../models/item.js';

export const updateItem = async (req,res) => {
    const { name, imageUrl, manufacturer, description, type, price, quantity } = req.body;
    await itemsSchema.updateOne({ _id: req.params.id }, 
        {$set: { name, imageUrl, manufacturer, description, type, price, quantity }});
    res.redirect('/product/' + req.params.id);
}
