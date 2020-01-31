const {
  reportConfig
} = require('../../config');
const parseDuration = require('parse-duration');
const prettyDuration = require('pretty-ms');
const telegraf = require('telegraf');

const RemindMeHandler = async (ctx) => {
  const duration = parseDuration(ctx.state.command.args);
  /*TODO:    
  1. store an object of dates
  2. get a date object that is shortest
  3. diff to current date
  4. set timeout,
  4.1 if diff is larger than 32bit integer, set timeout to max safe int then start from one
  4.2 if diff is smaller than 32bit integer, set that as timeout
  5. notify
  6. start from one
  */
  ctx.reply(
    "Ill remind you in " + prettyDuration(duration) + "!"
  );

  setTimeout(() => {
    ctx.reply("Times Up!", telegraf.Extra.inReplyTo(ctx.update.message.message_id));
  }, duration);

};

module.exports = RemindMeHandler;