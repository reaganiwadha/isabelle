const { gqlConfig } = require('../config');

const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

/**
 * @param {Lokka} lokkaClient
 * App's lokka client for accesing graphql
 */

const headers = {
    'x-hasura-admin-secret': gqlConfig.adminSecret
}

const lokkaClient = new Lokka({
    transport : new Transport(gqlConfig.url,{headers})
});

module.exports = lokkaClient;