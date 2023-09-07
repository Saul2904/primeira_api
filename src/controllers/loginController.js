const loginModel = require('../models/loginModel');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const resultLogin = await loginModel.login(req.body.user, req.body.pwd);
    if(resultLogin.rowCount > 0){
      //auth ok
      const id = resultLogin.rows[0].id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.status(202).json({ auth: true, token: token });
    }else{
      return res.status(203).json({message: 'Login inválido!'});
    }
};

module.exports = {
    login
};