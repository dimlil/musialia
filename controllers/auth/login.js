import bcrypt from 'bcrypt';
import userSchema from '../../models/user.js';
import { generateToken } from './verify.js';

export const loginUser = async (req, res) => {
    let { email, password } = req.body;
    const user = await userSchema.findOne({ email });
    if (!user) { return res.status(404).send('User Not Found') }

    const status = await bcrypt.compare(password, user.password);
    if (status) {
        const token = await generateToken(email);
        req.session.token = token;
        req.session.role = user.role;
        return res.redirect('/');
    }
    return res.redirect('/login');
}
