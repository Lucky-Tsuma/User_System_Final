const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    createToken: (user_id, firstname, lastname, email, phone, role, project_id) => {
        const token = sign({
            user_id, 
            firstname, 
            lastname, 
            email, 
            phone, 
            role, 
            project_id
        }, process.env.SECRET_KEY,
        { expiresIn: "1h" });
        return token;
    }
}