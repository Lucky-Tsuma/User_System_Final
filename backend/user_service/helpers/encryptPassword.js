const bcrypt = require("bcrypt");

module.exports = {
    encrypt: async(password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
}