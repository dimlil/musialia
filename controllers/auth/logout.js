export const logout = async (req, res) => {
    req.session.destroy();
    return res.redirect('/');
}