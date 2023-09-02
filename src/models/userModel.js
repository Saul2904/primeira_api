const connection = require('./connection');

const getAll = async () => {
    const users = await connection.query('SELECT * FROM TB_USERS');
    return users;
};

module.exports = {
    getAll
};
