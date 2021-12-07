const bcrypt = require('bcrypt');
const db = require('../config');
const _ = require('lodash');
const { createToken } = require('../helpers/createToken');
const { encrypt } = require('../helpers/encryptPassword');

module.exports = {
    login: async (req, res) => {

        const { email , password } = req.body;

        try {
            if(email && password) {
                const result = await db.execute('login_user', { email });
                const user = result.recordset[0];

                !user ? res.json({success: 0, message: 'Invalid user details'}) :
                    bcrypt.compare(password, user.password, (err, result) => {
                        if(!result) return res.json({success: 0, message: 'Invalid user details'});
                        const token = createToken(_.pick(user, ['user_id', 'firstname', 'lastname', 'email', 'phone', 'role', 'project_id']));
                        return res.json({success: 1, message: token});
                    }); 
            }
        } catch(error) {
            return res.json({success: 1, message: error});
        }

    },
    resetPassword: async (req, res) => {

        const password = await encrypt(req.body.password);
        console.log(password);
        const email = req.body.email;

        try {

            db.execute('change_password', { email, password });
            return res.json({ success: 1, message: 'Password updated successfully' });
        } catch(error) {
            return res.json({success: 0, message: error})
        }
        
    }
}