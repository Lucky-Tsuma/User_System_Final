const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    checkToken: (req, res, next) => {
        const token = req.get('authorization');

        if(token) {
            // token = token.slice(7);
            verify(token, process.env.SECRET_KEY, (err) => {
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
            // status 403. Forbidden
            return res.status(403).json({
                success: 0,
                message: 'Access Denied!'
            });
        }
    },

    decodeToken: (token) => {
        
        try {
            const data = verify(token, process.env.SECRET_KEY);
            console.log(data);
            return data;
        } catch {
            return 
        }
    }
}