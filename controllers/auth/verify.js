import jwt from 'jsonwebtoken';

export const generateToken = (data) => {
    const token = jwt.sign(data, process.env.PRIVATE_KEY);
    return token;
}
export const verifyUser = async (req, res, next) => {
    const { token } = req.session;
    
    try {
        jwt.verify(token, process.env.PRIVATE_KEY);
        req.isLoggedIn = true;
    } catch (error) {
        req.isLoggedIn = false;
    }
    next();
}