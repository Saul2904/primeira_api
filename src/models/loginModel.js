const connection = require('./connection');

const login = async (user,pwd) => {
    const users = await connection.query(`SELECT id FROM tb_users where login = '${user}' and password = '${pwd}'`);
    console.log(`SELECT id FROM tb_users where login = '${user}' and password = '${pwd}'`);
    return users;
};

module.exports = {
    login
};