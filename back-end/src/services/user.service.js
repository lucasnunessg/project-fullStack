const { User } = require ('../models/user.model');


const getAll = async () => {
    const users = await User.findAll();

    return users;
};

module.exports = {
    getAll,
}