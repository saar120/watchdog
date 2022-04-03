const liveUsersStrategy = require("./strategies/liveUsersStrategy");
const {isDump} = require("./utils/yargs");
const {writeToJSONFile} = require("./utils/fsUtils");

const main = () => {
  const ffmpegOutput = require('./mockData/ffmpeg.js')
  const phpOutput = require('./mockData/php.js')

  if (isDump){
    writeToJSONFile('dump/ffmpeg-dump.json', ffmpegOutput);
    writeToJSONFile('dump/php-dump.json', phpOutput);
  }

    liveUsersStrategy(ffmpegOutput, phpOutput)
};

main();