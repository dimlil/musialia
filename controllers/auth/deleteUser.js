import userSchema from '../../models/user.js';

export const deleteUser = async (req,res) => {
    await userSchema.deleteOne({ _id: req.params.id });
    res.redirect('/');
}
