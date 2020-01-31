const QuickLRU = require('quick-lru');
const debug = require('debug')('LRUCache');

/**
 * @param {class} LRU 
 * A QuickLRU class but with added verify params
 */

class LRU extends QuickLRU {
    verify(key, value) {
        if (this.cache.has(key) && this.cache.get(key) === value) {
            debug('Cache for', key, 'with the value of', value, 'is valid!');
            return true;
        }
        debug('Cache for', key, 'with the value of', value, 'is invalid!');
        return false;
    }
}

const lru = new LRU({
    maxSize: 100
});

module.exports = lru;