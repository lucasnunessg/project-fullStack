const { User } = require('../models');

const getAll = async () => {
    const users = await User.findAll();

    return users;
};

const getById = async (id) => {
    const users = await User.findByPk(id);

    return users;
}

module.exports = {
    getAll,
    getById,
}
