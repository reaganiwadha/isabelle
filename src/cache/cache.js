const QuickLRU = require('quick-lru');

/**
 * @param {class} LRU 
 * A QuickLRU class but with added verify params
 */

class LRU extends QuickLRU{
    verify(key, value){
        if(this.cache.has(key) && this.cache.get(key) === value){ return true; }
        return false;
    }
}

const lru = new LRU({maxSize: 100});

module.exports = lru;