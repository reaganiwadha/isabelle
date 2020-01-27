'use strict';
require('dotenv').config();

require('./src/exitHandler');

const debug = require('debug')('app');

//const Express = require('express');
//const app = Express();

const {expressConfig} = require('./src/config');

const bot = require('./src/bot/bot');
const lokka = require('./src/lokka/lokka');

//app.get('/', (req,res) => res.sendStatus(200));
//app.listen(expressConfig.port, () => debug('Bot started'));

