'use strict';
const debug = require('debug');

const Telegraf = require('telegraf');
const { botConfig } = require('../config');

const bot = new Telegraf(botConfig.token);

const {
    MessageHandler, 
    PingHandler, 
    LinuxHandler,
    RemindMeHandler,
    rHandler,
    DisableHandler,
    BotStatusHandler
} = require('./handlers');
const {LinuxRegex} = require('./regexes');
const commandParts = require('telegraf-command-parts');

bot.use(commandParts());

bot.hears(LinuxRegex, LinuxHandler);

bot.command('ping', PingHandler);
bot.command('remindme', RemindMeHandler);
bot.command('r', rHandler);
bot.command('disable', (ctx) => DisableHandler(bot, ctx));
bot.command('botstatus', BotStatusHandler);

bot.on('message', MessageHandler);

bot.launch();

module.exports = bot;