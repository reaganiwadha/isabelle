'use strict';
const debug = require('debug');

const Telegraf = require('telegraf');
const { botConfig } = require('../config');

const bot = new Telegraf(botConfig.token);

const {MessageHandler, PingHandler, LinuxHandler} = require('./handlers');
const {LinuxRegex} = require('./regexes');

bot.hears(LinuxRegex, LinuxHandler);
bot.command('ping', PingHandler);
bot.on('message', MessageHandler);

bot.launch();

module.exports = bot;