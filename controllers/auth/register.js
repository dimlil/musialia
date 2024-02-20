import bcrypt from 'bcrypt';
import userSchema from '../../models/user.js';

export const registerUser = async (req,res)=>{
    let {email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const user = new userSchema({
        email,
        password,
        role: 'user'
    })
    try {
       await user.save();
    } catch (error) {
        
    }
}