const {exec} = require('child_process');

const checkIfAppRuns = (appName) => {
    exec(`pgrep ${appName}`, (err, stdout, stderr) => {
        if (err) {
            if (err.code === 1) {
                console.log(`${appName} is not running`);
                return;
            }
            console.error(err);
            return;
        }
        if (stdout) {
            console.log(`${appName} is running`);
        }
    });
}

module.exports = {
    checkIfAppRuns
}