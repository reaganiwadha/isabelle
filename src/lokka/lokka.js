const { gqlConfig } = require('../config');

const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

/**
 * @param {Lokka} lokkaClient
 * App's lokka client for accesing graphql
 */
const lokkaClient = new Lokka({
    transport : new Transport(gqlConfig.url)
})

module.exports = lokkaClient;