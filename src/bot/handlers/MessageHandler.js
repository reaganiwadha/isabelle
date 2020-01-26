const {insertChats} = require('../../query');
const debug = require('debug')('MessageHandler');

/**
 * @param {function} MessageHandler
 * Bot's behaviour when a message event happens
 */

const MessageHandler = (ctx) => {
    const message = ctx.message;
    insertChats(message.chat.id, message.chat.title);
    debug('A new message from',message.from.username);
};

module.exports = MessageHandler;