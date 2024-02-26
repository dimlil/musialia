import bcrypt from 'bcrypt';
import userSchema from '../../models/user.js';

export const registerUser = async (req, res) => {
    let { email, password } = req.body;
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
        //    res.cookie('token', token);
        //    res.cookie('role', "user");
        req.session.token = token;
        req.session.role = "user";
        return res.redirect('/');;
    } catch (error) {

    }
}