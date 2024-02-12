import { Router } from "express";

const router = new Router();

router.get('/', async(req, res) => {

    try {
        res.render('home');
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/register', async(req, res) => {
    try {
        res.render('register');
    } catch (error) {
        res.status(500).send(error.message)
    }
})
export { router as indexRoute }