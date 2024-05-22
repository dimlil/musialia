import itemsSchema from '../../models/item.js';

export const addToCar = async (req, res) => {
    // Get the existing cart array from the session
    let cart = req.session.cart || [];

    // Add a new item to the cart array
    cart.push({ id: req.items._id });

    // Update the session with the new cart array
    req.session.cart = cart;
    res.redirect('/cart');
}
