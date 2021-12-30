const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const {Worker} = require('worker_threads');

const fetch = new Worker('./fetch_emails.js');

fetch.on('message', result => {
    let emails = result.map(a => a.email);
    sendEmails(emails);
});
  
fetch.on('error', error => {
    console.log(error);
});

app.listen(PORT, () => {
    console.log(`Mailing service running on port: ${PORT}`);
})

const sendEmails = (emails) => {

    const sendEmails = new Worker('./mailer.js', {workerData: {emails}});

    sendEmails.once('message', result => {
        console.log(result);
        markAsSent();
    });
      
    sendEmails.on('error', error => {
        console.log(error);
    });
    
    sendEmails.on('exit', exitCode => {
        console.log(exitCode);
    })

}

const markAsSent = () => {

    const markSent = new Worker('./mark_sent.js');

    markSent.on('message', result => {
        console.log(result);
    });
      
    markSent.on('error', error => {
        console.log(error);
    });
}

