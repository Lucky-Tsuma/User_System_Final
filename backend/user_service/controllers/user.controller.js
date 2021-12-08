const db = require('../config');
const joi = require('joi');
const { encrypt } = require('../helpers/encryptPassword');

const schema = joi.object().keys({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().min(10).required(),
    role: joi.string().required(),
    password: joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'))
});

module.exports = {
    registerUser: async(req, res) => {

        const { error } = schema.validate(req.body);

        if(error) {
            return res.json({ success: 0, message: error.details[0].message });
        }

        const { firstname, lastname, email, phone, role } = req.body;
        const password = await encrypt(req.body.password);
        
        try {
            await db.execute('create_user', {
                firstname, 
                lastname, 
                email, 
                phone, 
                role,
                password

            });

            return res.json({success: 1, message: 'Registration was successfull'});
        } catch (err){
            return res.status(500).json({success: 0, message: 'Internal server error'});
        }
    },
    showUsers: async(req, res) => {

        try{

            const result = await db.query('show_users');
            return res.json({ success: 1, message: result.recordset }); 
        } catch (error) {
            return res.json({ success: 0, message: error });
        }
    },
    showUser: async(req, res) => {

        const { user_id } = req.body;

        try {

            const result = await db.execute('show_user', { user_id });
            return res.json({ success: 1, message: result.recordset });
        } catch (error) {
            return res.json({ success: 0, message: error });
        }
    },
    deleteUser: async(req, res) => {

        const { user_id } = req.body;

        try { 

            await db.execute('delete_user', { user_id });
            return res.json({success: 1, message: 'User was deleted successfully'});
         } catch (error) {
            return res.json({ success: 0, message: error });
         }
    }
}