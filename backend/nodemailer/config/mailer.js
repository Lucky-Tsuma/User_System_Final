const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
});

const sendEmail = async (message) => {

    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if(err) {
                return reject(err);
            }
            
            resolve(info.response);
        })
    })
}

module.exports = sendEmail;