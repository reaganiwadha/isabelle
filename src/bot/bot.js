"use strict";

const Telegraf = require("telegraf");

const { botConfig } = require("../config");

const bot = new Telegraf(botConfig.token);

bot.hears('your bad', (ctx) => ctx.reply('no u'))
bot.hears('no u', (ctx) => ctx.reply('u'))

bot.command('tobeimplemented', (ctx) => ctx.reply("so the next thing to be implemented by me is programmable responds, but the dev behind me is going to figure out how the fuck im gonna be connected to a db and what db"))

bot.launch()