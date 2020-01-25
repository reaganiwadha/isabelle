const lokka = require('../lokka/lokka');
const cache = require('../cache/cache');

function insertChats (chatId, chatTitle){
    if(cache.verify(chatId,chatTitle)){
        console.log('Cache verified', chatId, chatTitle);
        return true;
    }else{        
        console.log('Cache unverified', chatId, chatTitle);
        cache.set(chatId,chatTitle);
        return false;
    }
}

module.exports = insertChats