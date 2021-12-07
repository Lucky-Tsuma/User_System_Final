const db = require('../config');
const { encrypt } = require('../helpers/encryptPassword');

module.exports = {
    registerUser: async(req, res) => {

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
    }
}