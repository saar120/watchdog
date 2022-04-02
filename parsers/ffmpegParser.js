const {getPid} = require("../utils/utils");

const ffmpegParser = {
    parseOne : function(ffmpegOutput) {
        const metaDataString = ffmpegOutput.substring(ffmpegOutput.indexOf("-metadata user"), ffmpegOutput.length - 1);
        const dataItem = {};
        dataItem.userId = metaDataString.split("=")[1]?.split("\"")[1];
        if (!dataItem.userId) {
            return null;
        }

        dataItem.roomId = parseInt(metaDataString.split("=")[2]?.split("\"")[1]);
        dataItem.ffmpeg = {};
        dataItem.ffmpeg.pid = getPid(ffmpegOutput);
        const broadcasts = metaDataString.split("=")[3]?.split("\"")[1].split(",");
        dataItem.ffmpeg.broadcasts = [];
        broadcasts.forEach(broadcast => {
            const [type, id] = broadcast.split(":");
            dataItem.ffmpeg.broadcasts.push({
                platform: type,
                broadcastId: id,
            });
    });
        return dataItem;
    },

    parseMany: function (ffmpegArray) {
        const parsedFfmpeg = [];
        ffmpegArray.forEach(line => {
            const dataItem = this.parseOne(line);
            if (dataItem) {
                parsedFfmpeg.push(dataItem);
            }
        });
        return parsedFfmpeg;
    }
}

module.exports = ffmpegParser;