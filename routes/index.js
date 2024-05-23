import { Router } from "express";
import { verifyUser } from "../controllers/auth/verify.js";
import { createItem } from "../controllers/posts/create.js";
import { getAllItems } from "../controllers/posts/getItems.js";
import { getItemById } from "../controllers/posts/getItemById.js";
import { deleteItem } from "../controllers/auth/deleteItem.js";
import { updateItem } from "../controllers/posts/updateItem.js";
import { addToCart } from "../controllers/posts/addToCart.js";
import { getAllItemsById } from "../controllers/posts/getAllItemsById.js";

const router = new Router();

router.get('/', verifyUser, async(req, res) => {
    try {
        res.render('home',{
            isLoggedIn: req.isLoggedIn,
            isAdmin: req.session.role === 'admin' ? true : false
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/products', verifyUser, getAllItems, async(req, res) => {
    try {
        res.render('products',{
            isLoggedIn: req.isLoggedIn,
            isAdmin: req.session.role === 'admin' ? true : false,
            items: req.items
        });
        console.log(req.items);
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/product/:id', verifyUser, getItemById, async(req, res) => {
    try {
        res.render('product',{
            isLoggedIn: req.isLoggedIn,
            isAdmin: req.session.role === 'admin' ? true : false,
            items: req.items
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/admin', verifyUser, async(req, res) => {
    try {
        res.render('create',{
            isLoggedIn: req.isLoggedIn,
            isAdmin: req.session.role === 'admin' ? true : false
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
})
router.post('/create', async(req, res) => {
    try {
        await createItem(req, res);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/deleteItem/:id', verifyUser, async(req, res) => {
    try {
        await deleteItem(req, res);
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/updateItem/:id', verifyUser, getItemById, async(req, res) => {
    try {
        res.render('edit',{
            isLoggedIn: req.isLoggedIn,
            isAdmin: req.session.role === 'admin' ? true : false,
            item: req.items
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post('/updateItem/:id', verifyUser, getItemById, async(req, res) => {
    try {
        await updateItem(req, res);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/addToCart/:id', verifyUser, getItemById, async(req, res) => {
    try {
        await addToCart(req, res);
    } catch (error) {
        res.status(500).send(error.message)
    }
});
router.get('/cart', verifyUser, getAllItemsById, async(req, res) => {
    try {
        res.render('cart',{
            isLoggedIn: req.isLoggedIn,
            isAdmin: req.session.role === 'admin' ? true : false,
            cartItems: req.cartItems
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
});
export { router as indexRoute }