import userSchema from '../../models/user.js';

export const getAllUsers = async () => {
    const users = await userSchema.find().lean();
    return users;
}
