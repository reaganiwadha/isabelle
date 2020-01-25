'use strict';

const Telegraf = require('telegraf');
const { botConfig } = require('../config');

const bot = new Telegraf(botConfig.token);

const MessageHandler = require('./handlers/MessageHandler');

bot.on('message', MessageHandler);

bot.launch();

module.exports = bot;