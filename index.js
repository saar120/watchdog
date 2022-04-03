const {getProcesses} = require("./utils/execUtil");
const liveUsersStrategy = require("./strategies/liveUsersStrategy");



const main = async () => {
    const ffmpegOutput = await getProcesses('ffmpeg');
    const phpOutput = await getProcesses('php');

    liveUsersStrategy(ffmpegOutput, phpOutput);
};

main()
    .then(() => {
    console.log('done');
})
    .catch(err => {
    console.log(err);
});