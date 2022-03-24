const {checkIfAppRuns}= require('./watchdog');

setInterval(() => checkIfAppRuns('WhatsApp'), 60 * 1000);