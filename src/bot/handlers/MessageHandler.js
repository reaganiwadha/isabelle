const {insertChats} = require('../../query');
const debug = require('debug')('MessageHandler');

const bot = require('../bot');
const {reportConfig} = require('../../config');

/**
 * @param {function} MessageHandler
 * Bot's behaviour when a message event happens
 */

const MessageHandler = async (ctx) => {
    const message = ctx.message;

    //ctx.telegram.sendMessage(reportConfig.ownerId, "!!!");

    insertChats(message.chat.id, message.chat.title).then((res)=>{
        ctx.reply(res);
    })
    debug('A new message from',message.from.username);
};

module.exports = MessageHandler;