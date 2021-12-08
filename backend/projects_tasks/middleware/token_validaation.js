const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    checkToken: (req, res, next) => {
        let token = req.get('authorization');

        if(token) {
            token = token.slice(7);
            verify(token, process.env.SECRET_KEY, (err/*, docoded*/) => {
                if(err) {
                    return res.json({
                        success: 0,
                        message: 'Invalid token'
                    });
                } else {
                    next(); 
                }
            })
        } else {
            return res.json({
                success: 0,
                message: 'Access Denied!'
            });
        }
    }
}