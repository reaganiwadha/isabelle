//const lokka = require('../lokka/lokka');
const cache = require('../cache/cache');

const chats = require('')

function insertChats (chatId, chatTitle){
    if(cache.verify(chatId,chatTitle)){
        return true;
    }else{        
        // TODO: implement checking on database if it matches, and then caches it
        
        //TODO: Ditch GraphQL, use direct communication with postgres
        cache.set(chatId,chatTitle);
        return false;
    }
}

module.exports = insertChats;