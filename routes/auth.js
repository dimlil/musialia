import { Router } from "express";
import { registerUser } from "../controllers/auth/register.js";
import { loginUser } from "../controllers/auth/login.js";
import { logout } from "../controllers/auth/logout.js";
import { getAllUsers } from "../controllers/auth/getAllUsers.js";
import { verifyUser } from "../controllers/auth/verify.js";
import { deleteUser } from "../controllers/auth/deleteUser.js";

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

router.get('/logout', async(req, res) => {
    logout(req,res);
})

router.get('/registerUsersAdmin', verifyUser, async(req, res) => {
    try {
        const users = await getAllUsers();
        console.log(users);
        res.render('registerUsersAdmin', {users});
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/deleteUser/:id', async(req, res) => {
    deleteUser(req,res);
})
export { router as authRouter }