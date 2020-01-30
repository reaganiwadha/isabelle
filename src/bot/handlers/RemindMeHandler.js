const {reportConfig} = require('../../config');
const parseDuration = require('parse-duration');
const prettyDuration = require('pretty-ms');

const usage = "remindme - USAGE:\ns"

const RemindMeHandler = async (ctx) => {
    const duration = parseDuration(ctx.state.command.args);

    ctx.reply(
        "Ill remind you in "+prettyDuration(duration)+"!"
    );

    setTimeout(()=>{
      ctx.reply("Times Up!")  
    },duration)

}

module.exports = RemindMeHandler;