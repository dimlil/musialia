import { Router } from "express";
import { verifyUser } from "../controllers/auth/verify.js";

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

router.get('/admin', async(req, res) => {
    try {
        res.render('create');
    } catch (error) {
        res.status(500).send(error.message);
    }
})
export { router as indexRoute }