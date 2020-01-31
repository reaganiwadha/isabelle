const cache = require('../cache/cache');

const chats = require('../../server/models').chats;

function insertChats(chatId, chatTitle) {
    return new Promise((resolve) => {
        if (cache.verify(chatId, chatTitle)) {
            resolve(true);
        } else {
            chats.upsert({
                id: chatId,
                chatTitle
            }).then((res) => {
                cache.set(chatId, chatTitle);
                resolve(res);
            });
        }
    });
}

module.exports = insertChats;