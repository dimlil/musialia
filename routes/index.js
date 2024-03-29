import { Router } from "express";

const router = new Router();

router.get('/', async(req, res) => {

    try {
        console.log(req.session.role);
        res.render('home');
    } catch (error) {
        res.status(500).send(error.message)
    }
})

export { router as indexRoute }