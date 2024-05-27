import bcrypt from 'bcrypt';
import userSchema from '../../models/user.js';
import { generateToken } from './verify.js';
import { validateRegister } from './validations.js';

export const registerUser = async (req, res) => {
    let { email, password, rePassword } = req.body;
    const validationError = await validateRegister(email, password, rePassword,);
    if (validationError) {
        return res.render('register', {
            error: validationError
        })
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const user = new userSchema({
        email,
        password,
        role: 'user'
    })
    try {
        await user.save();
        const token = await generateToken(email);
        req.session.token = token;
        req.session.role = "user";
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}