const {insertChats} = require('../../query');

/**
 * @param {function} MessageHandler
 * Bot's behaviour when a message event happens
 */

const MessageHandler = (ctx) => {
    const message = ctx.message;
    insertChats(message.chat.id, message.chat.title);
}

module.exports = MessageHandler;