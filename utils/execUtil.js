const { exec } = require('child_process');

function getProcesses(searchTerm) {
    exec(`ps -ef | grep ${searchTerm}`, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        return stdout;
    });
}

module.exports = {
    getProcesses
};