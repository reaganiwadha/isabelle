const botConfig = {
    token : process.env.BOT_TOKEN,
}

const expressConfig = {
    port : process.env.EXPRESS_PORT || 3000
}

module.exports = { expressConfig, botConfig };