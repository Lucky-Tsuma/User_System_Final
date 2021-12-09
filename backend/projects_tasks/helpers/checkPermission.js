const roles = require('../utils/roles.permissions.json');
const { decodeToken } = require('../middleware/token_validaation');

module.exports = {
    hasPermission: (permission) => (req, res, next) => {
        const token = req.get('authorization');
        const { user_id: {role} }  = decodeToken(token);
        
        if(roles[role].includes(permission)){
            next();
        }
        else{
            return res.status(403).send({message: "Forbidden: can't access the route"})
        }
    }
}