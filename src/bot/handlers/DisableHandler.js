const parseDuration = require('parse-duration');
const prettyDuration = require('pretty-ms');

const debug = require('debug')('DisableHandler');

async function DisableHandler(bot, ctx) {
    const duration = parseDuration(ctx.state.command.args);

    ctx.reply("Disabling bot for " + prettyDuration(duration) + "!").then(() => {
        bot.stop().then(() => {
            debug('Bot is totally disabled now');
            setTimeout(() => {
                bot.launch().then(() => {
                    ctx.reply('Bot is now enabled!');
                });
            }, duration);
        });
    });
}

module.exports = DisableHandler;