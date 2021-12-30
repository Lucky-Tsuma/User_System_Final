const db = require('./config');
const { function$ } = require('bizon');

void async function() {

    const markSent$ = function$(() => {
        db.query('mark_as_sent');
    });
    
    await markSent$();
    require('worker_threads').parentPort.postMessage('Emails marked as sent');
}();
    



  
  

