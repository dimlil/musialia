import bcrypt from 'bcrypt';
import userSchema from '../../models/user.js';
import { generateToken } from './verify.js';
import { validateLogin } from './validations.js';

export const loginUser = async (req, res) => {
    let { email, password } = req.body;
    const validationError = await validateLogin(email, password);
    if (validationError) {
        return res.render('login', {
            error: validationError
        })
    }

    const user = await userSchema.findOne({ email });
    if (!user) {
        return res.render('login', {
            error: 'Не съществува този имейл',
        })
    }

    const status = await bcrypt.compare(password, user.password);
    if (status) {
        const token = await generateToken(email);
        req.session.token = token;
        req.session.role = user.role;
        return res.redirect('/');
    }
    return res.render('login', {
        error: 'Грешна парола',
    })
}
