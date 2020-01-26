const lokka = require('../lokka/lokka');
const cache = require('../cache/cache');

function insertChats (chatId, chatTitle){
    if(cache.verify(chatId,chatTitle)){
        return true;
    }else{        
        // TODO: implement checking on database if it matches, and then caches it
        lokka.mutate(`($chatId : String, $chatTitle : String){
            insert_chats(objects: {
                chatId : $chatId,
                chatTitle : $chatTitle
            }){
                affected_rows
            }
        }`, {chatId : chatId.toString(), chatTitle : chatTitle}).then(res=>{
            console.log(res);
        })

        cache.set(chatId,chatTitle);
        return false;
    }
}

module.exports = insertChats;