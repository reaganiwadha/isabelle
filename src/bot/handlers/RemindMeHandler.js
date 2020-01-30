const {reportConfig} = require('../../config');

const RemindMeHandler = (ctx) => {
    ctx.telegram.sendMessage(reportConfig.ownerId,JSON.stringify(ctx.state) );
}

module.exports = RemindMeHandler;