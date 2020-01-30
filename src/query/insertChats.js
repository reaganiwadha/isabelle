//const lokka = require('../lokka/lokka');
const cache = require('../cache/cache');

const chats = require('../../server/models').chats;
const debug = require('debug')('insertChats')


function insertChats (chatId, chatTitle){
    return new Promise(resolve => {
        if(cache.verify(chatId,chatTitle)){
            resolve(true);
        }else{
            //TODO: Fix Upsert not Updating
            chats.upsert({
                chatId: chatId,
                chatTitle, chatTitle
            }).then((res)=>{
                cache.set(chatId,chatTitle);
                resolve(res);
            })
        }
    })
    

    
}

module.exports = insertChats;