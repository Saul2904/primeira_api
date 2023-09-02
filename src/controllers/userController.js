const usersModel = require('../models/userModel');

const getAll = async (req, res) => {

    const users = (await usersModel.getAll()).rows;

    return res.status(200).json(users);
};

module.exports = {
    getAll
};