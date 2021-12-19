const roles = require('../utils/roles.permissions.json');
const { decodeToken } = require('../middleware/token_validation');

module.exports = {
    hasPermission: (permission) => (req, res, next) => {
        const token = req.get('authorization');
        const user  = decodeToken(token);

        if(!user) {
            return res.status(400).json({ success: 0, message: 'Invalid token' });
        } 

        const { user_id: {role} } = user;
        
        if(roles[role].includes(permission)){
            next();
        }
        else{
            return res.status(403).json({ success: 0, message: 'Forbidden: can\'t access the route' })
        }
    }
}