import bcrypt from 'bcrypt';
import userSchema from '../../models/user.js';
import { generateToken } from './verify.js';

export const loginUser = async (req, res) => {
    let { email, password } = req.body;
    if (email === '') {
        return res.render('login', {
            error: 'Въведете имейл',
        });
    }
    if (password === '') {
        return res.render('login', {
            error: 'Въведете парола',
        });
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
