const ffmpegParser = require('./parsers/ffmpegParser');
const phpParser = require('./parsers/phpParser');

const {processesToArr, mergeFfmpegPhp} = require('./utils/utils');
const {writeToJSONFile} = require("./utils/fsUtils");



const main = () => {
    // mock data
    const ffmpegOutput = require('./mockData/ffmpeg');
    const phpOutput = require('./mockData/php');

    // prod data
    // const ffmpegOutput = getProcesses('ffmpeg');
    // const phpOutput = getProcesses('php');

    const ffmpegProcesses = processesToArr(ffmpegOutput);
    const phpProcesses = processesToArr(phpOutput);

    const ffmpegParsed = ffmpegParser.parseMany(ffmpegProcesses);
    const phpParsed = phpParser.parseManyByUser(phpProcesses);

    const merged = mergeFfmpegPhp(phpParsed, ffmpegParsed);

    writeToJSONFile('data.json',merged);
};

main()