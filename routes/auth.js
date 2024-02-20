import { Router } from "express";
import { registerUser } from "../controllers/auth/register.js";

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
        await registerUser(req, res)
        res.redirect('/')
    } catch (err) {
        console.log(err);
        res.redirect('/register')
    }
})
export { router as authRouter }