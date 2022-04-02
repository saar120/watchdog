const {getPid} = require('../utils/utils')
const phpParser = {
    parseOne: function (phpOutput) {
        const item = {};
        item.pid = getPid(phpOutput);
        const data = phpOutput.substring(phpOutput.indexOf('heartbeat.php'), phpOutput.length).split(' ');// only get heartbeat.php
        if (data[0] !== 'heartbeat.php')  return null;
        item.platform = data[1];
        item.user = data[3];
        item.broadcastId = data[4];
        return item;
    },

    parseMany: function (phpArr) {
        const data = [];
        phpArr.forEach(item => {
            const dataItem = this.parseOne(item);
            if (dataItem) {
                data.push(dataItem);
            }
        });
        return data;
    },

    parseManyByUser: function (phpArr) {
        const data = {};
        phpArr.forEach(item => {
            const dataItem = this.parseOne(item);
            if (dataItem) {
                data[dataItem.user] ? data[dataItem.user].push(dataItem) : data[dataItem.user] = [dataItem];
            }
        });
        return data;
    }
}


module.exports = phpParser;


