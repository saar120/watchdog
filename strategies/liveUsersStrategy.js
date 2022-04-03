const {processesToArr, mergeFfmpegPhp} = require("../utils/utils");
const ffmpegParser = require("../parsers/ffmpegParser");
const phpParser = require("../parsers/phpParser");
const {writeToJSONFile} = require("../utils/fsUtils");

function liveUsersStrategy(ffmpegOutput, phpOutput) {
    if (!ffmpegOutput || !phpOutput) {
        console.log('No data found');
        return;
    }
    const ffmpegProcesses = processesToArr(ffmpegOutput);
    const phpProcesses = processesToArr(phpOutput);

    const ffmpegParsed = ffmpegParser.parseMany(ffmpegProcesses);
    const phpParsed = phpParser.parseManyByUser(phpProcesses);

    const merged = mergeFfmpegPhp(phpParsed, ffmpegParsed);

    writeToJSONFile('data.json',merged);
}

module.exports = liveUsersStrategy;