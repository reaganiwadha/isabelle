const PingHandler = (ctx) => {
    ctx.reply("pong sepongg!, Bot is active! uptime="+new Date(process.uptime() * 1000).toISOString().substr(11, 8));
}

module.exports = PingHandler;