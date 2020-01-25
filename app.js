'use strict';
require('dotenv').config();

const Express = require('express');
const app = Express();

const bot = require('./src/bot/bot');
const lokka = require('./src/lokka/lokka');


app.get('/', (req,res) => res.sendStatus(200));
app.listen(3000, () => console.log('Bot started'));