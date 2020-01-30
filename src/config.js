const botConfig = {
    token : process.env.BOT_TOKEN,
};

const expressConfig = {
    port : process.env.EXPRESS_PORT || 3000
};

const reportConfig = {
    ownerId : process.env.OWNER_ID
};

module.exports = { expressConfig, botConfig, reportConfig };