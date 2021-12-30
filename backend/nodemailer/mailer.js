const sendEmail = require('./config/mailer');
const {parentPort, workerData} = require('worker_threads');

const emails = workerData.emails;

const message = {

    from: {
        name: 'User System'
    },
    to: workerData.emails,
    subject: 'NEW ACCOUNT CREATED',
    text: 'Congratulations on creating an account on the user system.',
    html: 
    `<div>
    <h1>New Account Created</h1>
    <br />
    <p>You can now log in to see the project and tasks you have been assigned.</p>
    <br />
    <h3>Use the passsword you typed in when creating the account.</h3>
    <br />
    <img src="cid:uniqueID" alt"alt"/>
    <p font-style:italic>This message was sent automatically</p>
    </div>`,
    attachments: [
        {
            filename: 'behance.png',
            path: 'https://tinyurl.com/4nbchazz',
            cid: 'uniqueID'
        }
    ]
}

const send = async () => {

    try {
        await sendEmail(message);
        parentPort.postMessage('Email was sent successfully');
    } catch(error) {
        parentPort.postMessage(error)
    }

}

emails.length === 0 ? parentPort.postMessage('Awaiting recepients') : send();




