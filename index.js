const {getProcesses} = require("./utils/execUtil");
const liveUsersStrategy = require("./strategies/liveUsersStrategy");
const {isDump} = require("./utils/yargs");
const {writeToJSONFile} = require("./utils/fsUtils");



const main = async () => {
    const ffmpegOutput = await getProcesses('ffmpeg');
    const phpOutput = await getProcesses('php');

    if (isDump){
        writeToJSONFile('dump/ffmpeg-dump.json', ffmpegOutput);
        writeToJSONFile('dump/php-dump.json', phpOutput);
    }

    liveUsersStrategy(ffmpegOutput, phpOutput);
};

main()
    .then(() => {
    console.log('done');
})
    .catch(err => {
    console.log(err);
});