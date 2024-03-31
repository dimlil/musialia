import { Router } from "express";
import { registerUser } from "../controllers/auth/register.js";
import { loginUser } from "../controllers/auth/login.js";

const router = new Router();

router.get('/register', async(req, res) => {
    try {
        res.render('register');
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post('/register', async(req, res) => {
    try {
        await registerUser(req, res);
    } catch (err) {
        console.log(err);
        res.redirect('/register')
    }
})
router.get('/login', async(req, res) => {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post('/login', async(req, res) => {
    try {
        await loginUser(req, res);
    } catch (err) {
        console.log(err);
        res.redirect('/login')
    }
})
export { router as authRouter }