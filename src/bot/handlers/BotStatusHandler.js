const os = require('os');

const BotStatusHandler = (ctx) => {
    ctx.reply("isabelle is running on : "+ os.hostname() + " for "+new Date(process.uptime() * 1000).toISOString().substr(11, 8));
}

module.exports = BotStatusHandler;