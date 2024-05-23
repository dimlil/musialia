import itemsSchema from '../../models/item.js';

export const addToCart = async (req, res) => {
    // Get the existing cart array from the session
    let cart = req.session.cart || [];
    
    // Check does the cart has this item and if its not add a new item to the cart array
    cart.push(req.items._id);
    // if (cart.includes(req.items._id) === false) {
    // }

    // Update the session with the new cart array
    req.session.cart = cart;
    res.redirect('/cart');
}
