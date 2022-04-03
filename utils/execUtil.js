const { exec } = require('child_process');

function getProcesses(searchTerm) {
    return new Promise((resolve, reject) => {
        exec(`ps -ef kl;'jk| grep ${searchTerm}`, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            resolve(stdout);
        });
    });
}

module.exports = {
    getProcesses
};