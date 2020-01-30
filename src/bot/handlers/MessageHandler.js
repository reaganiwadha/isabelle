const {insertChats} = require('../../query');
const debug = require('debug')('MessageHandler');

const bot = require('../bot');

/**
 * @param {function} MessageHandler
 * Bot's behaviour when a message event happens
 */

const MessageHandler = async (ctx) => {
    const message = ctx.message;

    insertChats(message.chat.id, message.chat.title);

    debug('A new message from',message.from.username);
};

module.exports = MessageHandler;