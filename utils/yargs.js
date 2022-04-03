const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const isDump = !!argv.dump;

module.exports = {
  isDump
}