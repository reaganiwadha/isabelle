'use strict';

const Telegraf = require('telegraf');
const { botConfig } = require('../config');

const bot = new Telegraf(botConfig.token);

const {MessageHandler, PingHandler} = require('./handlers/handlers');
const {LinuxRegex} = require('./regexes');

bot.hears(LinuxRegex, (ctx)=>{ctx.reply("I\'d just like to interject for a moment.  What you\'re referring to as Linux,\r\nis in fact, GNU\/Linux, or as I\'ve recently taken to calling it, GNU plus Linux.\r\nLinux is not an operating system unto itself, but rather another free component\r\nof a fully functioning GNU system made useful by the GNU corelibs, shell\r\nutilities and vital system components comprising a full OS as defined by POSIX.\r\n\r\nMany computer users run a modified version of the GNU system every day,\r\nwithout realizing it.  Through a peculiar turn of events, the version of GNU\r\nwhich is widely used today is often called \"Linux\", and many of its users are\r\nnot aware that it is basically the GNU system, developed by the GNU Project.\r\n\r\nThere really is a Linux, and these people are using it, but it is just a\r\npart of the system they use.  Linux is the kernel: the program in the system\r\nthat allocates the machine\'s resources to the other programs that you run.\r\nThe kernel is an essential part of an operating system, but useless by itself;\r\nit can only function in the context of a complete operating system.  Linux is\r\nnormally used in combination with the GNU operating system: the whole system\r\nis basically GNU with Linux added, or GNU\/Linux.  All the so-called \"Linux\"\r\ndistributions are really distributions of GNU\/Linux.")});
bot.command('ping', PingHandler);

bot.on('message', MessageHandler);
bot.launch();

module.exports = bot;