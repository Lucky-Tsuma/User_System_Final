const bcrypt = require('bcrypt');
const joi = require('joi');
const db = require('../config');
const _ = require('lodash');
const { createToken } = require('../helpers/createToken');
const { encrypt } = require('../helpers/encryptPassword');

const schema = joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'))
});

module.exports = {
    login: async (req, res) => {

        const { error } = schema.validate(req.body);

        if(error) {
            //status 406. Not acceptable
            return res.status(406).json({ success: 0, message: error.details[0].message });
        }

        const { email , password } = req.body;

        try {
            if(email && password) {
                const result = await db.execute('login_user', { email });
                const user = result.recordset[0];

                //status 404. Not found
                return !user ? res.status(404).json({success: 0, message: 'Invalid user details'}) :
                    bcrypt.compare(password, user.password, (err, result) => {
                        if(!result) return res.status(404).json({success: 0, message: 'Invalid user details'});
                        const token = createToken(_.pick(user, ['user_id', 'firstname', 'lastname', 'email', 'phone', 'role', 'project_id']));
                        //status 202. Accepted
                        return res.status(202).json({success: 1, message: token});
                    }); 
            }
        } catch(error) {
            //status 500. Internal server error
            return res.status(500).json({success: 1, message: error});
        }

    },
    resetPassword: async (req, res) => {

        const { error } = schema.validate(req.body);

        if(error) {
            //Status 406. Not acceptable
            return res.status(406).json({ success: 0, message: error.details[0].message });
        }

        const password = await encrypt(req.body.password);
        const email = req.body.email;

        try {

            db.execute('change_password', { email, password });
            //status 202. Accepted
            return res.status(202).json({ success: 1, message: 'Password updated successfully' });
        } catch(error) {
            //Status 500. Internal server error
            return res.status(500).json({success: 0, message: error})
        }
        
    }
}