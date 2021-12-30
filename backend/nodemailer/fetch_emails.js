const db = require('./config');
const { function$ } = require('bizon');
const cron = require('node-cron');

cron.schedule('*/15 * * * * *', () => {

    void async function() {

        const fetchEmails$ = function$(() => {
            const result = db.query('show_new_users');
            return result;
        });
        
        const result = await fetchEmails$();
        require('worker_threads').parentPort.postMessage(result.recordset);
    }();
    
});


  
  

