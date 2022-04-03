const liveUsersStrategy = require("./strategies/liveUsersStrategy");

const main = () => {
  const ffmpegOutput = require('./mockData/ffmpeg.js')
  const phpOutput = require('./mockData/php.js')

    liveUsersStrategy(ffmpegOutput, phpOutput)
};

main();