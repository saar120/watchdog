
function processesToArr(consoleOutput) {
    return consoleOutput.split('\n');
}

function getPid(process) {
    const pidMatch = process.match(/\d+/);
    if (!pidMatch || pidMatch.length === 0) return null;
    return parseInt(pidMatch[0]);
}

function mergeFfmpegPhp (phpObj, ffmpegArr) {
 return ffmpegArr.map((item) => {
     const userPhp = phpObj[item.userId];
     item.phpProcesses = userPhp ? userPhp : [];
     return item;
 })
}

module.exports = {
    processesToArr,
    getPid,
    mergeFfmpegPhp
}
